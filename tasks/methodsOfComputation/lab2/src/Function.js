function Function(f) {
    this.f = f;
}

Function.prototype = {
    calculatePoint: function (value) {
        return this.f(value);
    },
    calculateArrayValue: function (arrayValue) {
        arrayResult = [];
        for (var i = 0; i < arrayValue.length; i++) {
            arrayResult[i] = this.calculatePoint(arrayValue[i]);
        }

        return arrayResult;
    }
};

function testFun(value) {
    return value * value;
}