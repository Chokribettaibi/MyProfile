const canvas = document.getElementById("canvas1");

if (canvas) {
  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const host = canvas.parentElement;
  let animationFrameId = 0;

  class Particle {
    constructor(effect) {
      this.effect = effect;
      this.radius = Math.random() * 2.6 + 1.4;
      this.reset(true);
    }

    reset(initial = false) {
      this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
      this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
      const speed = initial ? 0.32 : 0.5;
      this.vx = Math.random() * speed - speed / 2;
      this.vy = Math.random() * speed - speed / 2;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x > this.effect.width - this.radius || this.x < this.radius) {
        this.vx *= -1;
      }

      if (this.y > this.effect.height - this.radius || this.y < this.radius) {
        this.vy *= -1;
      }
    }
  }

  class Effect {
    constructor(canvasElement) {
      this.canvas = canvasElement;
      this.width = 0;
      this.height = 0;
      this.particlesArray = [];
      this.numberOfParticles = 0;
    }

    resize(width, height) {
      this.width = width;
      this.height = height;
      this.numberOfParticles = Math.max(36, Math.min(96, Math.floor((width * height) / 9000)));
      this.particlesArray = [];

      for (let index = 0; index < this.numberOfParticles; index += 1) {
        this.particlesArray.push(new Particle(this));
      }
    }

    handleParticles(ctx) {
      this.connectParticles(ctx);
      this.particlesArray.forEach((particle) => {
        particle.draw(ctx);
        particle.update();
      });
    }

    connectParticles(ctx) {
      const maxDistance = 92;

      for (let a = 0; a < this.particlesArray.length; a += 1) {
        for (let b = a + 1; b < this.particlesArray.length; b += 1) {
          const dx = this.particlesArray[a].x - this.particlesArray[b].x;
          const dy = this.particlesArray[a].y - this.particlesArray[b].y;
          const distance = Math.hypot(dx, dy);

          if (distance >= maxDistance) continue;

          const opacity = 1 - distance / maxDistance;
          ctx.save();
          ctx.globalAlpha = opacity * 0.55;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(125, 211, 252, ${opacity})`;
          ctx.moveTo(this.particlesArray[a].x, this.particlesArray[a].y);
          ctx.lineTo(this.particlesArray[b].x, this.particlesArray[b].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  const effect = new Effect(canvas);

  const resizeCanvas = () => {
    if (!host) return;
    const { width, height } = host.getBoundingClientRect();
    canvas.width = Math.max(1, Math.floor(width * window.devicePixelRatio));
    canvas.height = Math.max(1, Math.floor(height * window.devicePixelRatio));
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    context.fillStyle = "rgba(186, 230, 253, 0.8)";
    effect.resize(width, height);
  };

  const render = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(context);
    animationFrameId = window.requestAnimationFrame(render);
  };

  resizeCanvas();

  if (!prefersReducedMotion) {
    render();
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(context);
  }

  window.addEventListener("resize", () => {
    if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    resizeCanvas();
    if (!prefersReducedMotion) render();
  });
}
