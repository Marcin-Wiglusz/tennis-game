import {canvas, ctx} from './canvas';
import {positionY} from './leftBarHandler';
import {tennisBall} from './ballAndScore';

class Bar {
  constructor(barX, barY, barWidth, barHeight){

    this.barX = barX;
    this.barY = barY;    
    this.barWidth = barWidth;
    this.barHeight = barHeight;
  }
  
  drawBar() {
    ctx.rect(this.barX, this.barY, this.barWidth, this.barHeight);
    ctx.fillStyle = '#fff';
    ctx.fill();
  }
  
  aiMovement() {
    //ai bar follows ball
    if (this.barY + (this.barHeight / 2) < tennisBall.ballY - 30) {
      this.barY += 8;
    }
    else if (this.barY + (this.barHeight / 2) > tennisBall.ballY + 30) {
      this.barY -= 8;
    }
  }
}
export let leftBar = new Bar(10, positionY, 10, 100);
export let rightBar = new Bar(canvas.width - 20, (canvas.height - 100) / 2, 10, 100);

 