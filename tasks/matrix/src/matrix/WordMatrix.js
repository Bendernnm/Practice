function WordMatrix(divId) {
    this.form = document.getElementById(divId);

    this.numericRow = createAndSettingNumeric(this);
    this.numericColumn = createAndSettingNumeric(this);
    setNumericOnchange(this, this.numericRow, this.numericColumn);

    this.matrixForm = document.createElement("div");
    this.matrix = [];

    this.regExp = /^([a-zà-ÿ¸]+)$/i;
    this.label = "www";
    this.value = "word";
}

WordMatrix.prototype = ObjectMatrix.prototype;