// Напишите функцию, которая проверит, является ли строка палиндромом.

function palindrom(str) {

    return str === str.toLowerCase().split('').reverse().join('');
}
console.log(palindrom("redev"));