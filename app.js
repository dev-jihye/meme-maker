const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;

const colors = [
  "#55efc4",
  "#00cec9",
  "#ff7675",
  "#e84393",
  "#81ecec",
  "#0984e3",
  "#fd79a8",
  "#74b9ff",
  "#ffeaa7",
  "#fab1a0",
];

function onMove(event) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onMove);
