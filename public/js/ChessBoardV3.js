/**
 * Describes a chess board.
 */
function ChessBoardV3() {
    /**
     * Gets the id of the specified cell.
     * @param {number} row: the row of the cell.
     * @param {number} column: the column of the cell.
     */
    this.getCellId = function (row, column) {
        return 'cell_' + row + '_' + column;
    }

    /**
     * Gets the id of the specified figure.
     */
    this.getFigureId = function (color, figure) {
        return 'figure_' + color + '_' + figure;
    }

    /**
     * Gets all the figures. 
     */
    this.getFigures = function () {
        return ['pawn', 'knight', 'bishop', 'tower', 'king', 'queen'];
    }

    /**
     * Gets the x position inside the sprite image for the specified figure.
     */
    this.getFigureXPositionInSpriteImage = function (figure) {
        var figures = this.getFigures();
        var figureIndex = figures.indexOf(figure);
        var figureOffset = 54;
        return figureIndex * figureOffset * -1
    }

    /**
     * Gets the Y position inside the sprite image for the specified figure's color.
     */
    this.getFigureYPositionInSpriteImage = function (color) {
        var colors = ['white', 'black'];
        var colorIndex = colors.indexOf(color);
        var figurOffset = 54;
        return colorIndex * figurOffset * -1;
    }

    /**
     * Gets the style for the specified color and figure.
     */
    this.getStyleFor = function (color, figure) {
        var style = "background-image: url('/img/ChessFigures.png');"
        style += "background-position-x: " + this.getFigureXPositionInSpriteImage(figure) + "px;"
        style += "background-position-y: " + this.getFigureYPositionInSpriteImage(color) + "px;";
        style += 'height: 54px;';
        return style;
    }
}