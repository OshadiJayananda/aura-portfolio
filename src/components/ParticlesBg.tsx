import { useEffect, useRef } from "react";

export function ParticlesBg() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 22000));
    const colors = ["rgba(167,139,250,", "rgba(96,165,250,", "rgba(103,232,249,"];
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3 * dpr,
      vy: (Math.random() - 0.5) * 0.3 * dpr,
      r: (Math.random() * 1.6 + 0.4) * dpr,
      c: colors[Math.floor(Math.random() * colors.length)],
      a: Math.random() * 0.5 + 0.2,
    }));
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.fillStyle = p.c + p.a + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < parts.length; j++) {
          const q = parts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120 * dpr) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,127,255,${(1 - d / (120 * dpr)) * 0.12})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.3_0.15_280/0.4),transparent_60%)]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.5_0.25_295/0.25)] blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.5_0.22_250/0.22)] blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.6_0.18_200/0.18)] blur-3xl animate-blob" style={{ animationDelay: "-12s" }} />
      <canvas ref={ref} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,oklch(0.13_0.02_270)_90%)]" />
    </div>
  );
}
