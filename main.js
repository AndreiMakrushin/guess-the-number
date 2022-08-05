
function one() {
    function getRandomIntInclusive(min, max) {
        min = 1;
        max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    const x = getRandomIntInclusive();
console.log(x);

    function two() {
        const a = +prompt("Введите число");
        switch (true) {
            case a == 0: confirm('Game ower'); 
                return;
            case a < x: alert('Ваше число меньше загаданного, введите другое число');
                two(); 
                return;
            case a > x: alert('Ваше число больше загаданного, введите другое число');
                two();
                return;
            default:
                alert('Ответ верный')
                return;
        }
    }
    two();
}
one();