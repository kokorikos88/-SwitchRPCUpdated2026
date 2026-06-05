//config
let production = true;
let version = 4;

//dependencies
const rpc = require('discord-rich-presence')('1512163797153091624');
const axios = require('axios');
const { app, BrowserWindow, ipcMain } = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;
let data;

//fix for linux
app.commandLine.appendSwitch('disable-seccomp-filter-sandbox')

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.setMenu(null);

const fs = require('fs');
const path = require('path');

try {
    data = JSON.parse(
        fs.readFileSync(
            path.join(__dirname, 'resources', 'rpc.json'),
            'utf8'
        )
    );

    console.log('Loaded local rpc.json');
    mainWindow.loadFile('index.html');
}
catch (err) {
    console.error('Failed to load rpc.json:', err);
}
}

app.whenReady().then(createWindow);


ipcMain.on('getGameData', function(event) {
    let gameArray = [];

    data.gameLibrary.forEach(function(game) {
        gameArray.push(game.name);
    });

    gameArray.sort();

    event.sender.send('sendingGameData', gameArray);
});

ipcMain.on('x', function() {
    app.quit();
});

ipcMain.on('max', function () {
    if (!mainWindow) return;
    if (mainWindow.isMaximized()) return mainWindow.unmaximize();
    else return mainWindow.maximize();
});

ipcMain.on('min', function() {
    if (!mainWindow) return;
    mainWindow.minimize();
});

let name;
let desc;
//catch values
ipcMain.on('game:value', function(e, value) {
    name = value;
});

ipcMain.on('desc:value', function (e, value) {
   desc = value;
   findGame();
});

let status = 'online';
ipcMain.on('online', function() {
    status = 'online';
    findGame();
});
ipcMain.on('away', function() {
    status = 'away';
    findGame();
});

//RPC
function findGame() {
    let gotGame = name;
    let pic = 'switch';
    if (!name) return;
    data.gameLibrary.forEach(function(game) {
        game.aliases.forEach(function(alias) {
            if (alias === name.toLowerCase()) {
                gotGame = game.name;
                pic = game.pic;
            }
        });
    });

    setPresence(gotGame, desc, pic, status);
}

function setPresence(game, desc, pic, status) {
    if (desc.length < 2) {
        desc = 'Online';
    }

    let finalPic = 'switch'; 

    if (typeof data !== 'undefined' && data.gameData) {
        const foundGame = data.gameData.find(g => g.name.toLowerCase() === game.toLowerCase());
        if (foundGame && foundGame.pic) {
            finalPic = foundGame.pic;
        }
    }

    console.log(`DEBUG ΔΙΟΡΘΩΣΗΣ: Το Discord θα ζητήσει την εικόνα: ${finalPic}`);

    rpc.updatePresence({
        state: desc,
        details: game,
        largeImageKey: finalPic,
        largeImageText: game
    });
}

