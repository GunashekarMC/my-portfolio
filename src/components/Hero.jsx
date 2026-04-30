import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "AI/ML Full Stack Developer",
    "Agentic AI Engineer",
    "Computer Vision Specialist",
    "Automation Systems Builder",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* ── Typing Effect ── */
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < roles[index].length) {
          setText((prev) => prev + roles[index][subIndex]);
          setSubIndex(subIndex + 1);
        } else if (deleting && subIndex > 0) {
          setText((prev) => prev.slice(0, -1));
          setSubIndex(subIndex - 1);
        } else if (subIndex === roles[index].length) {
          setTimeout(() => setDeleting(true), 800);
        } else if (subIndex === 0 && deleting) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 40 : 70,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col justify-center items-center text-center px-4 py-16"
    >
      <div className="space-y-6 max-w-4xl">
        {/* Name */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Gunashekar M C
          </span>
        </h1>

        {/* Typing */}
        <h2 className="text-base md:text-xl font-medium text-gray-600 dark:text-gray-400 h-[28px]">
          {text}
          <span className="animate-pulse">|</span>
        </h2>

        {/* Headline */}
        <h3 className="text-xl md:text-2xl font-semibold leading-snug">
          Building AI Systems <br />
          <span className="bg-gradient-to-r from-cyan-500 to-indigo-600 bg-clip-text text-transparent">
            That Automate Real Work
          </span>
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
          Developer specializing in Computer Vision, Automation, and AI-powered
          systems for real-world industries. Focused on building intelligent,
          scalable, and agentic AI solutions.
        </p>

        {/* Location */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          📍 Bangalore, Karnataka
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-sm font-semibold shadow-lg hover:scale-105 transition duration-300">
            🚀 View Projects
          </button>

          <button
            className="px-6 py-3 rounded-xl text-sm font-medium
              bg-gray-900 text-white 
              dark:bg-white dark:text-black
              border border-gray-300 dark:border-gray-600
              hover:scale-105 transition duration-300 shadow-md"
          >
            📩 Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
