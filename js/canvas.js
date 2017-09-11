export const canvas = document.getElementById('tennisCanvas');
export const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.style.marginLeft = 'auto';
canvas.style.marginRight = 'auto';

export let drawCanvas = ()=> {  
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export let drawNet = ()=> {
  for (let i = 0; i < canvas.height; i += 30) {
  ctx.fillRect(canvas.width / 2 - 1, i, 2, 20);
  }
}


