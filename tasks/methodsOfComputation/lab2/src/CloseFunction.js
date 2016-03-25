function getCloseFunction(arrayX, arrayY, averagePolynomial) {
    array$Y = [];

    for (var i = 0; i < arrayY.length; i++) {
        array$Y[i] = 0
    }

    for (var i = 0; i < arrayY.length; i++) {
        for (var j = 0; j < averagePolynomial.length; j++) {
            array$Y[i] += averagePolynomial[j] * Math.pow(arrayX[i], j);
        }
    }

    return array$Y;
}