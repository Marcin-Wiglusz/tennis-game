import {drawCanvas, canvas, ctx} from './canvas';
import {tennisBall} from './ball';
import {leftBar, rightBar} from './bar';




function draw() {  
  
  drawCanvas();
  tennisBall.drawBall();
  leftBar.drawBar();
  rightBar.drawBar();
  
}

setInterval(draw, 10);

//ctx.clearRect(0, 0, canvas.width, canvas.height);