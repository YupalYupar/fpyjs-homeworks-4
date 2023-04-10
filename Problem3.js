const doby = require('readline').createInterface(process.stdin, process.stdout)
let ranNum = Math.floor(Math.random() * 21)

async function wishedNum() {
    let promise = new Promise(function(resolve, reject) {
        doby.question('Введите число от 1 до 20: ', (input) => {
            let gessNum = input;
            doby.pause();
            return resolve(gessNum);
        });
    });
    return await promise;
}

async function numGame() {
    let counter = 0;
    while(true) {
        let input = await wishedNum()
        let gessNum = +input

        if (isNaN(gessNum) || gessNum < 1 || gessNum > 20) {
            console.log('Введите от 1 до 20');
            continue;
        }
        counter++;
        if (gessNum === ranNum) {
            console.log(`Вы угадали число ${ranNum}. С попытки ${+counter}`);
            doby.close();
            break;
        }
        if (gessNum < ranNum) {
            console.log('Чуть больше\n');
        } else {
            console.log('Чуть меньше\n')
        }
    }
    doby.close();
}
numGame();