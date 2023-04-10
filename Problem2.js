let doby = require('readline').createInterface(process.stdin, process.stdout);
let ranNum = Math.floor(Math.random() * 21);
let counter = 0;

function numGame() {
    doby.question('Введите число от 1 до 20: ', (input) => {
        let gessNum = +input;
        if (isNaN(gessNum) || gessNum < 1 || gessNum > 20) {
            console.log('Введите от 1 до 20');
        }
        counter++;
        if (gessNum === ranNum) {
            console.log(`Вы угадали число ${ranNum}. С попытки ${+counter}`);
            doby.close();
            return
        }
        if (gessNum < ranNum) {
            console.log('Чуть больше\n');
        } else {
            console.log('Чуть меньше\n')
        }
        numGame();
    })
}

numGame();