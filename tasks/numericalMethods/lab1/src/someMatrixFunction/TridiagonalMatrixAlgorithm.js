function calculateMatrixTMA(matrix) {
    var a = createA(matrix);
    var b = createB(matrix);
    var c = createC(matrix);
    var d = createD(matrix);

    var c$ = createC$(a, b, c);
    var d$ = createD$(a, b, d, c$);

    return createX(c$, d$);

    function createA(matrix) {
        var a = [];
        for (var i = 0; i < matrix.length; i++) {
            a[i] = getA(matrix, i);
        }
        return a;
    }

    function getA(matrix, indexRow) {
        return indexRow == 0 ? 0 : matrix[indexRow][indexRow - 1];
    }


    function createB(matrix) {
        var b = [];
        for (var i = 0; i < matrix.length; i++) {
            b[i] = getB(matrix, i);
        }
        return b;
    }

    function getB(matrix, indexRow) {
        return matrix[indexRow][indexRow];
    }


    function createC(matrix) {
        var c = [];
        for (var i = 0; i < matrix.length; i++) {
            c[i] = getC(matrix, i);
        }
        return c;
    }

    function getC(matrix, indexRow) {
        return indexRow == matrix.length - 1 ? 0 : matrix[indexRow][indexRow + 1];
    }


    function createD(matrix) {
        var d = [];
        for (var i = 0; i < matrix.length; i++) {
            d[i] = getD(matrix, i);
        }
        return d;
    }

    function getD(matrix, indexRow) {
        return matrix[indexRow][matrix[indexRow].length - 1];
    }


    function createC$(a, b, c) {
        var c$ = [];
        var length = a.length;

        c$[0] = c[0] / b[0];
        for (var i = 1; i < length; i++) {
            c$[i] = c[i] / (b[i] - c$[i - 1] * a[i]);
        }

        return c$;
    }

    function createD$(a, b, d, c$) {
        var d$ = [];
        var length = a.length;

        d$[0] = d[0] / b[0];
        for (var i = 1; i < length; i++) {
            d$[i] = (d[i] - d$[i - 1] * a[i]) / (b[i] - c$[i - 1] * a[i]);
        }

        return d$;
    }

    function createX(c$, d$) {
        var x = [];
        var lastIndex = c$.length - 1;
        x[lastIndex] = d$[lastIndex];
        for (var i = lastIndex - 1; i >= 0; i--) {
            x[i] = d$[i] - c$[i] * x[i + 1];
        }
        return x;
    }

}