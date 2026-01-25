const canvas = document.getElementById('canvas-dots');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 100;
const mouse = { x: null, y: null, radius: 150 };

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
window.dispatchEvent(new Event('resize'));

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Interação com mouse
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
            if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
            if (mouse.x > this.x && this.x > 10) this.x -= 2;
            if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
            if (mouse.y > this.y && this.y > 10) this.y -= 2;
        }
    }

    draw() {
        ctx.fillStyle = '#00f2ff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function connect() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                let opacity = 1 - (distance / 150);
                ctx.strokeStyle = `rgba(0, 242, 255, ${opacity * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    connect();
    requestAnimationFrame(animate);
}

init();
animate();

// Lógica do Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    const content = document.getElementById('page-content');
    const percentText = document.getElementById('load-perc');
    const progressFill = document.getElementById('progress-fill');
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                content.style.opacity = '1';
                setTimeout(() => loader.style.display = 'none', 800);
            }, 500);
        }
        percentText.innerText = Math.floor(progress) + "%";
        progressFill.style.width = progress + "%";
    }, 150);
});