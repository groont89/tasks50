// В данной задаче Вам нужно удалить из одного массива 
// все элементы второго массива.
// Например:
// arrayDiff([1,2],[1]) ==> [2]
// arrayDiff([1,2,2,2,3],[2]) ==> [1,3]
//12.1
function arrayDiff(arr1, arr2) {
    const newArray = arr1.reduce((acc, item) => {
        if (!arr2.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
    console.log(newArray);
}
arrayDiff([1, 2, 2, 2, 3], [2]);

//12.2.
function arrayDiff(arr1, arr2) {
   let result = arr1.filter((item) =>!arr2.includes(item));
   console.log(result);
}
arrayDiff([1, 2, 2, 2, 3], [2]);