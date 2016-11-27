var express = require('express');
var app = express();
var pug = require('pug');
var chessBoardFactory = require('./public/js/ChessBoardV3');
var chessBoard = new chessBoardFactory.ChessBoard();

initApp(app, pug);

function initApp(app, pug) {
    console.log('app: begin initialisation');

    app.use(express.static(__dirname + '/public'));

    var pageTitle = 'Stefan Prodana: Demo mit node.js, express, pug, jQuery gehostet im AWS';

    getPage(app, pug, '/', '/public/templates/ChessBoardDemo.pug', pageTitle, 'Schachbrett');
    getPage(app, pug, '/ChessBoard.html', '/public/templates/ChessBoardDemo.pug', pageTitle, 'Schachbrett');
    getPage(app, pug, '/Chessgame.html', '/public/templates/Chessgame.pug', pageTitle, 'Schachspiel');
    getPage(app, pug, '/KnightProblem.html', '/public/templates/KnightProblem.pug', pageTitle, 'Schach Springer Problem');
    getPage(app, pug, '/Description.html', '/public/templates/Description.pug', pageTitle, 'Kurze Beschreibung');
    getPage(app, pug, '/JsTests.html', '/public/templates/jsTests.pug', pageTitle, 'JavaScript Teste');

    app.listen(3001, function () {
        console.log('started to listen to serve client requests');
    });

    console.log('app: end initialisation');
}

/**
 * Gets the page with the specified relative url. 
 * @param {string} app: the express app instance.
 * @param {string} relativePageUrl: the relative url to the page. 
 */
function getPage(app, pug, relativePageUrl, pathToThePage, thePageTitle, thePageName) {
    app.get(relativePageUrl, function (req, res) {

        var templateFilePath = __dirname + pathToThePage;
        var compiledFunction = pug.compileFile(templateFilePath);
        var html = compiledFunction({
            pageTitle: thePageTitle,
            pageName: thePageName,
            chessBoard : chessBoard,
        });

        console.log('served the page ' + relativePageUrl);
        res.send(html);
    });
}