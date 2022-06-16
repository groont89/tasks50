// По заданному набору массива чисел вернуть аддитивную инверсию 
// каждого элемента. Каждый позитив становится негативом,
//  а негатив становится позитивом.

// invert([-1,-2,-4,-5]) == [1,2,4,5]
// invert([1,2,4,5]) == [-1,-2,-4,-5]
// invert([1,-2,4,-5]) == [-1,2,-4,5]

// Вы можете предположить, что все значения являются целыми числами.
//  Не изменяйте входной массив / список.

//11.1
function invert(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
}
invert([-1, 2, -3, -4, -5]);
//11.2
function invert(arr) {
    let result = arr.map(item => item ? item * -1 : 0);
    console.log(result);
}
invert([-1, 2, -3, -4, -5]);