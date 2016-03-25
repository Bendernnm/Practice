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
    while ((item = prompt("������ �����: ", "0")) != null) {
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
        str += "ʳ������ ������: " + getCountPairElement(Task6.array) + ".\n";
        str += "������� ��������: " + getOddProduct(Task6.array) + ".\n";
        str += "���� �����������: " + getSumTwoDigit(Task6.array) + ".\n";
        str += "������ ����������� ��������: " + getAVGPositive(Task6.array) + ".\n";
        str += "�������� �䒺���: " + getMaxNegative(Task6.array) + ".\n";
        str += "ʳ������ ������ �� ����� �����: " + getCountElementsMoreThanTheFirst(Task6.array) + ".\n";
        str += "������ ����������� ��������: " + getGVGPositive(Task6.array) + ".\n";
        str += "̳������� �����: " + getMin(Task6.array) + ".\n";
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