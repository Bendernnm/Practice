function formulaRightRectangles(pointA, pointB, integralFunction) {
    return (pointB - pointA) * integralFunction.calculateFunction(pointB);

}

function formulaLeftRectangles(pointA, pointB, integralFunction) {
    return (pointB - pointA) * integralFunction.calculateFunction(pointA);
}

function formulaCentralRectangles(pointA, pointB, integralFunction) {
    return (pointB - pointA) * integralFunction.calculateFunction((pointA + pointB) / 2);
}

function trapezoidalRule(pointA, pointB, integralFunction) {
    return ((integralFunction.calculateFunction(pointA) + (integralFunction.calculateFunction(pointB))) / 2) * (pointB - pointA);
}

function simpsonMethod(pointA, pointB, integralFunction) {
    return ((pointB - pointA) / 6) *
        (integralFunction.calculateFunction(pointA) + integralFunction.calculateFunction(pointB) + 4 * integralFunction.calculateFunction((pointA + pointB) / 2));
}