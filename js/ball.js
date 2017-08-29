import {canvas, ctx} from './canvas';


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
    
    this.ballX += this.dx
//    this.ballY += this.dy
    
    if (this.ballX >= canvas.width) {
      this.dx = -this.dx;
    }    
  }
}

export let tennisBall = new Ball(canvas.width / 2, canvas.height / 2, 10, 5, -5);

//tennisBall.ballX = tennisBall.ballX + 5;