function getCountPairElement(array) {
    var countPair = 0;
    for (item in array) {
        if (array[item] % 2 == 0) {
            countPair++;
        }
    }
    return countPair;
}

function getOddProduct(array) {
    var oddProduct = 1;
    var exist = false;
    for (item in array) {
        if (array[item] % 2 != 0) {
            oddProduct *= array[item];
            exist = true;
        }
    }
    return exist ? oddProduct : "нема непарних елементів";
}

function getSumTwoDigit(array) {
    var summTwoDigit = 0;
    for (item in array) {
        if (numberIsTwoDigit(array[item])) {
            summTwoDigit += parseInt(array[item]);
        }
    }

    return summTwoDigit;

    function numberIsTwoDigit(number) {
        if ((number = Math.floor(parseInt(number) / 10)) != 0) {
            if (Math.floor(number / 10) == 0) {
                return true;
            }
        }
        return false;
    }
}

function getAVGPositive(array) {
    var sumPositive = 0;
    var countPotive = 0;
    for (item in array) {
        if (array[item] > 0) {
            sumPositive += parseInt(array[item]);
            countPotive++;
        }
    }
    return sumPositive / countPotive;
}

function getMaxNegative(array) {
    var maxNegative = 0;
    var isZero = true;
    for (item in array) {
        if ((isZero) && (array[item] < 0)) {
            isZero = false;
            maxNegative = array[item];
        }
        else {
            if ((array[item] < 0) && (parseFloat(array[item]) > parseFloat(maxNegative))) {
                console.log(array[item] < 0);
                maxNegative = array[item];
            }
        }
    }
    return isZero ? "нема відємних елементів в масиві" : maxNegative;
}

function getCountElementsMoreThanTheFirst(array) {
    var firstElement = array[0];
    var count = 0;
    for (item in array) {
        if (parseFloat(array[item]) > parseFloat(firstElement)) {
            count++;
        }
    }
    return count;
}

function getGVGPositive(array) {
    var sumPositive = 0;
    var countPotive = 0;
    for (item in array) {
        if (parseFloat(array[item]) > 0) {
            sumPositive += parseFloat(array[item]);
            countPotive++;
        }
    }
    return Math.pow(sumPositive, 1 / countPotive);
}

function getMin(array) {
    var min = array[0];
    for (item in array) {
        if (parseFloat(min) > parseFloat(array[item])) {
            min = array[item];
        }
    }
    return min;
}