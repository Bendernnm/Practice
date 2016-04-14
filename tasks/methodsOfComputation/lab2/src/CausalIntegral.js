function calculateIntegral(a, b, n, f) {
    var h = (b - a) / n;
    var integral = 0;
    for (var i = a; i < b; i += h) {
        integral += f((i + i + h) / 2);
    }
    integral *= h;
    return integral;
}