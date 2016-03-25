function getEpsArray(arrayY, array$Y) {
    arrayEps = [];
    for (var i = 0; i < arrayY.length; i++) {
        arrayEps[i] = Math.abs(arrayY[i] - array$Y[i]);
    }
    return arrayEps;
}