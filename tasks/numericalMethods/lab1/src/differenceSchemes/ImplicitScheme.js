function ImplicitScheme(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.N = parseInt(1 / this.step);
    this.K = parseInt(1 / tay);
}

ImplicitScheme.prototype = new ClearScheme();
ImplicitScheme.prototype.calculateMatrix = function () {
    console.log("qwwe");
}
