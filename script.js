const wrapper = document.querySelector('.wrapper');
const playerinfo = document.querySelector('#player_info');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
const sixth = document.querySelector('#sixth');
const seventh = document.querySelector('#seventh');
const eighth = document.querySelector('#eighth');
const ninth = document.querySelector('#ninth');
const clearbnt = document.querySelector('#clear_btn');
const input = document.querySelectorAll('.input_box');
const secondWrapper = document.querySelector('.second_wrapper');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
let count = 0, result = false, checkCount = 0;

input.forEach(element => {
    element.addEventListener('click', () => {
        checkValue(element);
        showPlayer();

        if (count > 1) {
            checkResult();
        }
        if ((checkCount === 1 && count === 10) || (checkCount === 0 && count === 9)) {
            clearbnt.innerHTML = 'Play Again';
        }
        if (result) {
            input.forEach(el => el.style.pointerEvents = "none");
            clearbnt.innerHTML = 'Play Again';
            showWinner();
            showScore();
            result = false;
            // count = Math.floor(Math.random() * 2);
        }
        console.log('count..', count);
    });
});
function checkValue(element) {
    if (element.innerHTML === '') {
        if (count % 2 === 0) {
            element.innerHTML = 'X';
            element.style.color = 'rgba(255, 0, 0, 0.829)';
        } else {
            element.innerHTML = 'O';
            element.style.color = 'rgba(0, 225, 255)';
        }
        count++;
    }
}
function setColor() {
    input.forEach(el => el.style.color = 'rgba(255, 255, 255, 0.89)');
}
function checkResult() {
    if (first.innerHTML !== '' && first.innerHTML == second.innerHTML && second.innerHTML == third.innerHTML) {
        setColor();
        first.style.color = "rgb(9, 255, 0)";
        second.style.color = "rgb(9, 255, 0)";
        third.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (first.innerHTML !== '' && first.innerHTML == fourth.innerHTML && fourth.innerHTML == seventh.innerHTML) {
        setColor();
        first.style.color = "rgb(9, 255, 0)";
        fourth.style.color = "rgb(9, 255, 0)";
        seventh.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (seventh.innerHTML !== '' && seventh.innerHTML == eighth.innerHTML && eighth.innerHTML == ninth.innerHTML) {
        setColor();
        seventh.style.color = "rgb(9, 255, 0)";
        eighth.style.color = "rgb(9, 255, 0)";
        ninth.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (third.innerHTML !== '' && third.innerHTML == sixth.innerHTML && sixth.innerHTML == ninth.innerHTML) {
        setColor();
        third.style.color = "rgb(9, 255, 0)";
        sixth.style.color = "rgb(9, 255, 0)";
        ninth.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (second.innerHTML !== '' && second.innerHTML == fifth.innerHTML && fifth.innerHTML == eighth.innerHTML) {
        setColor();
        second.style.color = "rgb(9, 255, 0)";
        fifth.style.color = "rgb(9, 255, 0)";
        eighth.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (fourth.innerHTML !== '' && fourth.innerHTML == fifth.innerHTML && fifth.innerHTML == sixth.innerHTML) {
        setColor();
        fourth.style.color = "rgb(9, 255, 0)";
        fifth.style.color = "rgb(9, 255, 0)";
        sixth.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (first.innerHTML !== '' && first.innerHTML == fifth.innerHTML && fifth.innerHTML == ninth.innerHTML) {
        setColor();
        first.style.color = "rgb(9, 255, 0)";
        fifth.style.color = "rgb(9, 255, 0)";
        ninth.style.color = "rgb(9, 255, 0)";
        result = true;
    } else if (third.innerHTML !== '' && third.innerHTML == fifth.innerHTML && fifth.innerHTML == seventh.innerHTML) {
        setColor();
        third.style.color = "rgb(9, 255, 0)";
        fifth.style.color = "rgb(9, 255, 0)";
        seventh.style.color = "rgb(9, 255, 0)";
        result = true;
    }
}

function showPlayer() {
    if (count % 2 === 0) {
        playerinfo.innerHTML = name1.innerHTML;
    } else {
        playerinfo.innerHTML = name2.innerHTML;
    }
}
function showWinner() {
    if (count % 2 === 0) {
        playerinfo.innerHTML = name2.innerHTML + ': Win';
    } else {
        playerinfo.innerHTML = name1.innerHTML + ': Win';
    }
}
function showScore() {
    if (count % 2 === 0) {
        score2.innerHTML = Number(score2.innerHTML) + 1;
    } else {
        score1.innerHTML = Number(score1.innerHTML) + 1;
    }
}
function clearAll() {
    input.forEach(el => {
        el.innerHTML = '';
        el.style.pointerEvents = "all";
        // el.style.color = 'rgba(255, 255, 255, 0.712)';
    });
    count = Math.floor(Math.random() * 2);
    checkCount = count;

    clearbnt.innerHTML = 'Clear';
    console.log('count..', count);
}
const reloadbtn = document.querySelector('#reload');
const inputwrapper = document.querySelector('.input_name');
const crossbtn = document.querySelector('#crossbtn');
const player1 = document.querySelector('#player_input1');
const player2 = document.querySelector('#player_input2');
const playername = document.querySelectorAll('[playername]');

crossbtn.addEventListener('click', () => {
    if (player1.value !== '') {
        name1.innerHTML = player1.value;
    }
    if (player2.value !== '') {
        name2.innerHTML = player2.value;
    }
    showPlayer();
    secondWrapper.classList.add('disable');
    wrapper.classList.remove('disable');
});
playername.forEach(el => {
    el.addEventListener('click', () => {
        secondWrapper.classList.remove('disable');
        wrapper.classList.add('disable');
    })
});

clearbnt.addEventListener('click', () => {
    clearAll();
    showPlayer();
});
reloadbtn.addEventListener('click', () => {
    clearAll();
    count = 0;
    checkCount = 0;
    showPlayer();
    score1.innerHTML = '0';
    score2.innerHTML = '0';
    console.log('count..', count);
})
window.onload = function () {
    wrapper.classList.add('disable');
};


