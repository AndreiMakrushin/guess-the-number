
function one() {
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    const x = getRandomIntInclusive(1, 100);
console.log(x);

    function two() {
        const a = +prompt("Введите число");
        switch (true) {
            case a === 0: if (confirm('Game ower')){
                return;
            }else{
                two();
            }
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