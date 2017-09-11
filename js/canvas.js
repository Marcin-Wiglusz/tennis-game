export const canvas = document.getElementById('tennisCanvas');
export const ctx = canvas.getContext('2d');

export function drawCanvas() {  
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function drawNet(){
  for (let i = 0; i < canvas.height; i += 30) {
  ctx.fillRect(canvas.width / 2 - 1, i, 2, 20);
  }
}


//how to center canvas?