function DoubleMatrix(divId) {
    this.form = document.getElementById(divId);

    this.numericRow = createAndSettingNumeric(this);
    this.numericColumn = createAndSettingNumeric(this);
    setNumericOnchange(this, this.numericRow, this.numericColumn);

    this.matrixForm = document.createElement("div");
    this.matrix = [];

    this.regExp = /^[+-]?\d+[.]?\d+$/;
    this.label = "0.0";
    this.value = "0.0";
}

DoubleMatrix.prototype = ObjectMatrix.prototype;