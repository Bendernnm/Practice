function calculateGrafic() {
    var $a = parseFloat(document.getElementById("ga").value);
    var $b = parseFloat(document.getElementById("gb").value);
    var $h = parseFloat(document.getElementById("h").value);
    var $eps = parseFloat(document.getElementById("eps").value);

    var numberFunction = getRadioValue("chooseFunction");
    var numberMethod = parseFloat(getRadioValue("chooseMethod"));

    var f = numberFunction == 1 ? function_ex_1 : function_ex_2;

    var method;
    switch (numberMethod) {
        case 1:
            method = methodOfDividingTheSegmentInHalf;
            break;
        case 2:
            method = method1;
            break;
        case 3:
            method = method2;
            break;
        case 4:
            method = method3;
            break;
    }

    var result = method($a, $b, $h, $eps, f);
    alert(result);
}