import {canvas} from './canvas';
import {leftBar} from './bar';


let getMousePos = (canvas, evt)=> {
        let rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

export let positionY = 200;
      
canvas.addEventListener('mousemove', (evt)=> {
        let mousePos = getMousePos(canvas, evt);
        positionY = mousePos.y - (leftBar.barHeight / 2);
        leftBar.barY = positionY;
      });



