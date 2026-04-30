import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-[100svh] flex items-center px-6 py-16 max-w-6xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* LEFT → 3D PHOTO */}
        <div className="flex justify-center">
          <motion.div
            whileHover={{
              rotateY: 18,
              rotateX: 8,
              scale: 1.05,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="relative perspective-[1200px]"
          >
            {/* Gradient Glow */}
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 blur-3xl opacity-25"></div>

            {/* Image Card */}
            <div
              className="
             relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              transform-gpu
              "
            >
              <img
                src="/avatar.png"
                alt="profile"
                className="w-full h-full object-cover"
              />

              {/* Light reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>

              {/* Depth shadow layer */}
              <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/20"></div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT → CONTENT */}
        <div>
          {/* Label */}
          <p className="text-xs tracking-widest text-indigo-400 uppercase mb-3">
            About Me
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 text-gray-900 dark:text-white">
            Building intelligent systems
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              that automate real work.
            </span>
          </h2>

          {/* Paragraphs */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Focused on developing AI systems that solve real-world problems
            through automation. With 2+ years of experience in Generative AI,
            worked on building scalable solutions from model development to
            production deployment.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Experienced in Computer Vision (YOLO, SAM), OCR automation, Agentic
            AI, and RAG systems, with a strong focus on creating end-to-end
            intelligent systems that reduce manual effort and integrate
            seamlessly into real-world workflows.
          </p>

          {/* TAGS */}
          <div className="flex gap-3 flex-wrap mt-6">
            {["Computer Vision", "Agentic AI", "RAG", "Multimodal"].map(
              (tag, i) => (
                <span
                  key={i}
                  className="
                  px-4 py-1 text-xs rounded-full
                  bg-gray-100 dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  text-gray-700 dark:text-gray-300
                  hover:scale-105 transition
                  "
                >
                  {tag}
                </span>
              ),
            )}
          </div>

          {/* STATS */}
          <div className="flex gap-10 mt-10">
            {[
              { value: "2+", label: "Years" },
              { value: "10+", label: "Projects" },
              { value: "5+", label: "Domains" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
