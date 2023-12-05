'use strict'
const gameNumber = function() {
    
    const num = Math.floor(Math.random() * 100);
    let numUser = prompt('Угадай число от 1 до 100')

    if (num > numUser) {
        alert ('Загаданное число больше')
        numUser = prompt('Введи новый вариант')
    }
    else if (num < numUser) {
        alert('Загаданное число меньше')
        numUser = prompt('Введи новый вариант')
    }
    else if (numUser === null) {
        confirm('Игра окончена')
        return
    }
    confirm('Поздравляю, Вы угадали!!!')
}
gameNumber()