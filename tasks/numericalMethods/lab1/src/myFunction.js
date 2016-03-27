var E = Math.E;

function uxt(x, t) {
    var numerator = Math.pow(E, (x - t));
    var denominator = Math.sqrt(1 + x * x + t * t);
    return numerator / denominator;
}

function ux0(x) {
    return uxt(x, 0);
}

function u0t(t) {
    return uxt(0, t);
}

function u1t(t) {
    return uxt(1, t);
}

function u$t(x, t) {
    var numerator = t * Math.pow(E, (x - t));
    var denominator = Math.pow((t * t + x * x + 1), 3 / 2);

    var first = -numerator / denominator;

    numerator = Math.pow(E, (x - t));
    denominator = Math.sqrt(1 + x * x + t * t);

    var second = -numerator / denominator;

    return first + second;
}

function u$xx(x, t) {
    var numerator = 2 * x * Math.pow(E, (x - t));
    var denominator = Math.pow((t * t + x * x + 1), 3 / 2);

    var first = -numerator / denominator;

    numerator = Math.pow(E, (x - t));
    denominator = Math.sqrt(1 + x * x + t * t);

    var second = numerator / denominator;

    var third = Math.pow(E, (x - t));

    numerator = 3 * x * x;
    denominator = Math.pow((t * t + x * x + 1), 5 / 2);

    var thirdFirst = numerator / denominator;

    numerator = 1;
    denominator = Math.pow((t * t + x * x + 1), 3 / 2);

    var thirdSecond = -numerator / denominator;

    return first + second + third * (thirdFirst + thirdSecond);
}

function f(x, t) {
    return u$t(x, t) - u$xx(x, t);
}