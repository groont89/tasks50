// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.

// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.

function reverseNum(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr[i] = i;
  }
  console.log(
    arr
      .reverse()
      .slice(0, arr.length - 1)
      .join(",")
  );
}
reverseNum(5);
