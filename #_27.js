// Напишите функцию replaceAll(find, replace, str), 
// которая заменяет в строке str все вхождение подстроки find 
// на подстроку replace.
// let str = 'abc def def lom abc abc def';
// function replaceAll(find, replace, str) {};
// replaceAll('abc', 'x', str)

let str = 'abc def def lom abc abc def';

function replaceAll(find, replace, str) {
    const arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let findWord = arr.indexOf(find);
        i === findWord ? arr.splice(findWord, 1, replace) : arr;
    }
    return arr.join(" ");
}
console.log(replaceAll('abc', 'x', str));