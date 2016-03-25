function SomeObj(inputId) {
    this.value = 0;
    this.input = document.getElementById(inputId);
    init();

    function init(obj) {
        obj.value = 1;
        obj.input.onclick = obj.add;
    }
}
SomeObj.prototype = {
    add: function () {
        this.value++;   //проблема в том что здесь this, будет input,
                        //вопрос как повесить даний метод на input.click,
                        //но чтоб this ссилалс€ на обЇкт, с условием что
                        //сам input Їсть полем обЇкта
    }
}

//дано input. создать обЇкт с полем input и value (числовое значение = 0),
// input передавать через id, при нажатие на input value = value + 1;