import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Factory Theft Detection System",
      tag: "Computer Vision · Anomaly Detection",
      desc: "YOLO-based system to monitor truck loading in a tyre factory. Trained using SAM data for accurate object counting. Detects mismatches and flags theft anomalies in real-time, preventing material loss.",
      tech: ["YOLO", "SAM", "OpenCV", "Python"],
      size: "large",
    },
    {
      title: "Invoice OCR Automation",
      tag: "OCR · AWS Textract",
      desc: "Automated invoice processing from emails using AWS Textract. Built a dashboard for preview and validation, integrating directly with SAP to eliminate manual GRN entry.",
      tech: ["AWS Textract", "Python", "Dashboard", "SAP"],
    },
    {
      title: "AI Sales Agent Chatbot",
      tag: "LLM · RAG · Agentic AI",
      desc: "Real-time AI sales assistant using Pinecone RAG. Answers queries, retrieves product data, and automatically generates quotations via email.",
      tech: ["LLM", "Pinecone", "RAG", "Agents"],
      size: "wide",
    },
    {
      title: "Agentic AI Tool Router",
      tag: "Advanced AI Systems",
      desc: "LLM-powered system that dynamically selects tools based on user queries. Integrated vector search and knowledge graph backends for intelligent responses.",
      tech: ["LLM", "Pinecone", "Neo4j", "Agents"],
    },
    {
      title: "Multimodal AI Playground",
      tag: "AWS Bedrock · Multimodal",
      desc: "Unified interface to test multiple Bedrock models with text, images, and files. Enables comparison of different LLM outputs in one place.",
      tech: ["AWS Bedrock", "Multimodal", "LLM"],
    },
    {
      title: "SLM / LLM Fine-Tuning Pipeline",
      tag: "Fine-Tuning · Model Training",
      desc: "End-to-end fine-tuning pipeline for both Small Language Models and Large Language Models on domain-specific datasets. Applied QLoRA and PEFT techniques to efficiently adapt pre-trained models with minimal compute, achieving significant performance gains on custom tasks.",
      tech: [
        "QLoRA",
        "PEFT",
        "PyTorch",
        "Transformers",
        "LLaMA",
        "HuggingFace",
      ],
      size: "wide",
    },
    {
      title: "Real-Time AI Voice Bot",
      tag: "Voice AI · Streaming · WebRTC",
      desc: "Low-latency conversational voice bot with real-time speech-to-text, LLM reasoning, and text-to-speech synthesis. Supports live interruptions, context-aware multi-turn dialogue, and seamless voice streaming over WebRTC for natural human-like conversations.",
      tech: ["Whisper", "WebRTC", "WebSockets", "LLM", "TTS", "Python"],
      size: "large",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
            Real-World AI Systems
          </span>
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
          Built and deployed AI solutions for automation, monitoring, and
          intelligent decision-making in real-world environments
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className={`
              group relative rounded-2xl p-[1px]
              bg-gradient-to-br from-indigo-500/30 via-cyan-500/20 to-purple-500/30
              ${p.size === "large" ? "md:col-span-2" : ""}
              ${p.size === "wide" ? "md:col-span-2" : ""}
            `}
          >
            {/* INNER CARD */}
            <div
              className="
                rounded-2xl h-full p-6
                backdrop-blur-xl
                bg-white/70 dark:bg-white/5
                border border-white/20 dark:border-white/10
                flex flex-col justify-between
                transition duration-300
                group-hover:bg-white/80 dark:group-hover:bg-white/10
              "
            >
              {/* CONTENT */}
              <div>
                <p className="text-xs font-medium text-indigo-500 mb-2">
                  {p.tag}
                </p>

                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="
                      text-[11px] px-2.5 py-1 rounded-md
                      bg-gray-200/60 dark:bg-white/10
                      text-gray-700 dark:text-gray-300
                      border border-gray-300/40 dark:border-white/10
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* GLOW EFFECT */}
            <div
              className="
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                blur-xl transition duration-500
                bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20
                -z-10
              "
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
