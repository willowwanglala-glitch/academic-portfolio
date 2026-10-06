import { Briefcase, Users } from "lucide-react";

const PawIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 mt-1">
    <circle cx="12" cy="17" r="4" />
    <circle cx="7" cy="11" r="2.5" />
    <circle cx="17" cy="11" r="2.5" />
    <circle cx="9" cy="6" r="2" />
    <circle cx="15" cy="6" r="2" />
  </svg>
);

const researchExperiences = [
  {
    title: "Research Intern",
    organization: "Speech and Language Laboratory, Nanyang Technological University, Singapore (Remote)",
    period: "07/2026 – Present",
    description: [
      "Researched synthesis and automatic evaluation of non-verbal vocalizations (e.g., laughter, sighs) for TTS, under Prof. Chng Eng Siong.",
      "Built and ran a tagged TTS evaluation pipeline (GPT corpus → tag insertion → Qwen/ElevenLabs → Omni judge → archive/stats); zh/en included VAD rescue (p1).",
      "Delivered zh/en ~197 h QC-usable speech (633 rounds, ~37.7k clips; 94.9% pass after VAD) and extended the pipeline to ms/id (~192 h Omni-pass / ~284 h synthesized, near the ~195 h target), with dual p1/p2 tagging, QC, and large-scale batch production."
    ]
  },
  {
    title: "RAG-based Continuation–Output Binding Mechanism for Writing Instruction",
    organization: "Research Project",
    period: "12/2025 – Present",
    description: [
      "Investigated how Retrieval-Augmented Generation (RAG) can be integrated with the continuation–output hypothesis to enhance AI-assisted writing instruction and address the lack of mechanism-level validation in AI-supported language learning.",
      "Independently designed the research framework (Coze), integrating SLA theory with RAG architecture; developed hypotheses, experimental design, corpus preparation plan, prompt tasks, and evaluation metrics for writing outcomes.",
      "Established the research framework and technical pathway, with ongoing data preparation and experimental implementation for theory-driven evaluation of RAG-based writing support."
    ]
  },
  {
    title: "Prompt Optimization for Chinese Classical Poetry Translation Based on Large Language Models",
    organization: "Research Project",
    period: "11/2025 – Present",
    description: [
      "Examined how prompt engineering and retrieval augmentation (RAT) can improve LLM-based translation of Chinese classical poetry, addressing the lack of theory-driven prompt design for linguistically and culturally complex texts.",
      "Completed the Du Fu phase: based on Xu Yuanchong's \"Three Beauties\" theory, designed 8 structured prompt architectures (ICIO, CRISPE, BROKE, RASCEF and their 3M variants) and translated them across DeepSeek-V3.1, Kimi-K2, and ChatGPT (486 prompt–translation pairs); expert scoring with a self-made scale (Cronbach's α = .789) revealed a significant main effect of prompt framework on translation quality (p < .001). Manuscript (~13,000 words, ID: 2026-1163) under review at Foreign Language Teaching and Research (《外语教学与研究》).",
      "Currently extending the study from Du Fu to Li Bai with an 8 (prompt) × 2 (RAT on/off) × 3 (LLM) design, adding an automated evaluation pipeline (rhyme/syllable metrics, LLM-as-judge validation, CoT decision-path tracing)."
    ]
  },
  {
    title: "Research Hotspots and Visualized Analysis of Prosodic Grammar Based on VOSviewer and CiteSpace",
    organization: "Provincial Undergraduate Innovation Project, Team Leader",
    period: "11/2025 – Present",
    isTeamLeader: true,
    description: [
      "Investigated the intellectual structure, research hotspots, and emerging trends in prosodic grammar, focusing on the scholarly contributions of Feng Shengli.",
      "Independently conducted research design, literature collection, data cleaning, and bibliometric analysis using CiteSpace and VOSviewer, analyzing over 5,000 citation records and managing large-scale literature datasets with tools such as Google Scholar, CNKI, Zotero, and NoteExpress.",
      "Completed a manuscript of over 13,000 words; currently under revision with supervisor guidance and planned for submission."
    ]
  },
  {
    title: "Decoding Cultural Codes: An Analysis of English Subtitle Translation in Ne Zha: Birth of the Demon Child",
    organization: "Undergraduate Innovation Project",
    period: "11/2024 – 12/2025",
    description: [
      "Examined subtitle translation strategies in the Chinese animated film Ne Zha: Birth of the Demon Child from the perspective of Skopos Theory, focusing on how culturally specific elements are conveyed to international audiences.",
      "Collaborated with four team members under supervision to analyze subtitle translation cases. Contributed to literature review, data collection, theoretical analysis, and the writing of the final research paper.",
      "Successfully completed the project and produced a final research paper, strengthening skills in theoretical analysis, academic writing, and collaborative research."
    ]
  },
  {
    title: "Cultural Discount in the Cross-Cultural Communication of Chinese Domestic Films",
    organization: "Undergraduate Innovation Project, Team Leader",
    period: "11/2023 – 06/2024",
    isTeamLeader: true,
    description: [
      "Investigated the phenomenon of cultural discount in the international dissemination of Chinese films, examining how cultural specificity affects cross-cultural audience reception.",
      "Served as team leader, coordinating two members under supervision to conduct a literature review on cultural discount and cross-cultural film communication, including database searches and analysis using CNKI and Web of Science.",
      "Completed a final literature review report, strengthening skills in academic writing, literature synthesis, and collaborative research."
    ]
  }
];

export default function ResearchExperienceSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center reveal">
          Research Experience
        </h2>

        <div className="space-y-8">
          {researchExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm border-l-4 border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 reveal"
              data-reveal-delay={String(index * 100)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="shrink-0 mt-1">
                  {exp.isTeamLeader ? (
                    <Users className="w-5 h-5 text-primary" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {exp.organization}
                  </p>
                  <span className="inline-block text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mt-4 ml-9">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed text-foreground/90 flex items-start gap-2">
                    <PawIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
