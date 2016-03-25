var Task5 = {};

function getValue() {
    Task5.firstLength = prompt("Введіть довжину сторони a: ", "0");
    Task5.secondLength = prompt("Введіть довжину сторони b: ", "0");
    Task5.thirdLength = prompt("Введіть довжину сторони c: ", "0");
}

function check(firstLength, secondLength, activeLength) {
    return activeLength < parseFloat(firstLength) + parseFloat(secondLength);
}

function checkAll() {
    return check(Task5.firstLength, Task5.secondLength, Task5.thirdLength) &&
        check(Task5.thirdLength, Task5.secondLength, Task5.firstLength) &&
        check(Task5.thirdLength, Task5.firstLength, Task5.secondLength);
}

function main() {
    getValue();
    Task5.result = checkAll();
    alert(Task5.result ? "Можливо побудувати даникй триутник." : "Неможливо побудувати даникй триутник.");
}

document.getElementById("btnCheck").onclick = function () {
    main();
};




