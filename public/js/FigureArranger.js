/**
 * Arranges the chess figures on a chess board.
 */
function FigureArranger() {
    this.chessBoard = new ChessBoardV3();

    /**
     * Arranges all the figures on the specified chess board.
     */
    this.arrangeFiguresOnChessBoard = function(chessBoardId) {
        this.arrangeNotPawns(chessBoardId, 'white');

        for (var i = 1; i <= 8; i++) {
            this.arrangeFigure(chessBoardId, 2, i, 'white', 'pawn');
        }

        this.arrangeNotPawns(chessBoardId, 'black');

        for (var i = 1; i <= 8; i++) {
            this.arrangeFigure(chessBoardId, 7, i, 'black', 'pawn');
        }
    }

    this.arrangeNotPawns = function(chessBoardId, color) {
        var line = 1;

        if (color === 'black') {
            line = 8;
        }

        this.arrangeFigure(chessBoardId, line, 1, color, 'tower');
        this.arrangeFigure(chessBoardId, line, 2, color, 'knight');
        this.arrangeFigure(chessBoardId, line, 3, color, 'bishop');
        this.arrangeFigure(chessBoardId, line, 4, color, 'king');
        this.arrangeFigure(chessBoardId, line, 5, color, 'queen');
        this.arrangeFigure(chessBoardId, line, 6, color, 'bishop');
        this.arrangeFigure(chessBoardId, line, 7, color, 'knight');
        this.arrangeFigure(chessBoardId, line, 8, color, 'tower');
    }

    this.arrangeFigure = function(chessBoardId, row, column, color, figure) {
        var cellId = this.chessBoard.getCellId(row,column);
        var cell = $('#' + chessBoardId + ' #' + cellId + '');
        cell.attr('style', this.chessBoard.getStyleFor(color, figure));
    }
}