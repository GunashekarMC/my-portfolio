import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Users, Code, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Your personal contact details
  const links = [
    {
      icon: Mail,
      label: "Email",
      value: "gunashekarmc@gmail.com",
      href: "mailto:gunashekarmc@gmail.com",
    },
    {
      icon: Users,
      label: "LinkedIn",
      value: "linkedin.com/in/gunashekarmc",
      href: "https://www.linkedin.com/in/gunashekarmc/",
    },
    {
      icon: Code,
      label: "GitHub",
      value: "github.com/GunashekarMC",
      href: "https://github.com/GunashekarMC",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-[100svh] flex flex-col justify-center px-6 py-24 md:py-32 transition-colors duration-700"
      style={{
        background: isDark ? "transparent" : undefined, // For light theme, fallback to default App.jsx background
      }}
    >
      {/* ─── HEADER ─── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <p className="text-sm md:text-xs uppercase tracking-widest text-indigo-500 dark:text-cyan-400 mb-2">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Let's Work Together
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          I'm open to collaborations, freelance projects, or full-time
          opportunities. Reach out anytime — I respond quickly.
        </p>
      </motion.div>

      {/* ─── CONTACT CARDS ─── */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-2">
        {links.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`
                relative group flex items-center justify-between p-6 rounded-3xl
                backdrop-blur-[20px] border
                hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
                ${
                  isDark
                    ? "bg-black/30 border-black/40"
                    : "bg-white/20 border-white/20"
                }
              `}
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-400/20 via-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-80 blur-3xl transition duration-500 pointer-events-none`}
              />

              {/* Icon & text */}
              <div className="flex items-center gap-4 relative z-10 flex-1 min-w-0">
                <div
                  className={`p-3 rounded-xl border flex items-center justify-center flex-shrink-0 ${
                    isDark
                      ? "bg-black/40 border-black/20"
                      : "bg-white/30 border-white/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isDark ? "text-cyan-400" : "text-indigo-600"
                    }`}
                  />
                </div>
                <div className="flex flex-col overflow-hidden min-w-0">
                  <span className="text-xs md:text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white break-all">
                    {item.value}
                  </span>
                </div>
              </div>

              {/* Arrow inside flex */}
              <div className="relative z-10 flex-shrink-0 ml-4">
                <ArrowUpRight
                  size={20}
                  className="text-gray-400 opacity-50 group-hover:opacity-100 transition-transform duration-300"
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
