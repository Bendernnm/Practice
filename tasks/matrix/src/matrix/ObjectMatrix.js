function ObjectMatrix(divId) {
    this.form = document.getElementById(divId);

    this.numericRow = createAndSettingNumeric(this);
    this.numericColumn = createAndSettingNumeric(this);
    setNumericOnchange(this, this.numericRow, this.numericColumn);

    this.matrixForm = document.createElement("div");
    this.matrix = [];

    this.regExp = /^\w+$/i;
    this.label = "Object";
    this.value = "Object_";
}


ObjectMatrix.prototype = {
    getRowCount: function () {
        return this.matrix.length;
    },
    getColumnCount: function () {
        return this.matrix[0].length;
    },
    getValue: function (i, j) {
        return this.matrix[i, j].value;
    },


    setMatrix: function (matrix) {
        var n = matrix.length;
        var m = matrix[0].length;

        this.numericRow.value = n;
        this.numericColumn.value = m;

        this.matrix = [];
        for (var i = 0; i < n; i++) {
            this.matrix[i] = [];
            for (j = 0; j < m; j++) {
                var str = "Object_" + i + "_" + j + "_";
                this.matrix[i][j] = createObjectMatrixElement(this.regExp, this.label, str);
                this.matrix[i][j].value = matrix[i][j];
            }
        }

        this.matrixForm.innerHTML = "";
        this.writeMatrixToMatrixForm();
    },

    createMatrix: function () {
        var n = this.numericRow.value;
        var m = this.numericColumn.value;

        for (var i = 0; i < n; i++) {
            this.matrix[i] = [];
            for (j = 0; j < m; j++) {
                this.matrix[i][j] = createObjectMatrixElement(this.regExp, this.label, this.value);
            }
        }
    },
    writeMatrixToMatrixForm: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        for (var i = 0; i < n; i++) {
            var buffElement = document.createElement("p");
            for (j = 0; j < m; j++) {
                addToForm(this.matrix[i][j], buffElement);
            }
            addToForm(buffElement, this.matrixForm);
        }
    },
    addMatrixToForm: function () {
        addToForm(this.matrixForm, this.form);
    },
    addNumericToForm: function () {
        addToForm(this.numericRow, this.form);
        addToForm(this.numericColumn, this.form);
    },
    init: function () {
        this.addNumericToForm();
        this.createMatrix();
        this.writeMatrixToMatrixForm();
        this.addMatrixToForm();
    },

    addRowToMatrix: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        this.matrix[n] = [];
        var buffElement = document.createElement("p");
        for (i = 0; i < m; i++) {
            this.matrix[n][i] = createObjectMatrixElement(this.regExp, this.label, this.value);
            buffElement.appendChild(this.matrix[n][i]);
        }
        this.matrixForm.appendChild(buffElement);
    },
    deleteRowFromMatrix: function () {
        var numberDeleteRow = this.getRowCount() - 1;
        var matrixParagraphs = this.matrixForm.getElementsByTagName("p");

        this.matrixForm.removeChild(matrixParagraphs[numberDeleteRow]);
        this.matrix.pop();
    },
    addColumnToMatrix: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        var matrixParagraphs = this.matrixForm.getElementsByTagName("p");

        for (var i = 0; i < n; i++) {
            this.matrix[i][m] = createObjectMatrixElement(this.regExp, this.label, this.value);
            matrixParagraphs[i].appendChild(this.matrix[i][m]);
        }
    },
    deleteColumnFromMatrix: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        var numberDeleteColumn = m - 1;

        var matrixParagraphs = this.matrixForm.getElementsByTagName("p");

        for (var i = 0; i < n; i++) {
            var activeParagraph = matrixParagraphs[i];

            var arrayInput = activeParagraph.getElementsByTagName("input");
            var deleteInput = arrayInput[numberDeleteColumn];

            activeParagraph.removeChild(deleteInput);
        }

        for (var i = 0; i < n; i++) {
            this.matrix[i].pop();
        }
    },

    toStringMatrix: function () {
        var n = this.numericRow.value;
        var m = this.numericColumn.value;

        var stringMatrix = [];

        for (var i = 0; i < n; i++) {
            stringMatrix[i] = [];
            for (j = 0; j < m; j++) {
                stringMatrix[i][j] = this.matrix[i][j].value;
            }
        }

        return stringMatrix;
    },
    toTable: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        var table = document.createElement("table");

        for (var i = 0; i < n; i++) {
            var tr = document.createElement("tr");
            for (j = 0; j < m; j++) {
                var td = document.createElement("td");
                td.innerHTML = this.matrix[i][j].value;
                td.style.border = "1px black solid";
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        return table;
    },

    add: function (objectMatrix) {
        var matrix1 = this.toStringMatrix();
        var matrix2 = objectMatrix.toStringMatrix();

        var n = this.getRowCount();
        var m = this.getColumnCount();

        var matrix = [];

        for (var i = 0; i < n; i++) {
            matrix[i] = [];
            for (j = 0; j < m; j++) {
                matrix[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }

        return matrix;
    },

    debugWriteMatrix: function () {
        var n = this.getRowCount();
        var m = this.getColumnCount();

        for (var i = 0; i < n; i++) {
            var str = "";
            for (j = 0; j < m; j++) {
                str += this.matrix[i][j].value + "\t";
            }
        }
    }
};