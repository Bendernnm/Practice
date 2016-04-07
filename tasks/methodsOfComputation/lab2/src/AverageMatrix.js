function AverageMatrix(arrayX, arrayY, count) {
    this.matrix = [];
    this.countColumn = count + 1;
    this.countRow = count;

    for (var i = 0; i < this.countRow; i++) {
        this.matrix[i] = [];
        for (var j = 0; j < this.countColumn; j++) {
            if (j == this.countColumn - 1) {
                var power = i;
                this.matrix[i][j] = getProduct(arrayX, arrayY, power);
            }
            else {
                var power = i + j;
                this.matrix[i][j] = getSumm(arrayX, power);
            }
        }
    }

    function getSumm(arrayX, power) {
        var summ = 0;
        for (var i = 0; i < arrayX.length; i++) {
            summ += Math.pow(arrayX[i], power);
        }
        return summ;
    }

    function getProduct(arrayX, arrayY, power) {
        var summ = 0;
        for (var i = 0; i < arrayX.length; i++) {
            summ += Math.pow(arrayX[i], power) * arrayY[i];
        }
        return summ;
    }
}