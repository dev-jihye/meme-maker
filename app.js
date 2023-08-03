const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 20, 100);
ctx.fillRect(400, 200, 20, 100);
ctx.fillRect(270, 200, 80, 200);

ctx.arc(310, 100, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(295, 90, 5, Math.PI, 2 * Math.PI);
ctx.arc(325, 90, 5, Math.PI, 2 * Math.PI);
ctx.fill();
