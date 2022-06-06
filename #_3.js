// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и Вы должны вернуть самое большое и самое маленькое число.
// Например:
// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"
function list(num) {
    let arrayNum = num.split(" ");
    let maxNum = Math.max.apply(null, arrayNum);
    let minNum = Math.min.apply(null, arrayNum);
    return `${maxNum}  ${minNum}`;
}

console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"));