// Ocultar preloader inmediatamente al cargar
window.addEventListener('load', () => {
    document.getElementById('preloader').style.opacity = '0';
    setTimeout(() => document.getElementById('preloader').remove(), 400);
});

// Partículas optimizadas
const canvas = document.getElementById('goldCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5 + 0.1;
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = -10;
    }
    draw() {
        ctx.fillStyle = "rgba(212, 175, 55, 0.5)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Creamos solo 60 partículas (suficiente para el efecto sin lag)
for(let i=0; i<60; i++) particles.push(new Particle());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}

initCanvas();
animate();

// Contador
const targetDate = new Date("July 18, 2026 19:00:00").getTime();
setInterval(() => {
    const diff = targetDate - new Date().getTime();
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div><b>${d}</b> Días</div>
        <div><b>${h}</b> Hrs</div>
        <div><b>${m}</b> Min</div>
        <div><b>${s}</b> Seg</div>
    `;
}, 1000);