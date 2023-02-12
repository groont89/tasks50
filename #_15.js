// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число.
// Это число - позиция, которую слово должно занимать в результате.
// Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только последовательные числа.
// Например:
// is2 Thi1s T4est 3a-> Thi1s is2 3a T4est

function sortStr(str) {
  const strToArray = str.split(" ");
  let result = strToArray.sort((a, b) => {
    let indexA = a.split("").find((letter) => !isNaN(+letter));
    let indexB = b.split("").find((letter) => !isNaN(+letter));
    return indexA - indexB;
  });
  console.log(result.join(" "));
}
sortStr("is2 Thi1s T4est 3a");
