'use strict';

//THE SECRET NUMBER
let secretNumber = Math.trunc(Math.random() *20) +1; 

//THE SCORE HOLDER
let score = 20; 
let highscore = 0;

//SCORE CHECK EVENT LISTENER
document.querySelector('.check').addEventListener('click', function () {
 const guess = Number(document.querySelector('.guess').value);
  
  // IF THERE IS NO INPUT
  if (!guess) {
 document.querySelector('.message').textContent = '⛔ NO Number';
  // WHEN PLAYER WINNS
  } else if (guess === secretNumber){
    document.querySelector('.number') .textContent = secretNumber;
 document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
  }else if (guess !== secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      
 } else {
   document.querySelector('.message').textContent = '😢 You Lost The Game';
document.querySelector('.score').textContent = 0;
  }
}
});
  

//commented out code after refactoring to keep code dry
    /*
    // WHEN GUESS IS TOO HIGH
  } else if (guess > secretNumber){
    if (score > 1){ document.querySelector('.message').textContent= '📈 Too High';
    score--;
   document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  
  //WHEN GUESS IS TOO LOW
   
  } else if (guess < secretNumber){
   if (score > 1) {
 document.querySelector('.message').textContent ='📉Too Low';
    score--;
   document.querySelector('.score').textContent = score;
   } else {
     document.querySelector('.message').textContent = '😢 You Lost The Game';
     document.querySelector('.score').textContent = 0;
   }
  } 
});
*/
//restart the game again

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() *20) +1; 
  score = 20;
  document.querySelector('.number') .textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#F0D0B1';
  document.querySelector('.number').style.width = '15rem';
 
 });
