function createAndSettingNumeric() {
    var numeric = document.createElement("input");
    numeric.type = "number";
    numeric.value = "1";
    numeric.min = "1";
    numeric.max = +MAX_ROW_COLUMN;
    numeric.defaultValue = 1;
    return numeric;
}

function setNumericOnchange(self, numericRow, numericColumn) {
    numericRow.onchange = function () {
        if (numericRow.value > numericRow.defaultValue) {
            this.addRowToMatrix();
        }
        else {
            if (numericRow.value < numericRow.defaultValue) {
                this.deleteRowFromMatrix();
            }
        }
        numericRow.defaultValue = numericRow.value;

    }.bind(self);

    numericColumn.onchange = function () {
        if (numericColumn.value > numericColumn.defaultValue) {
            this.addColumnToMatrix();
        }
        else {
            if (numericColumn.value < numericColumn.defaultValue) {
                this.deleteColumnFromMatrix();
            }
        }
        numericColumn.defaultValue = numericColumn.value;

    }.bind(self);
}


function createObjectMatrixElement(regExp, label, value) {
    var element = document.createElement("input");
    element.type = "text";
    element.value = value;
    element.onchange = function () {
        var str = element.value;
        if (!check(str, regExp)) {
            element.value = label;
        }
    }
    return element;
}