var Task5_validate = {};
Task5_validate.reqExp = /^\d+$/;

Task5_validate.validate = function (elementValue, regExp) {
    return elementValue.search(regExp) != -1;
};

Task5_validate.initElement = function (id) {
    document.getElementById(id).onchange = function () {
        var resultValidate = Task5_validate.validate(this.value, Task5_validate.reqExp);
        Task5_validate.setCssClass(this, resultValidate);
    }
};

Task5_validate.initElements = function () {
    for (item in arguments) {
        Task5_validate.initElement(arguments[item]);
    }
    document.getElementById("click").onclick = function () {
        if (Task5_validate.validate("firstLength", "secondLength", "thirdLength")) {
            console.log("false");
            return false;
        }
        console.log("true");
    }
};

Task5_validate.setCssClass = function (element, resultValidate) {
    element.className = resultValidate ? "valid" : "notValid";
};

Task5_validate.checkValidate = function () {
    for (item in arguments) {
        if (arguments[item].className != "valid") {
            return false;
        }
    }
    return true;
}

Task5_validate.initElements("firstLength", "secondLength", "thirdLength");