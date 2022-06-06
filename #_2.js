// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
// Например, строка «Этот сайт для лузеров ЛОЛ!» стал бы "тт сйт дл лзрв ЛЛ!"
// function deleteVowels(str) {
// return
// }
function deleteVowels(str) {
    return str.replace(/[а,е,ё,и,й,о,у,ы,э,ю,я]/gi, "");
}
console.log(deleteVowels("Я приветствую Вас дорогой друг"));