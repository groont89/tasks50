// Напишите функцию capitalizeFirstLetter(str), 
// которая преобразовывает первый символ строки в верхний регистр.
// Например:
// let str="пример строки";
// function capitalizeFirstLetter(str) {};

function capitalizerFirstLetter(str) {
    let arr = str.split("");
    return arr[0].toUpperCase() + arr.slice(1).join("");

}
console.log(capitalizerFirstLetter("пример строки"));