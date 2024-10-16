import { contextBridge, ipcRenderer } from "electron";

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: ipcRenderer,
  print: (options) => ipcRenderer.send("print-request", options),
  onPrintResponse: (callback) =>
    ipcRenderer.on("print-response", (event, response) => callback(response)),
  openPrintPopup: () => ipcRenderer.send("open-print-popup"),
  minimizeWindow: () => ipcRenderer.send("minimize-window"),

  on: (channel, callback) => ipcRenderer.on(channel, callback),
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),
});
