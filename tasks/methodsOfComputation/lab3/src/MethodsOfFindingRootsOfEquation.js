function methodOfDividingTheSegmentInHalf(a, b, h, eps, f) {
    while (Math.abs(b - a) < eps) {
        var c = (b - a) / 2;
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
    return (b - a) / 2;
}