const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");

const p1display = document.querySelector('#p1Score');
const p2display = document.querySelector('#p2Score');

const winScoreSet = document.querySelector('#playto');
const resetbtn = document.querySelector("#reset");

let dispCount1 = 0;// to change the score of the display score on click for p1Button
let dispCount2 = 0;

let winScore = 3;

let isGameOver = false;

winScoreSet.addEventListener('change' , function(){
    winScore = parseInt(this.value);
    reset();
    
})


p1Button.addEventListener('click', function(){
    if(!isGameOver){
        dispCount1 += 1;
        if(dispCount1 === winScore){

            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
          }
    }
  
  p1display.textContent = dispCount1;

})

// there are two palyers so same as player 1
p2Button.addEventListener('click', function(){
    if(!isGameOver){
        dispCount2+= 1;
        if(dispCount2 === winScore){
    
            isGameOver = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
          }
    }
  
  p2display.textContent = dispCount2;

})

resetbtn.addEventListener('click' , reset);


function reset(){
    isGameOver = false;
    dispCount1 = 0;
    dispCount2 = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;

    p1display.classList.remove('winner', 'loser');
    p2display.classList.remove('winner', 'loser');
}