function SixPointScheme(step, tay) {
    this.matrix = [];
    this.step = step;
    this.tay = tay;
    this.$y = this.tay / 2 * this.step * this.step;
    this.N = parseInt(1 / this.step) + 1;
    this.K = parseInt(1 / tay) + 1;
}

SixPointScheme.prototype = new ClearScheme();
SixPointScheme.prototype.calculateMatrix = function () {
    var clearScheme = new ClearScheme(this.step, this.tay);
    clearScheme.createBucket();
    clearScheme.calculateMatrix();
    console.log(clearScheme.matrix);

    var implicitScheme = new ImplicitScheme(this.step, this.tay);
    implicitScheme.createBucket();
    implicitScheme.calculateMatrix();
    console.log(implicitScheme.matrix);

    for (var n = 1; n < this.K; n++) {
        for (var i = 1; i < this.N - 1; i++) {
            this.matrix[n][i] = (clearScheme.matrix[n][i] + implicitScheme.matrix[n][i]) / 2;
        }
    }
};