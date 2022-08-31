const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningscoreSelect = document.querySelector('#playto');
const resetButton = document.querySelector('#reset');


let p1Score = 0;
let p2Score = 0;
let winningScore = 18;
let isGameOver = false;

p1Button.addEventListener('click', function(){
    if(!isGameOver || isGameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;  
    }
    if (p1Score  === winningScore) {
        p1Button.disabled = true
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }
    
    console.log(p1Score.value)
})

p2Button.addEventListener('click', function(){
    if(!isGameOver || isGameOver) {
        p1Score -= 1;
        p1Display.textContent = p1Score;
    }
    if (p1Score  !== winningScore) {
        p1Button.disabled = false
        p1Display.classList.remove('winner');
        p2Display.classList.remove('loser');
    }
    if(p1Score === -1) {
        p1Score = 0;
        p1Display.textContent = 0;
    } 
    console.log(p1Score.value) 
})

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 18;
    p1Display.textContent = 0;
    p2Display.textContent = 18;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    
            
}

resetButton.addEventListener('click', reset)

