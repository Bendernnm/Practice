var Task6 = {};

Task6.array = [];

document.getElementById("btnAddElements").onclick = function () {
    addElement();
};

document.getElementById("btnCalculate").onclick = function () {
    calculate();
};

document.getElementById("btnChange").onclick = function () {
    change();
};

function addElement() {
    while ((item = prompt("Введіть число: ", "0")) != null) {
        Task6.array.unshift(item);
    }
    console.log(arrayToString());
}

function calculate() {
    alert(getCalculateResult());

    function getCalculateResult() {
        if (Task6.array > 0) {
            return "NaN";
        }
        var str;
        str = arrayToString() + "\n";
        str += "Length: " + Task6.array.length + ".\n";
        str += "\n________________________________________\n";
        str += "Кількість парних: " + getCountPairElement(Task6.array) + ".\n";
        str += "Добуток непарних: " + getOddProduct(Task6.array) + ".\n";
        str += "Сума двоцифрових: " + getSumTwoDigit(Task6.array) + ".\n";
        str += "Середнє арифметичне додатних: " + getAVGPositive(Task6.array) + ".\n";
        str += "Найбільше від’ємне: " + getMaxNegative(Task6.array) + ".\n";
        str += "Кількість більших за перше число: " + getCountElementsMoreThanTheFirst(Task6.array) + ".\n";
        str += "Середнє геометричне додатних: " + getGVGPositive(Task6.array) + ".\n";
        str += "Мінімальне число: " + getMin(Task6.array) + ".\n";
        return str;
    }
}

function change() {
    changeFunction(Task6.array);
    alert("Change: " + arrayToString() + ".");
}

function arrayToString() {
    var str = Task6.array[0] + "\t";
    for (var i = 1; i < Task6.array.length; i++) {
        str += Task6.array[i] + "\t";
    }
    return str;
}