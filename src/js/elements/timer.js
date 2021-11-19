let myTimer;
const count = document.querySelector('.count');

function clock() {
    myTimer = setInterval(myClock, 1000);
    let c = 930;

    function myClock() {

        --c
        let seconds = c % 60;
        let minutes = (c - seconds) / 60;
        console.clear();
        count.innerHTML = minutes + "мин " + seconds + "сек"
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}

clock();