function psi(x1, x2) {
    return Math.sin(2 + x1 * x2);
}
var PI = Math.PI;


function U(x1, x2) {
    let argumentSin = (PI * x1) / 2;
    let sin = Math.sin(argumentSin);

    let cosArgument = (2 * PI * x2) / (2);
    let cos = Math.cos(cosArgument);

    let argument = 1 - cos;

    return sin * argument * psi(x1, x2);
}

function U_x1(x1, x2) {
    let argument1 = x2 * x2;
    let argument2 = Math.sin((PI * x1) / 2);
    let argument3 = -(1 - Math.cos(PI * x2));
    let argument4 = Math.sin(x1 * x2 + 2);

    let ex1 = argument1 * argument2 * argument3 * argument4;

    argument1 = PI * x2;
    argument2 = Math.cos((PI * x1) / 2);
    argument3 = (1 - Math.cos(PI * x2));
    argument4 = Math.cos(x1 * x2 + 2);

    let ex2 = argument1 * argument2 * argument3 * argument4;

    argument1 = -(PI * PI) / 4;
    argument2 = Math.sin((PI * x1) / 2);
    argument3 = (1 - Math.cos(PI * x2));
    argument4 = Math.sin(x1 * x2 + 2);

    let ex3 = argument1 * argument2 * argument3 * argument4;

    return ex1 + ex2 - ex3;
}
function U_x2(x1, x2) {
    let argument1 = x1 * x1;
    let argument2 = Math.sin((PI * x1) / 2);
    let argument3 = -(1 - Math.cos(PI * x2));
    let argument4 = Math.sin(x1 * x2 + 2);

    let ex1 = argument1 * argument2 * argument3 * argument4;

    argument1 = 2 * PI * x1;
    argument2 = Math.sin((PI * x1) / 2);
    argument3 = Math.sin(PI * x2);
    argument4 = Math.cos(x1 * x2 + 2);

    let ex2 = argument1 * argument2 * argument3 * argument4;

    argument1 = (PI * PI);
    argument2 = Math.sin((PI * x1) / 2);
    argument3 = Math.cos(PI * x2);

    let ex3 = argument1 * argument2 * argument3;

    return ex1 + ex2 - ex3;
}

function F(x1, x2) {
    return -(U_x1(x1, x2) + U_x2(x1, x2));
}

//d^2/dy^2 ( sin((pi*x)/2)*(1-cos((2*pi*y)/2))*sin(2+x*y))