const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;

let mainWindow = null;
app.on('ready', () => {
    // mainWindowを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
    mainWindow = new BrowserWindow({
        width: 800, height: 800, webPreferences: {
            nodeIntegration: true
        }
    });
    // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // ChromiumのDevツールを開く
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});

// ipc.on(channel, listener) の形をとる。channel 名はなんでも良い。
ipc.on('synchronous-message', (event, arg) => {
    console.log("arg: ", arg);  // arg には 'hoge' が入る (後述)
    event.returnValue = "Okay"; //レンダラープロセスに返す
});