// Ваша задача написать функцию, которая принимает в качестве параметра строку и увеличивает каждую "букву" строки на число позиции, которую она занимает.
// Например:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function changeStr(str) {
    const arr = str.toLowerCase().split("");
    let result = arr.map((item, index) => {
        let newStr = item[0].toUpperCase() + item.repeat(index + 1);
        return newStr;
    });
    console.log(result.join('-'));
}
changeStr('adSsDg');