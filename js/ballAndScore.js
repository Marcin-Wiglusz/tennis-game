//mouse click event for game restart placed at the end of the code

import {canvas, ctx} from './canvas';
import {leftBar, rightBar} from './bar';

let playerScore = 0;
let aiScore = 0;
let win = false;
let winScore = 3;

class Ball {
  constructor(ballX, ballY, ballRadius, dx, dy) {
    
    this.ballX = ballX;
    this.ballY = ballY;
    this.ballRadius = ballRadius;
    this.dx = dx;
    this.dy = dy;
  }
  
  drawBall() {    
    ctx.beginPath()
    ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.closePath(); 
    
    //adding ball movement
    this.ballX += this.dx
    this.ballY += this.dy    
    
    let bounceY;    
    
    if (this.ballX >= canvas.width - this.ballRadius - (rightBar.barWidth * 2)) {
        //bouncing of the right bar
      if (this.ballY >= rightBar.barY - this.ballRadius && this.ballY <= rightBar.barY + rightBar.barHeight + this.ballRadius && this.ballX < canvas.width - (rightBar.barWidth * 2)) {
        this.dx = -this.dx;         
        
        // the closer to the edge the higher bounce angle and faster ball movement         
        bounceY = this.ballY - (rightBar.barY + rightBar.barHeight / 2);
        this.dy = bounceY * 0.3;
      }
      else if (this.ballX > canvas.width - rightBar.barWidth) {        
        playerScore++;
        tennisBall.resetBall();        
        }      
    }
    else if (this.ballX <= this.ballRadius + (leftBar.barWidth * 2)) {
      //bouncing of the left bar
      if (this.ballY >= leftBar.barY - this.ballRadius && this.ballY <= leftBar.barY + leftBar.barHeight + this.ballRadius && this.ballX > leftBar.barWidth * 2) {        
        this.dx = -this.dx;
        
        // the closer to the edge the higher bounce angle and faster ball movement
        bounceY = this.ballY - (leftBar.barY + leftBar.barHeight / 2);
        this.dy = bounceY * 0.3;
      }     
      else if (this.ballX < leftBar.barWidth) {     
        aiScore++;
        tennisBall.resetBall();         
        }  
    }
    
    //boucing of the bottom
    else if (this.ballY + this.ballRadius >= canvas.height) {
    this.dy = -this.dy;
    }
    //boucing of the top
    else if (this.ballY < 0 + this.ballRadius) {
      this.dy = -this.dy;
    }
  }
  

  resetBall() {
    //win conditions     
    if (playerScore >= winScore || aiScore >= winScore) {
      win = true;
    } 

    //reseting ball position to the center after scoring and changing ball direction
    this.ballX = canvas.width / 2;
    this.ballY = canvas.height / 2;
    this.dx = - this.dx;
    //changing ball direction after scoring
    if (playerScore % 2 == 0) {
      this.dy = -2;
    }
    else {
      this.dy = 2;
    }   
  }
  
  gameReset() {
      if (win) {
        //displaying player win
        if (playerScore >= winScore) {
          ctx.fillText('You Won!', 50, 250);
        }
        //displaying computer win
        else if (aiScore >= winScore) {
          ctx.fillText('Computer Won!', 450, 250);
        }
      ctx.font = '30px Courier New';
      ctx.fillText('Click to restart', 50, 400);
      this.ballX = canvas.width / 2;
      this.ballY = canvas.height / 2;  
    }    
    return;
  }
  
  //drawing score
  score() {
    ctx.font = '30px Courier New';  
    ctx.fillText(playerScore, 100, 100);
    ctx.fillText(aiScore, canvas.width - 100, 100);
  }
}

export let tennisBall = new Ball(canvas.width / 2, canvas.height / 2, 10, 5, 2);


canvas.addEventListener('mousedown', ()=> {
  if (win) {
    playerScore = 0;
    aiScore = 0;
    win = false;
  }
});























