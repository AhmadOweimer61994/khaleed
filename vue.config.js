const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js",
      nodeIntegration: false,
      contextIsolation: true,
      builderOptions: {
        extraResources: [
          {
            from: path.resolve(__dirname, "src/public/print-popup.html"),
            to: "public/print-popup.html",
            filter: ["**/*"],
          },
          {
            from: path.resolve(__dirname, "src/assets/css"),
            to: "assets/css",
            filter: ["**/*"],
          },
          {
            from: path.resolve(__dirname, "src/assets"),
            to: "assets",
            filter: ["**/*"],
          },
          {
            from: path.resolve(__dirname, "src/js"),
            to: "js",
            filter: ["**/*"],
          },
        ],
      },
    },
  },
});
