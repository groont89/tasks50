// Функция simple, в качестве параметра принимающая строку слов,
// возвращает длину самого короткого слова.
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
function findWord(str) {
    let strSplit = str.split(" ");
    let result = strSplit.reduce((a, b) => 
         a.length < b.length ? a : b
    );
    return `самое короткое слово---> "${result}"  имеет  количество смволов: ${result.length}`;
}
console.log(findWord("hello my world"));