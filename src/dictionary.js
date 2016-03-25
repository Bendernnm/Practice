function Dictionary() {
    var keys = [];
    var values = [];

    Dictionary.prototype.containsKey = function (key) {
        for (item in keys) {
            if (keys[item] == key) {
                return true;
            }
        }
        return false;
    }

    Dictionary.prototype.getValue = function (key) {
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == key) {
                return value[i];
            }
        }
    }

    Dictionary.prototype.getIndex = function (key) {
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == key) {
                return i;
            }
        }
    }

    Dictionary.prototype.getValueToIndex = function (index) {
        return values[index];
    }

    Dictionary.prototype.getLength = function () {
        return keys.length == values.length ? keys.length : undefined;
    }

    Dictionary.prototype.getKeys = function () {
        return keys;
    }

    Dictionary.prototype.getValues = function () {
        return values;
    }

    Dictionary.prototype.addElement = function (key, value) {
        keys.push(key);
        values.push(value);
        return (keys.length == values.length);
    }

    Dictionary.prototype.removeElement = function (key) {
        var index = Dictionary.getIndex(key);
        keys.splice(index, 1);
        values.splice(index, 1);
        return (keys.length == values.length);
    }

    Dictionary.prototype.getPairToString = function (index) {
        return "[" + keys[index] + "] : " + values[index];
    }

    Dictionary.prototype.toString = function () {
        var str = "keys: " + arrayToStyring(keys) + "\nvalues: " + arrayToStyring(values);
        return (keys.length == values.length) ? str : "false";

        function arrayToStyring(array) {
            var str = "";
            for (item in array) {
                str += array[item] + "\t";
            }
            return str;
        }
    }
}