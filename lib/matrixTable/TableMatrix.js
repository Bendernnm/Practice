var regExp = /^\d+$/;


function TableMatrix(rowCountInputId, columnCountInputId, showMatix) {
    rowCountElement = document.getElementById(rowCountInputId);
    columnCountElement = document.getElementById(columnCountInputId);

    this.rowCount = getLength(rowCountElement);
    this.columnCount = getLength(columnCountElement);

    this.showMatrix = document.getElementById(showMatix);
    this.matrix = initLength(this.rowCount, this.columnCount);

    function getLength(countElement) {
        return countElement.value.search(regExp) != -1 ? countElement.value : 1;
    }

    function initLength(rowCount, columnCount) {
        var matrix = new Array(rowCount);
        for (var i = 0; i < rowCount; i++) {
            matrix[i] = new Array(columnCount);
        }
        return matrix;
    }
}

TableMatrix.prototype = {
    getRowCount: function () {
        return this.rowCount;
    },
    getColumnCount: function () {
        return this.columnCount;
    },
    initTableMatrix: function () {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                this.matrix[i][j] = createInput();
            }
        }

        function createInput() {
            var buffInput = document.createElement("input");
            buffInput.type = "text";
            buffInput.value = "0";
            buffInput.className = "elementTableMatrix";
            buffInput.onchange = function () {
                buffInput.value = buffInput.value.search(regExp) != -1 ? buffInput.value : 0;
            };
            return buffInput;
        }
    },
    showTableMatrix: function () {
        clear(this.showMatrix);
        var lastElement = this.columnCount - 1;

        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                if (j == lastElement) {
                    this.showMatrix.appendChild(this.matrix[i][j]);
                    var buffBr = document.createElement("br");
                    this.showMatrix.appendChild(buffBr);
                }
                else {
                    this.showMatrix.appendChild(this.matrix[i][j]);
                }
            }
        }

        function clear(div) {
            div.innerHTML = "";
        }
    },
    getValue: function (i, j) {
        return this.matrix[i][j].value;
    },
    setValue: function (value, i, j) {
        this.matrix[i][j].value = value;
    },
    toMatrix: function () {
        var matrix = [];
        for (var i = 0; i < this.rowCount; i++) {
            matrix[i] = new Array(this.columnCount);
            for (var j = 0; j < this.columnCount; j++) {
                var element = this.getValue(i, j)+"";
                matrix[i][j] = element.substr(0,4);
            }
        }
        return matrix;
    },
    ofMatrix: function (matrix) {
        for (var i = 0; i < this.rowCount; i++) {
            for (var j = 0; j < this.columnCount; j++) {
                this.setValue(matrix.matrix[i][j], i, j);
            }
        }
    }
};