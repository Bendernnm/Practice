function testObj(id, $value) {
    this.$value = $value;
    this.input = document.getElementById(id);
    this.input.onclick = this.click;
}

testObj.prototype = {
    click: function () {
        console.log("func start: " + this); //здесь this ето input, а мне нужно получить обєкт
        console.log(this.$value);
        console.log("func end");
    },
    write: function () {
        console.log("work");
    }
};

console.log("start");
var obj = new testObj("testBtn", "10");
obj.write();
console.log("end");