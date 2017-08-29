import {canvas} from './canvas';
import {barHeight, barY} from './bar';

export let relativeY;

export function mouseMoveHandler(event) {
  //method returns the size of an element and its position relative to the viewport
//  let area = canvas.getBoundingClientRect();
//  let root = document.documentElement;
//  let mouseX = event.clientX;
//  let mouseY = event.clientY;
//  return {
//    x: mouseX,
//    y: mouseY
//  };
  
  relativeY = event.clientY;
  if (relativeY > 0 + barHeight && relativeY < canvas.height) {
    relativeY = relativeY;
  }
}
console.log(relativeY);
