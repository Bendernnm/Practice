function changeImage(obj1, obj2) {
    obj1.randomImage();
    obj2.randomImage();
}
function check(obj1, obj2) {
    return ((obj1.rnd == obj2.rnd) && (obj1.rnd != -1) && (obj2.rnd != -1));
}