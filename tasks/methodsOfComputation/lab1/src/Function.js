function Function(needFunction) {
    this.needFunction = needFunction;
}
Function.prototype.calculateFunction = function (value) {
    return this.needFunction(value);
}