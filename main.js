
function one(x) {
    function two() {
        const a = +prompt("Введите число");
        if (a == 0) {
            confirm('Game ower');
            two();
        }else
        if (a < x) {
            alert('Ваше число меньше загаданного, введите другое число');
            two();
        }else
        if (a > x) {
            alert('Ваше число больше загаданного, введите другое число');
            two();
        }
        else{
            alert('Ответ верный')
            return
        }
    }
    two();
}
one(80);