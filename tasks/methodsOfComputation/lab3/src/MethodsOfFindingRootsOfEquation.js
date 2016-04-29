function methodOfDividingTheSegmentInHalf(a, b, h, eps, f) {
    while (Math.abs(b - a) > eps) {
        var c = (a + b) / 2;
        if (f(c) == 0) {
            return c;
        }

        var criterion = (f(c) * f(a)) > 0;
        if (criterion) {
            a = c;
        }
        else {
            b = c;
        }
    }
    return (a + b) / 2;
}

function method1() {
    alert(1);
}
function method2() {
    alert(2);
}
function method3() {
    alert(3);
}