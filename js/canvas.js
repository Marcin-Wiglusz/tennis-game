export const canvas = document.getElementById('tennisCanvas');
export const ctx = canvas.getContext('2d');

export function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

