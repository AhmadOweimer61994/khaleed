import { app, protocol, BrowserWindow, ipcMain } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
import path from "path";

const isDevelopment = process.env.NODE_ENV !== "production";
let mainWindow;
let printWindow;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  mainWindow = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: !isDevelopment,
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    await mainWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) mainWindow.webContents.openDevTools();
  } else {
    createProtocol("app");
    mainWindow.loadURL("app://./index.html");
  }
}

ipcMain.on("open-print-popup", (event, tableHtml) => {
  printWindow = new BrowserWindow({
    fullscreen: true,
    modal: true,
    parent: mainWindow,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  let printPopupPath;

  if (isDevelopment) {
    // Development path
    printPopupPath = path.join(__dirname, "../src/public/print-popup.html");
    printWindow.loadURL(`file://${printPopupPath}`);
  } else {
    // Production path
    printPopupPath = path.join(
      process.resourcesPath,
      "public/print-popup.html"
    );
    printWindow.loadFile(printPopupPath);
  }

  console.log("Print popup path:", printPopupPath);

  printWindow.on("closed", () => {
    printWindow = null;
  });

  printWindow.webContents.on("did-finish-load", () => {
    printWindow.webContents.send("load-table", tableHtml);
  });
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.on("print-request", (event, options) => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    win.webContents.print(options, (success, failureReason) => {
      if (!success) {
        console.error("Print failed:", failureReason);
        event.reply("print-response", {
          success: false,
          reason: failureReason,
        });
      } else {
        console.log("Print initiated");
        event.reply("print-response", { success: true });
      }
    });
  } else {
    event.reply("print-response", {
      success: false,
      reason: "No focused window",
    });
  }
});
ipcMain.on("minimize-window", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.on("print", (event) => {
  const focusedWindow = BrowserWindow.getFocusedWindow();
  if (focusedWindow) {
    focusedWindow.webContents.print(
      {
        silent: true,
        printBackground: true,
      },
      (success, errorType) => {
        if (!success) console.log(errorType);
      }
    );
  }
});
