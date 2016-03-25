function Integral(integralFunction, integralMethod, countStep, eps, pointA, pointB) {
    this.integralFunction = integralFunction;
    this.integralMethod = integralMethod;
    this.countStep = countStep;
    this.eps = eps;
    this.pointA = pointA;
    this.pointB = pointB;
}

Integral.prototype = {
    setA: function (pointA) {
        this.pointA = pointA;
    },
    setB: function (pointB) {
        this.pointB = pointB;
    },
    setEps: function (eps) {
        this.eps = eps;
    },
    setCountStep: function (countStep) {
        this.countStep = countStep;
    },
    setIntegralMethod: function (integralMethod) {
        this.integralMethod = integralMethod;
    },
    setIntegralFunction: function (integralFunction) {
        this.integralFunction = integralFunction;
    },
    getStep: function () {
        var step = (this.pointB - this.pointA) / this.countStep;
        return step;
    },
    checkEps: function (previewEps, currentEps) {
        console.log("->start");
        if ((Math.abs(previewEps - currentEps)) > this.eps) {
            console.log("->if");
            this.countStep *= 2;
            return true;
        }
        else {
            console.log("->else");
            return false;
        }
    },
    calculateToOneStep: function (pointA, pointB, eps) {
        var countStep = 2;
        var previewEps = 0;
        var currentEps = 0;
        do {
            var result = 0;
            previewEps = currentEps;
            countStep = previewEps == 0 ? countStep : 2 * countStep;
            step = (pointB - pointA) / countStep;

            console.log("*step(" + countStep + ") = " + step);

            for (var buffPoint = pointA; buffPoint < pointB; buffPoint += step) {
                result += this.integralMethod(buffPoint, buffPoint + step, this.integralFunction);
            }

            currentEps = result;

            console.log("*previewEps = " + previewEps + "; currentEps = " + currentEps);

        } while (Math.abs(previewEps - currentEps) > eps);

        return result;
    },
    calculateAToB: function () {
        var previewEps = 0;
        var currentEps = 0;

        do {
            previewEps = currentEps;
            //
            var step = this.getStep();
            console.log("-> step(" + this.countStep + ") = " + step);
            var resultIntegral = 0;

            for (var pointA = this.pointA; pointA < this.pointB; pointA += step) {
                console.log("-> Calculate[" + pointA + ", " + (pointA + step) + "]");
                resultIntegral += this.calculateToOneStep(pointA, pointA + step, this.eps);
            }

            currentEps = resultIntegral;
//
        } while (this.checkEps(previewEps, currentEps));

        console.log("-> end");
        return resultIntegral;
    }
};