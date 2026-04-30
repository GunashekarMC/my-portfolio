import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";

/* ─────────────────────────────────────────
   3-D floating orbs — canvas-rendered,
   glossy sphere illusion with specular
   highlights and soft shadow rings.
───────────────────────────────────────── */
function OrbCanvas({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = isDark
      ? [
          // Dark: sapphire · teal · violet aurora
          {
            xF: 0.15,
            yF: 0.18,
            r: 440,
            sp: 0.0004,
            dx: 0.12,
            dy: 0.09,
            c0: "rgba(56,189,248,0.22)",
            c1: "rgba(99,102,241,0.26)",
            c2: "transparent",
          },
          {
            xF: 0.8,
            yF: 0.75,
            r: 380,
            sp: 0.00055,
            dx: -0.1,
            dy: -0.08,
            c0: "rgba(139,92,246,0.24)",
            c1: "rgba(34,211,238,0.16)",
            c2: "transparent",
          },
          {
            xF: 0.5,
            yF: 0.42,
            r: 300,
            sp: 0.0003,
            dx: 0.07,
            dy: 0.11,
            c0: "rgba(79,209,197,0.16)",
            c1: "rgba(165,180,252,0.20)",
            c2: "transparent",
          },
          {
            xF: 0.87,
            yF: 0.2,
            r: 240,
            sp: 0.00065,
            dx: -0.08,
            dy: 0.06,
            c0: "rgba(196,181,253,0.18)",
            c1: "rgba(103,232,249,0.14)",
            c2: "transparent",
          },
        ]
      : [
          // Light: peach · lavender · mint · sky
          {
            xF: 0.12,
            yF: 0.16,
            r: 480,
            sp: 0.00038,
            dx: 0.1,
            dy: 0.08,
            c0: "rgba(255,183,153,0.45)",
            c1: "rgba(252,231,243,0.35)",
            c2: "transparent",
          },
          {
            xF: 0.82,
            yF: 0.78,
            r: 420,
            sp: 0.0005,
            dx: -0.09,
            dy: -0.07,
            c0: "rgba(199,210,254,0.42)",
            c1: "rgba(167,243,208,0.32)",
            c2: "transparent",
          },
          {
            xF: 0.46,
            yF: 0.44,
            r: 340,
            sp: 0.00028,
            dx: 0.06,
            dy: 0.1,
            c0: "rgba(253,230,138,0.32)",
            c1: "rgba(254,202,202,0.26)",
            c2: "transparent",
          },
          {
            xF: 0.9,
            yF: 0.25,
            r: 270,
            sp: 0.0006,
            dx: -0.07,
            dy: 0.05,
            c0: "rgba(165,243,252,0.38)",
            c1: "rgba(216,180,254,0.28)",
            c2: "transparent",
          },
        ];

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb, i) => {
        const cx =
          canvas.width * orb.xF +
          Math.sin(t * orb.sp * 1.4 + i * 1.2) * 140 * orb.dx * 10;
        const cy =
          canvas.height * orb.yF +
          Math.cos(t * orb.sp + i * 0.9) * 120 * orb.dy * 10;

        /* ── soft drop shadow ring (depth illusion) ── */
        const shadow = ctx.createRadialGradient(
          cx + orb.r * 0.12,
          cy + orb.r * 0.14,
          0,
          cx,
          cy,
          orb.r * 1.1,
        );
        shadow.addColorStop(
          0,
          isDark ? "rgba(6,8,50,0.0)" : "rgba(180,120,60,0.0)",
        );
        shadow.addColorStop(
          0.7,
          isDark ? "rgba(6,8,50,0.22)" : "rgba(180,120,60,0.09)",
        );
        shadow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r * 1.1, 0, Math.PI * 2);
        ctx.fillStyle = shadow;
        ctx.fill();

        /* ── main orb (off-centre to look 3-D) ── */
        const grad = ctx.createRadialGradient(
          cx - orb.r * 0.3,
          cy - orb.r * 0.3,
          orb.r * 0.04,
          cx + orb.r * 0.1,
          cy + orb.r * 0.1,
          orb.r,
        );
        grad.addColorStop(0, orb.c0);
        grad.addColorStop(0.55, orb.c1);
        grad.addColorStop(1, orb.c2);
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        /* ── specular gloss cap ── */
        const gloss = ctx.createRadialGradient(
          cx - orb.r * 0.33,
          cy - orb.r * 0.36,
          0,
          cx - orb.r * 0.15,
          cy - orb.r * 0.18,
          orb.r * 0.5,
        );
        gloss.addColorStop(
          0,
          isDark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.75)",
        );
        gloss.addColorStop(
          0.5,
          isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.20)",
        );
        gloss.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = gloss;
        ctx.fill();

        /* ── rim light (opposite side, 3-D effect) ── */
        const rim = ctx.createRadialGradient(
          cx + orb.r * 0.55,
          cy + orb.r * 0.55,
          0,
          cx + orb.r * 0.35,
          cy + orb.r * 0.35,
          orb.r * 0.55,
        );
        rim.addColorStop(
          0,
          isDark ? "rgba(99,102,241,0.10)" : "rgba(255,200,150,0.18)",
        );
        rim.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(cx, cy, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = rim;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  );
}

/* ─────────────────────────────────────────
   DARK: animated 3-D perspective grid
   (holographic floor plane scrolling)
───────────────────────────────────────── */
function HoloGrid() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none hidden dark:block overflow-hidden"
      aria-hidden="true"
    >
      {/* floor grid */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "-25%",
          width: "150%",
          height: "50%",
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          transform: "rotateX(68deg)",
          transformOrigin: "bottom center",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
          animation: "gridPan 7s linear infinite",
        }}
      />
      {/* vertical "ceiling" grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-25%",
          width: "150%",
          height: "30%",
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
          transform: "rotateX(-68deg)",
          transformOrigin: "top center",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)",
          animation: "gridPan 7s linear infinite reverse",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   LIGHT: 3-D floating bokeh spheres
   (soft pastel micro-orbs drifting up)
───────────────────────────────────────── */
function BokehParticles() {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    size: 8 + (i % 6) * 9,
    left: (i * 4.6 + 2) % 100,
    delay: (i * 0.55) % 10,
    dur: 10 + (i % 6) * 2.5,
    color: [
      ["rgba(255,160,100,0.30)", "rgba(255,220,200,0.50)"],
      ["rgba(180,160,255,0.32)", "rgba(230,220,255,0.55)"],
      ["rgba(100,220,180,0.28)", "rgba(200,255,240,0.50)"],
      ["rgba(255,180,200,0.32)", "rgba(255,230,240,0.55)"],
      ["rgba(100,190,255,0.28)", "rgba(200,230,255,0.50)"],
      ["rgba(255,220,100,0.28)", "rgba(255,245,200,0.50)"],
    ][i % 6],
  }));

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none block dark:hidden overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            bottom: `-${p.size * 2}px`,
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            /* 3-D orb look: off-centre gradient + gloss */
            background: `
              radial-gradient(circle at 32% 28%,
                white 0%,
                ${p.color[1]} 30%,
                ${p.color[0]} 70%,
                transparent 100%
              )
            `,
            boxShadow: `0 0 ${p.size * 1.8}px ${p.color[0]}`,
            animation: `floatUp ${p.dur}s ${p.delay}s ease-in infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   App Root
───────────────────────────────────────── */
export default function App() {
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return (
    <div
      className="min-h-screen transition-colors duration-700 overflow-x-hidden"
      style={{ color: isDark ? "#dde6f5" : "#1f2937" }}
    >
      {/* ── Global keyframes ─────────────────── */}
      <style>{`
        @keyframes gridPan {
          from { background-position-y: 0px; }
          to   { background-position-y: 55px; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0px)     scale(1)    rotate(0deg);   opacity: 0;   }
          8%   { opacity: 1; }
          80%  { opacity: 0.7; }
          100% { transform: translateY(-115vh)  scale(0.35) rotate(25deg);  opacity: 0;   }
        }
      `}</style>

      {/* ── BASE colours (no black anywhere) ── */}

      {/* DARK base: deep indigo-navy */}
      <div
        className="fixed inset-0 -z-20 hidden dark:block"
        style={{
          background:
            "linear-gradient(135deg, #0d0e2c 0%, #101535 40%, #0e1628 100%)",
        }}
      />
      {/* dark vignette rim for depth */}
      <div
        className="fixed inset-0 -z-20 hidden dark:block pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,6,35,0.80) 100%)",
        }}
      />

      {/* LIGHT base: warm ivory-peach */}
      <div
        className="fixed inset-0 -z-20 block dark:hidden"
        style={{
          background:
            "linear-gradient(135deg, #fdf4ec 0%, #fef0e8 40%, #f9f0ff 100%)",
        }}
      />
      {/* light edge vignette */}
      <div
        className="fixed inset-0 -z-20 block dark:hidden pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(200,140,80,0.10) 100%)",
        }}
      />

      {/* ── 3-D animated layers ───────────────── */}
      <OrbCanvas isDark={isDark} />
      <HoloGrid />
      <BokehParticles />

      {/* ── Page sections ────────────────────── */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Chatbot />
    </div>
  );
}
