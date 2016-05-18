function calculateMatrix(useMatrix) {
    var matrix = [];
    for (var i = 0; i < useMatrix.length; i++) {
        matrix[i] = [];
        for (var j = 0; j < useMatrix[i].length; j++) {
            matrix[i][j] = useMatrix[i][j];
        }
    }

    var rowCount = matrix.length;
    var columnCount = matrix[0].length;

    var unknownVertex = [];
    for (var i = 0; i < rowCount; i++) {
        unknownVertex[i] = 0;
    }

    for (var i = 0; i < rowCount; i++) {
        if (matrix[i][i] == 0) {
            swapRow(i, i + 1);
        }

        var divider = matrix[i][i];
        divideRow(matrix, i, divider);

        for (var j = i + 1; j < rowCount; j++) {
            var multiplier = matrix[j][i];

            for (var k = 0; k < columnCount; k++) {
                matrix[j][k] -= (matrix[i][k] * multiplier);
            }
        }
    }

    for (var i = getLastRow(); i > -1; i--) {
        var summ = 0;

        for (var j = i + 1; j < columnCount - 1; j++) {
            summ += (matrix[i][j] * unknownVertex[j]);
        }

        unknownVertex[i] = matrix[i][getLastcolumn()] - summ;
    }

    return unknownVertex;

    function divideRow(matrix, index, divider) {
        for (var i = 0; i < matrix[index].length; i++) {
            matrix[index][i] /= divider;
        }
    }

    function getLastRow() {
        return rowCount - 1;
    }

    function getLastcolumn() {
        return columnCount - 1;
    }

    function swapRow(i, j) {
        for (var k = 0; k < matrix[0].length; k++) {
            var buff = matrix[i][k];
            matrix[i][k] = matrix[j][k];
            matrix[j][k] = buff;
        }
    }
}