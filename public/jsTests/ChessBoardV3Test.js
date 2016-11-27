var chessBoard = new ChessBoardV3();

QUnit.test('getCellId', function (assert) {
    var cellId = chessBoard.getCellId(3, 4);
    assert.equal(cellId, 'cell_3_4');
});

QUnit.test('getFigures', function (assert) {
    var figures = chessBoard.getFigures();
    assert.equal(figures.length, 6);
});

assertGetFigureXPositionInSpriteImageIsWorking('pawn', 0);
assertGetFigureXPositionInSpriteImageIsWorking('knight', -54);
assertGetFigureXPositionInSpriteImageIsWorking('bishop', -108);
assertGetFigureXPositionInSpriteImageIsWorking('tower', -162);
assertGetFigureXPositionInSpriteImageIsWorking('king', -216);
assertGetFigureXPositionInSpriteImageIsWorking('queen', -270);

assertGetFigureYPositionInSpriteImageIsWorking('white', 0);
assertGetFigureYPositionInSpriteImageIsWorking('black', -54);

QUnit.test('getStyleFor', function (assert) {
    var style = chessBoard.getStyleFor('white','queen');
    assert.ok(style.length > 0);
});

function assertGetFigureXPositionInSpriteImageIsWorking(figure, expectedPosition) {
    QUnit.test('getFigureXPositionInSpriteImage - ' + figure, function (assert) {
        var xPosition = chessBoard.getFigureXPositionInSpriteImage(figure);
        assert.equal(xPosition, expectedPosition);
    });
}

function assertGetFigureYPositionInSpriteImageIsWorking(color, expectedPosition) {
    QUnit.test('getFigureYPositionInSpriteImage - ' + color, function (assert) {
        var yPosition = chessBoard.getFigureYPositionInSpriteImage(color);
        assert.equal(yPosition, expectedPosition);
    });
}
