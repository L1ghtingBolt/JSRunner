const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");


function openSettings() {
  let win = new BrowserWindow({ width: 400, height: 320, webPreferences: {webSecurity: false} })
  win.on('close', function () { win = null })
  win.loadURL(`file://${__dirname}/dist/index.html#settings`);
}

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Settings',
        click: openSettings,
        role: 'settings',
      },
      {
        label: 'Open',
        role: 'openfile',
      },
    ]
  }
];


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('ready', () => {
  Menu.setApplicationMenu(Menu.buildFromTemplate(template))
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
