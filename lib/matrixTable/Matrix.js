function Matrix(rowCount, columnCount) {
    this.matrix = initLength(rowCount, columnCount);
    this.rowCount = rowCount;
    this.columnCount = columnCount;

    function initLength(rowCount, columnCount) {
        var matrix = new Array(rowCount);
        for (var i = 0; i < rowCount; i++) {
            matrix[i] = new Array(columnCount);
        }
        return matrix;
    }
}

Matrix.prototype = {
    getRowCount: function () {
        return this.rowCount;
    },
    getColumnCount: function () {
        return this.columnCount;
    },
    init: function (number) {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                this.matrix[i][j] = number;
            }
        }
    },
    toLog: function () {
        console.log(this.toString());
    },
    toString: function () {
        var str = "";
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                if (j == this.columnCount - 1) {
                    str += this.matrix[i][j] + "\n";
                } else {
                    str += this.matrix[i][j] + "\t";
                }
            }
        }
        return str;
    },
    ofTableMatrix: function (tableMatrix) {
        if ((this.rowCount != tableMatrix.rowCount) ||
            (this.columnCount != tableMatrix.columnCount)) {
            return false;
        }
        else {
            for (var i = 0; i < this.rowCount; i++) {
                for (var j = 0; j < this.columnCount; j++) {
                    this.matrix[i][j] = tableMatrix.getValue(i, j);
                }
            }
        }
        console.log(this.matrix);
    },
    toTableMatrix: function (tableMatrix, length) {
        if ((this.rowCount != tableMatrix.rowCount) ||
            (this.columnCount != tableMatrix.columnCount)) {
            return false;
        }
        else {
            for (var i = 0; i < this.rowCount; i++) {
                for (var j = 0; j < this.columnCount; j++) {
                    var element = this.matrix[i][j] + "";
                    tableMatrix.setValue(element.substr(0, length), i, j);
                }
            }
        }
    },

    generate: function () {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                var first = Math.log(i + 1);
                var second = ((j + 1) / this.rowCount);
                this.matrix[i][j] = first - second;
            }
        }
    },
    findRowWithMinElement: function () {
        var min = this.matrix[0][0];
        var index = 0;
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                if (this.matrix[i][j] < min) {
                    min = this.matrix[i][j];
                    index = i;
                }
            }
        }
        return [index, min];
    },
    multiplicationDiagonalElements: function () {
        var multiplication = 1;
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                if (i == j) {
                    multiplication *= this.matrix[i][j];
                }
            }
        }
        return multiplication;
    },
    multiplicationMatrix: function (number) {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                this.matrix[i][j] *= number;
            }
        }
    },
    addMatrix: function (matrix) {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                this.matrix[i][j] += matrix[i][j];
            }
        }
    }
};