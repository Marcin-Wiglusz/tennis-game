import {drawCanvas, canvas, ctx, drawNet} from './canvas';
import {tennisBall} from './ball';
import {leftBar, rightBar, barHeight} from './bar';

function draw() {  
  
  drawCanvas();  
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  rightBar.aiMovement(); 
  tennisBall.score();
  drawNet();
}   

setInterval(draw, 10);

