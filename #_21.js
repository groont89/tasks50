// Представьте, что Вы и Ваши друзья решили создать команду мечты. 
// У этой команды должно быть крутое секретное имя, 
// которое содержит зашифрованную информацию о ней. 
// Например, это могут быть первые буквы имен его членов 
// в верхнем регистре, отсортированные по алфавиту. 
// Ваша задача - написать функцию createDreamTeam (members), 
// которая возвращает имя созданной команды (строку) 
// на основе имен ее участников (Array). Удачи!

// Имена участников должны быть строками. 
// Значения другого типа следует игнорировать. 
// В случае неправильного типа членов функция должна возвращать false.

// Например:
// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'

function creatDreamTeam(arr) {
    const letters = [];
    let res;
    const newArr = arr.filter(item => typeof item === 'string');
    newArr.forEach((item) => {
        letters.push(item.substring(0, 1));
    });
    res = letters.join('').toUpperCase().split('').sort().join('');
    res.length > 0 ? console.log(res) : console.log("false");
}
creatDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);