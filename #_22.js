// Преобразовать массив
// Ваша задача - реализовать функцию transform(arr), 
// принимает массив и возвращает преобразованный массив на основе управляющих последовательностей, 
// содержащихся в arr.
//  Управляющие последовательности - это определенные строковые элементы указанного массива:
// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.
// Например:
// transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]
// transform ([1, 3, '--discard-prev', 4]) => [1, 4]

function transform(arr) {
    let a = arr.indexOf("--discard-next");
    let b = arr.indexOf("--discard-prev");
    let c = arr.indexOf("--double-next");
    let d = arr.indexOf("--double-prev");
    a >= 0 ? arr.splice(a, 2) :
        b >= 0 ? arr.splice(b - 1, 2) :
        c >= 0 ? arr.splice(c, 1, arr[c + 1]) :
        d >= 0 ? arr.splice(d, 1, arr[d - 1]) :
        console.log(arr);
    console.log(arr);
}
transform([1, 3, "--discard-next", 4]);