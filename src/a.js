window.onload = function () {
    displayNumber();
}

function doReload() {

    // reloadメソッドによりページをリロード
    window.location.reload();
}

function displayNumber() {

    const numbers = document.getElementsByClassName("numbers");
    numbers[0].textContent = getRandomInt(100);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const reloadButton = document.getElementsByClassName('reload')[0];
reloadButton.addEventListener('click', () => {
    doReload();
});

const tcpButton = document.getElementsByClassName('tcp')[0];
tcpButton.addEventListener('click', () => {
    // レンダラプロセス（送信側）
    const electron = require('electron');
    const ipc = electron.ipcRenderer;
    console.log(ipc.sendSync('synchronous-message', 'ping'));// 'message'というイベントを実行
});