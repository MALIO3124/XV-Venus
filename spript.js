// ELIMINAR PRELOADER AL CARGAR
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 1000);
    }, 2000);
});

// MOTOR DE POLVO DE ORO (PARTÍCULAS)
const canvas = document.getElementById('goldDustCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let goldSpecks = [];

class Speck {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.4 + 0.1;
        this.alpha = Math.random();
    }
    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) this.reset();
    }
    draw() {
        ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

for(let i=0; i<150; i++) goldSpecks.push(new Speck());

function render() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    goldSpecks.forEach(s => { s.update(); s.draw(); });
    requestAnimationFrame(render);
}
render();

// COUNTDOWN DINÁMICO
const target = new Date("July 18, 2026 19:00:00").getTime();
setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="timer-block"><b>${d}</b><span>DÍAS</span></div>
        <div class="timer-block"><b>${h}</b><span>HRS</span></div>
        <div class="timer-block"><b>${m}</b><span>MIN</span></div>
        <div class="timer-block"><b>${s}</b><span>SEG</span></div>
    `;
}, 1000);