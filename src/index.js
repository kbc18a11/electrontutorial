const electron = require('electron');
const { BrowserWindow } = electron.remote;
const path = require('path');
const TestModel = require('./db/dbnodel/TestModel');

window.onload = () => {
    loadTestModelData();
};

async function loadTestModelData() {
    const dbdatas = await new TestModel().all();
    console.log(dbdatas);

    const dbdataTable = document.getElementsByClassName('dbdata')[0];

    dbdatas.forEach((data) => {
        const idtd = document.createElement('td');
        idtd.className = '_id';
        idtd.textContent = data._id;

        const nametd = document.createElement('td');
        nametd.className = 'name';
        nametd.textContent = data.name;

        const tr = document.createElement('tr');
        tr.id = data.id;
        tr.appendChild(idtd);
        tr.appendChild(nametd);

        dbdataTable.appendChild(tr);
    });


}


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

const submitButton = document.getElementsByClassName('insert')[0];
submitButton.addEventListener('click', (e) => {
    const name = document.getElementsByName('name')[0].value;

    const createPrame = { name: name };
    const testModel = new TestModel();

    testModel.create(createPrame);
    e.preventDefault();
});