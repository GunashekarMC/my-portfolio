import { motion } from "framer-motion";
import {
  Eye,
  FileText,
  Bot,
  Cpu,
  Workflow,
  Globe,
  Sliders,
  Mic,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Computer Vision Systems",
      desc: "Real-time detection and tracking for surveillance and manufacturing.",
      icon: Eye,
    },
    {
      title: "Document AI & OCR",
      desc: "Automate invoice and document processing with high accuracy.",
      icon: FileText,
    },
    {
      title: "AI Assistants (RAG)",
      desc: "LLM-powered assistants for internal knowledge and workflows.",
      icon: Bot,
    },
    {
      title: "AI + Integration",
      desc: "Connect AI with ERP, APIs, CCTV, and dashboards.",
      icon: Cpu,
    },
    {
      title: "Automation Systems",
      desc: "End-to-end workflows that reduce manual effort.",
      icon: Workflow,
    },
    {
      title: "AI Web Apps",
      desc: "Modern, scalable applications powered by AI.",
      icon: Globe,
    },
    {
      title: "LLM / SLM Fine-Tuning",
      desc: "Domain-specific model fine-tuning using QLoRA & PEFT for high performance with minimal compute.",
      icon: Sliders,
    },
    {
      title: "Real-Time Voice Bots",
      desc: "Low-latency AI voice assistants with live STT, LLM reasoning, and TTS over WebRTC.",
      icon: Mic,
    },
  ];

  return (
    <section
      id="services"
      className="min-h-[100svh] flex flex-col justify-center px-6 py-12 md:py-16"
    >
      {/* ── Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          What I Build
        </h2>

        <p className="mt-3 text-gray-600 dark:text-white/80 max-w-xl mx-auto">
          AI systems that automate real-world problems and deliver measurable
          impact.
        </p>
      </motion.div>

      {/* ── Grid ── */}
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
        {services.map((s, i) => {
          const Icon = s.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-lg transition duration-500" />

              {/* Card */}
              <div
                className="relative h-full p-5 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden 
                bg-white/60 dark:bg-white/5 backdrop-blur-xl
                transition-all duration-300
                group-hover:-translate-y-1.5 group-hover:border-blue-400/40"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg 
                  bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                  mb-3 group-hover:scale-110 transition"
                >
                  <Icon className="w-5 h-5 text-blue-500 dark:text-blue-300" />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 text-gray-900 dark:text-white">
                  {s.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 dark:text-white/80 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-[4px] rounded-b-xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
