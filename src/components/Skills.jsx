import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Server,
  Brain,
  Cloud,
  Database,
  Wrench,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Core & Frontend",
      label: "01",
      icon: Code,
      color: "#60a5fa",
      skills: [
        "Python",
        "JavaScript",
        "SQL",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend & APIs",
      label: "02",
      icon: Server,
      color: "#fb923c",
      skills: [
        "Node.js",
        "FastAPI",
        "Flask",
        "REST APIs",
        "Gmail API",
        "Google Drive API",
      ],
    },
    {
      title: "AI / ML Systems",
      label: "03",
      icon: Brain,
      color: "#a78bfa",
      skills: [
        "PyTorch",
        "Transformers",
        "OpenCV / YOLO",
        "SAM (Segment Anything)",
        "Multimodal Models",
        "OCR (Tesseract, EasyOCR)",
        "Model Deployment",
      ],
    },
    {
      title: "LLMs & Agentic AI",
      label: "04",
      icon: Cpu,
      color: "#34d399",
      skills: [
        "RAG Systems",
        "LangChain",
        "OpenAI API",
        "Claude API",
        "LLaMA",
        "Whisper",
        "Prompt Engineering",
      ],
    },
    {
      title: "Cloud, DB & Realtime",
      label: "05",
      icon: Database,
      color: "#facc15",
      skills: [
        "AWS (Textract, SageMaker, Bedrock)",
        "Lambda",
        "SQS",
        "DynamoDB",
        "S3",
        "MongoDB",
        "PostgreSQL",
        "Pinecone",
        "Neo4j",
        "WebSockets",
        "WebRTC",
      ],
    },
    {
      title: "Tools & DevOps",
      label: "06",
      icon: Wrench,
      color: "#f87171",
      skills: ["Git", "Docker", "Linux", "CI/CD (code build)"],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-[100svh] flex items-center px-6 py-10"
    >
      <style>{`
        .skill-row {
          position: relative;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(0,0,0,0.08);
          padding: 14px 0;
          transition: background 0.3s ease;
        }

        .dark .skill-row {
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .skill-row:last-child {
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .dark .skill-row:last-child {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .skill-row:hover {
          background: rgba(0,0,0,0.04);
        }

        .dark .skill-row:hover {
          background: rgba(255,255,255,0.04);
        }

        .row-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          height: 1px;
          width: 100%;
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.4s;
        }

        .skill-row:hover .row-accent-line {
          opacity: 1;
          transform: scaleX(1);
        }

        .skill-tag {
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.04);
          color: rgba(0,0,0,0.75);
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .dark .skill-tag {
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.75);
        }

        .skill-tag:hover {
          background: rgba(0,0,0,0.1);
          color: black;
        }

        .dark .skill-tag:hover {
          background: rgba(255,255,255,0.12);
          color: white;
        }

        @media (max-width: 640px) {
          .skill-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 dark:text-white/40">
            Technical Stack
          </p>
        </motion.div>

        {/* Skills */}
        <div>
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={i}
                className="skill-row"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <div
                  className="row-accent-line"
                  style={{
                    background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  }}
                />

                {/* Left */}
                <div className="flex items-center gap-3 min-w-[200px] pr-5">
                  <span className="text-[9px] tracking-widest text-gray-400 dark:text-white/30 font-bold">
                    {cat.label}
                  </span>

                  <div
                    className="w-7 h-7 flex items-center justify-center rounded-md"
                    style={{
                      background: `${cat.color}20`,
                      border: `1px solid ${cat.color}30`,
                    }}
                  >
                    <Icon size={14} style={{ color: cat.color }} />
                  </div>

                  <span className="text-xs font-medium text-gray-800 dark:text-white/70">
                    {cat.title}
                  </span>
                </div>

                {/* Right */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {cat.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
