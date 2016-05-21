const E = Math.E;

/**
 * @return {number}
 */
function U(x) {
    var first = x * (2 - x);
    var second = Math.exp(-x) / Math.sqrt(1 + x * x);
    return first * second;
}

/**
 * @return {number}
 */
function U__(x) {
    var EpownegativeX = Math.pow(E, -x);
    var XXplus1 = x * x + 1;
    var first = ((EpownegativeX * (2 - x) + 2 * EpownegativeX) * x) / (Math.sqrt(x * x + 1));
    var second = (2 * (-EpownegativeX * (2 - x) - EpownegativeX)) * ((1 / (Math.sqrt(XXplus1))) - ((x * x) / (Math.pow(XXplus1, 3 / 2))));
    var third1 = EpownegativeX * (2 - x);
    var third2 = x * (((3 * x * x)) / (Math.pow(XXplus1, 5 / 2))) - ((2 * x) / (Math.pow(XXplus1, 3 / 2)));
    var third = third1 * third2;
    var result = first + second + third;
    return result;
}

/**
 * @return {number}
 */
function getXi(i, h) {
    return i * h;
}

function F(x) {
    return -U__(x);
}