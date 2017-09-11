import {drawCanvas, drawNet} from './canvas';
import {tennisBall} from './ballAndScore';
import {leftBar, rightBar} from './bar';

function draw() {  
  
  drawCanvas();  
  
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  rightBar.aiMovement(); 
  tennisBall.score();
  drawNet();
  tennisBall.gameReset();  
}   

setInterval(draw, 10);

