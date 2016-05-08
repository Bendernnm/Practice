//var obj1 = new WordMatrix("test1");
//obj1.init();

//var obj2 = new IntegerMatrix("test2");
//obj2.init();

var str = "-22.3.12";
var regExp =  /^[+-]?\d+[.]?\d+$/;
var check_result = check(str, regExp);
alert(check_result);