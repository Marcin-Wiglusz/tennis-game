import {drawCanvas, canvas, ctx} from './canvas';
import {tennisBall} from './ball';
import {leftBar, rightBar, barHeight} from './bar';

function draw() {  
  
  drawCanvas();
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  rightBar.aiMovement();
  
}   

setInterval(draw, 10);

