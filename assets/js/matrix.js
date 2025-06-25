// === Matrix Rain Effect ===
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノ";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const nums = "0123456789";
const chars = katakana + alphabet + nums;

const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array.from({ length: columns }, () => 1);

function reset() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = Array.from({ length: columns }, () => 1);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ff9f";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = chars.charAt(Math.floor(Math.random() * chars.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);
window.addEventListener("resize", reset);
