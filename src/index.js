const electron = require('electron');
const { BrowserWindow } = electron.remote;
const path = require('path');

window.onload = () => {

};

/**
 * ページリロード
 */
function doReload() {
    // reloadメソッドによりページをリロード
    window.location.reload();
}

/**
 * 
 * @param {string} htmlFileName 
 */
function openSubWindow(htmlFileName) {
    const subWindow = new BrowserWindow({
        width: 400, height: 400,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        },
    });
    //ファイルパスの変換
    const modalPath = path.join('file://', __dirname, '/' + htmlFileName);
    subWindow.loadURL(modalPath);

    subWindow.show();
    subWindow.webContents.openDevTools();
}

const reloadButton = document.getElementsByClassName('reload')[0];
reloadButton.addEventListener('click', () => {
    doReload();
});

const tcpButton = document.getElementsByClassName('tcp')[0];
tcpButton.addEventListener('click', () => {
    const htmlFileName = 'sub.html';
    openSubWindow(htmlFileName);
});