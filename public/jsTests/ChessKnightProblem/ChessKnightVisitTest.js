QUnit.test('should be able to visit the table', function(assert){
    var startPosition = new BoardPosition(0, 0);
    var positionDetector = new KnightPositionDetector();
    
    var visitor = new ChessKnightVisitor(positionDetector);
    visitor.visitChessBoard(startPosition);

    assert.equal(visitor.visitedPositions.length, 64);
})
