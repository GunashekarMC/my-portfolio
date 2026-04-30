import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [rotateDir, setRotateDir] = useState(0);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // 🔥 Random rotation every 10 sec
  useEffect(() => {
    const interval = setInterval(() => {
      const directions = [-20, 20]; // left or right
      const random = directions[Math.floor(Math.random() * directions.length)];
      setRotateDir(random);

      setTimeout(() => setRotateDir(0), 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Resume",
    "Contact",
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-500
        border-gray-200/50 dark:border-white/20
        bg-white/40 dark:bg-white/10"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LEFT */}
        <div className="flex items-center gap-3 cursor-pointer">
          {/* 🔥 3D Avatar */}
          <motion.div
            className="relative w-12 h-12"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-60"></div>

            {/* Avatar */}
            <motion.img
              src="/avatar.png"
              alt="avatar"
              className="relative w-12 h-12 rounded-full object-cover border border-gray-300 dark:border-white/20 shadow-xl"
              animate={{ rotate: rotateDir }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              whileHover={{ scale: 1.1, rotate: 8 }}
            />
          </motion.div>

          {/* Name */}
          <div className="leading-tight">
            <h1 className="font-semibold text-base text-gray-900 dark:text-white">
              Gunashekar MC
            </h1>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              AI Developer
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-gray-900 dark:bg-white transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT: Theme Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 rounded-full border transition
            border-blue-500 text-blue-500
            hover:bg-blue-100 hover:shadow-md
            dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}
