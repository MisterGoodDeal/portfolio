import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };

    const count = () => (width < 768 ? 42 : 78);

    const seed = () => {
      nodes = Array.from({ length: count() }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const onMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const linkDist = width < 768 ? 96 : 128;
      const mouseDist = 170;

      if (!reduceMotion) {
        for (const node of nodes) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);

          if (dist > linkDist) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const toMouse = Math.hypot(midX - mouse.x, midY - mouse.y);
          const near = Math.max(0, 1 - toMouse / mouseDist);
          const base = 1 - dist / linkDist;
          const alpha = base * 0.14 + near * 0.45;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle =
            near > 0.15
              ? `rgba(103, 232, 249, ${alpha})`
              : `rgba(167, 139, 250, ${alpha})`;
          ctx.lineWidth = near > 0.2 ? 1.15 : 0.7;
          ctx.stroke();
        }
      }

      for (const node of nodes) {
        const toMouse = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        const hot = Math.max(0, 1 - toMouse / mouseDist);

        ctx.beginPath();
        ctx.arc(node.x, node.y, hot > 0 ? 2.1 : 1.35, 0, Math.PI * 2);
        ctx.fillStyle = hot > 0.05 ? "#67e8f9" : "rgba(196, 181, 253, 0.85)";
        ctx.fill();

        if (hot > 0.35) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 7, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(103, 232, 249, ${hot * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    if (isFinePointer) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="bg-mesh absolute inset-0" />
      <div className="perspective-stage absolute inset-0 overflow-hidden">
        <div className="perspective-grid" />
      </div>
      <div className="beam beam-a" />
      <div className="beam beam-b" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
