import {drawCanvas, canvas, ctx} from './canvas';
import {tennisBall} from './ball';
import {leftBar, rightBar, barHeight} from './bar';

function draw() {  
  
  drawCanvas();
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  
}   

setInterval(draw, 10);

