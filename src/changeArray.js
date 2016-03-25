function changeFunction(array) {
    for (item in array) {
        if (isTwoDigitN(array[item])) {
            array[item] *= 5;
        }
    }

    function isTwoDigitN(number) {
        return numberIsN(number) && numberIsTwoDigit(number);

        function numberIsN(number) {
            if (number > 0) {
                if (number % Math.floor(number) == 0) {
                    return true;
                }
            }
            return false;
        }

        function numberIsTwoDigit(number) {
            if ((number = Math.floor(parseInt(number) / 10)) != 0) {
                if (Math.floor(number / 10) == 0) {
                    return true;
                }
            }
            return false;
        }
    }
}