import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto">
      {/* ─── HEADER ─── */}
      <div className="text-center mb-20">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-3">
          Career
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
          Experience & Education
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* ───────── EXPERIENCE ───────── */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-10 text-gray-500 dark:text-gray-400">
            Experience
          </h3>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-white/10" />

            {/* ITEM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 pb-12"
            >
              {/* dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gray-400 dark:bg-white/60"></div>

              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                AI / ML Full Stack Developer
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Setnext Technology pvt Ltd • Sep 2024 – Present
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <li>Building AI systems for real-world automation</li>
                <li>Computer Vision using YOLO & OpenCV</li>
                <li>OCR and document processing pipelines</li>
                <li>LLMs, RAG, and agent-based systems</li>
              </ul>
            </motion.div>

            {/* ITEM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-10 pb-12"
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gray-400 dark:bg-white/60"></div>

              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                Associate Software Developer (Trainee)
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Tech Mahindra • Feb 2023 – Mar 2023
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <li>Learned software development lifecycle</li>
                <li>Built foundational web applications</li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ───────── EDUCATION ───────── */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-10 text-gray-500 dark:text-gray-400">
            Education
          </h3>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-white/10" />

            {/* ITEM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative pl-10 pb-12"
            >
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gray-400 dark:bg-white/60"></div>

              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                B.E. Computer Science & Engineering
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                BGS Institute of Technology, Mandya
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Aug 2018 – Jun 2022
              </p>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                CGPA: 7.85 / 10
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
