function U(x1, x2) {
    return Math.sin(2 + x1 * x2);
}

function U_x1(x1, x2) {
    return -(x2 * x2) * Math.sin(2 + x1 * x2);
}

function U_x2(x1, x2) {
    return -(x1 * x1) * Math.sin(2 + x1 * x2);
}

function F(x1, x2) {
    return -(U_x1(x1, x2) + U_x2(x1, x2));
}