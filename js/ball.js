import {canvas, ctx} from './canvas';


class Ball {
  constructor(ballX, ballY, ballRadius) {
    
    this.ballX = ballX;
    this.ballY = ballY;
    this.ballRadius = ballRadius;
  }
  
  drawBall() {
    ctx.arc(this.ballX, this.ballY, this.ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
}

export let tennisBall = new Ball(canvas.width / 2, canvas.height / 2, 10);

