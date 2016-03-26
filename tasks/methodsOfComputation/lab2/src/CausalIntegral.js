function calculateIntegral(a, b, n, f) {
    var h = (b - a) / n;
    var integral = 0;
    for (var i = a + h; i <= b; i += h) {
        integral += f(i);
    }
    integral *= h;
    return integral;
}