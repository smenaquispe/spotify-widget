const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
}

app.on('window-all-closed', () => {
    if (process.platform !== 'win32') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})