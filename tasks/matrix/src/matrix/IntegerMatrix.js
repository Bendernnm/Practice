function IntegerMatrix(divId) {
    this.form = document.getElementById(divId);

    this.numericRow = createAndSettingNumeric(this);
    this.numericColumn = createAndSettingNumeric(this);
    setNumericOnchange(this, this.numericRow, this.numericColumn);

    this.matrixForm = document.createElement("div");
    this.matrix = [];

    this.regExp = /^\d+$/i;
    this.label = "0";
    this.value = "0";
}

IntegerMatrix.prototype = ObjectMatrix.prototype;