const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')



let win

function createWindow() {
   win = new BrowserWindow({width: 1040, height: 780,
      webPreferences: {
         nodeIntegration: true
     }})
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
}

app.on('ready', createWindow)
