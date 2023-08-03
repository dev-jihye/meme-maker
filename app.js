const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

// 사각형을 그리는 두 가지 방법
//  1. fillRect(x, y, w, h)
ctx.fillRect(50, 50, 100, 100);

//  2. rect(), fill() -> rect()을 쓸 경우 fill() 메소드를 쓰지 않으면 채워지지 않음
ctx.rect(150, 150, 100, 100);
ctx.fill();

ctx.beginPath();
ctx.rect(250, 250, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
