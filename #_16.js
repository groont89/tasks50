// Напишите функцию, которая принимает строковый параметр
// и меняет буквы в словах в обратном порядке.
// Все пробелы в строке должны быть сохранены.
// Например:
// This is an example! -> sihT si na !elpmaxe

function reverseWordNew(str) {
  const result = [];
  str.split(" ").map((item) => result.push(item.split("").reverse().join("")));
  return result.join(" ");
}

console.log(reverseWordNew("This is an example!"));
