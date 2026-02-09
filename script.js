function yesClick() {
  startConfetti();
  setTimeout(() => {
    alert("UDHAYA ❤️\n\nFrom today, every Valentine’s Day belongs to US 😍💖\n– Nivetha");
  }, 600);
}

// NO button逃跑 😄
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 260 + "px";
  noBtn.style.top = Math.random() * 350 + "px";
});

// CONFETTI 🎉
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pieces = [];

function startConfetti() {
  for (let i = 0; i < 160; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10 + 6
    });
  }
  requestAnimationFrame(update);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.fill();
    p.y += p.d;
    if (p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(update);
}
