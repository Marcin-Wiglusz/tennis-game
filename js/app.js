import {drawCanvas, canvas, ctx} from './canvas';
import {tennisBall} from './ball';
import {leftBar, rightBar} from './bar';
import {mouseMoveHandler} from './mouseHandler';

document.addEventListener('mousemove', mouseMoveHandler);

function draw() {  
  
  drawCanvas();
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  
}   

setInterval(draw, 10);

//ctx.clearRect(0, 0, canvas.width, canvas.height);