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