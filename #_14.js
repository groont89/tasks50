// Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
// учитывая массив из минимум 4 положительных чисел.
// Например:
// [12,423,54,1235,3,15,2,52] => 5

let arr = [12, 423, 54, 1235, 3, 15, 2, 52];

function returnMinNum(arr) {
  let arr2 = [];
  for (let item of arr) {
    if (item > 0) {
      arr2.push(item);
    }
  }
  let a = +arr2.splice(arr2.indexOf(Math.min(...arr2)), 1);
  let b = +arr2.splice(arr2.indexOf(Math.min(...arr2)), 1);
  return a + b;
}
console.log(returnMinNum(arr));
