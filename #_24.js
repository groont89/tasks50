// Напишите функцию isUpperCase(str, character), которая определяет,
// в каком регистре написан символ строки в указанной позиции. 
// Если он написан в верхнем регистре - возвращать true, 
// если в нижнем – false.
// function isUpperCase(str, character) {};
// isUpperCase('tasks JavaScript', 6); // true

function isUppercase(str, characters) {
    let arr = str.split('');
    arr[characters] === arr[characters].toUpperCase() ?
        console.log("true") :
        console.log("false");
}
isUppercase('tasks JavaScript', 6);