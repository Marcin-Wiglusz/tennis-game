import {canvas, ctx} from './canvas';
import {positionY} from './mouseHandler';
import {tennisBall} from './ball';

class Bar {
  constructor(barX, barY, barWidth, barHeight){

    this.barX = barX;
    this.barY = barY;
    this.barHeight = barHeight;
    this.barWidth = barWidth;
  }
  
  drawBar() {
    ctx.rect(this.barX, this.barY, this.barWidth, this.barHeight);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
  
  aiMovement() {
    if (this.barY < tennisBall.ballY) {
      this.barY += 6;
    }
    else {
      this.barY -= 6;
    }
  }
}
export let leftBar = new Bar(10, positionY, 10, 100);
export let rightBar = new Bar(canvas.width - 20, (canvas.height - 100) / 2, 10, 100);

 