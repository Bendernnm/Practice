var obj1 = new Voting("img_left", "left_plus", "left_minus", "left_result");
var obj2 = new Voting("img_right", "right_plus", "right_minus", "right_result");

do {
    changeImage(obj1, obj2);
} while (check(obj1, obj2));