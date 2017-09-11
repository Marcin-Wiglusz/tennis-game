import {canvas, ctx} from './canvas';
import {leftBar, rightBar} from './bar';


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
    
    if (this.ballX >= canvas.width) {
      //bouncing of the right bar
      if (this.ballY > rightBar.barY && this.ballY < rightBar.barY + rightBar.barHeight) {
        this.dx = -this.dx;
      }
      else{
        tennisBall.resetBall();  
      }      
//      Ball.resetBall(); no ball and bar respawn
    }    
    else if (this.ballX < 0) {
      //bouncing of the left bar
      if (this.ballY > leftBar.barY && this.ballY < leftBar.barY + leftBar.barHeight) {
      this.dx = -this.dx;  
      }
      else{
        tennisBall.resetBall();  
      }  
//      Ball.resetBall();
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
  //reseting ball position to the center after score and changing ball direction
  resetBall() {
    this.dx = - this.dx;
    this.ballX = canvas.width / 2;
    this.ballY = canvas.height / 2;
  }
}

export let tennisBall = new Ball(canvas.width / 2, canvas.height / 2, 10, 5, -2);

