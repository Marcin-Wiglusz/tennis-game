import {canvas} from './canvas';
import {leftBar, rightBar} from './bar';

function getMousePos(canvas, evt) {
        let rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

export let positionY = 200;
      
canvas.addEventListener('mousemove', function(evt) {
        let mousePos = getMousePos(canvas, evt);
        positionY = mousePos.y;
        rightBar.barY = positionY;//can i do Bar?
      });