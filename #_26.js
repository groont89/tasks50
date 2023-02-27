// Напишите функцию startsWith(), которая определяет,
// начинается ли строка символами другой строки, 
// возвращая, соотвественно, true или false.
// let str = 'abc def ghi jkl mno pqr stu';
// String.prototype.startsWith = function(start) {};
// str.startsWith('abc')

function startWith(str1, str2) {
    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    return arr1[0] === arr2[0] ? true : "false";
}
console.log(startWith("abs sdada asdasd", "abs aasasd adsada"));