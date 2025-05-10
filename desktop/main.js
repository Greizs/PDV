const { app, BrowserWindow } = require("electron");
const path = require("path");
const { fork } = require("child_process");

// Iniciar backend
const backendProcess = fork(path.join(__dirname, "../backend/index.js"));

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Cargar el frontend (en desarrollo o producción)
  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../frontend/build/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
  backendProcess.kill(); // Terminar el proceso del backend
});