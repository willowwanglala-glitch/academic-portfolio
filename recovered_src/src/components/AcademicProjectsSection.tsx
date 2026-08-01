import { BookOpen } from "lucide-react";
import { AcademicProject } from "@/types";

const projects: AcademicProject[] = [
  {
    title: "Scoop One: Branding Upgrade Plan for KUKU Ice Cream Robot",
    subtitle: "Exchange Program (PolyU × GDUT), Credit-based GBA Immersive Experience",
    period: "07/2026",
    description: [
      "Selected for the 8-day AI + Robotics program with English-medium Design Thinking coursework",
      "Led user research for children aged 3–12 and parents; presented Customer Opportunity module in final pitch",
      "Co-proposed low-cost modular retrofit plan with phased MVP pilot (¥300,000 budget cap)",
    ],
  },
  {
    title: "Food Loanword Borrowing under Globalization: Interactive Data Visualization Study",
    subtitle: "Course Project (Big Data and Visualization) — Team Leader",
    period: "06/2026",
    description: [
      "Built interactive web report on 662 deduplicated English food loanwords with Google Books Ngram data",
      "Conducted Pearson chi-square tests and ML analysis (K-Means, Random Forest) in Python/SPSS",
      "Proposed dual-track asymmetry framework revealing stratified waves across 13 source languages",
    ],
  },
  {
    title: "Bilingual Corpus Construction and Machine Translation Model Training for Chinese Political Discourse",
    subtitle: "Course Project (Machine Learning) — Based on LSTM Architecture",
    period: "Undergraduate Course Paper",
    description: [
      "Constructed self-built Chinese–English parallel corpus (~320,000 words) covering government reports and white papers",
      "Implemented three-layer LSTM neural network using PyTorch; loss converged at 8.3047",
      "Demonstrated feasibility of LSTM for domain-specific machine translation in low-resource settings",
    ],
  },
  {
    title: "Gendered Discourse Analysis of Subtitles from Top 30 Global Box Office Films in 2025",
    subtitle: "Course Project (Corpus Linguistics)",
    period: "Undergraduate Course Paper",
    description: [
      "Constructed target corpus of 138,137 words from 14 popular films; used LOB/Brown as reference corpora",
      "Conducted keyword analysis, log-likelihood calculation, and POS tagging with AntConc, WordSmith, SPSS",
      "Revealed clear gendered discourse patterns: male-linked to power/action, female-linked to appearance/family",
    ],
  },
  {
    title: "Language for Life: AI-Powered English Exam Prep Mini Program",
    subtitle: "Course Project (Software Engineering) — Team Leader & Backend/AI Lead",
    period: "Undergraduate Course Paper",
    description: [
      "Led 2-member team through 4-Sprint agile development; architected unified backend API gateway (20 cloud functions)",
      "Orchestrated Coze AI workflows for intelligent tutoring, study plan generation, and essay evaluation",
      "Applied prompt engineering and fault-tolerant AI pipeline design in educational technology context",
    ],
  },
];

export default function AcademicProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center reveal flex items-center justify-center gap-3">
          <BookOpen className="w-8 h-8 text-primary" />
          Academic Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/80 rounded-xl p-6 md:p-8 shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 reveal"
              style={{ backgroundColor: "oklch(0.98 0.04 85 / 0.6)" }}
              data-reveal-delay={String(index * 80)}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-muted-foreground mt-1 italic">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0">
                  {project.period}
                </span>
              </div>

              <ul className="space-y-2">
                {project.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm md:text-base text-foreground/85 leading-relaxed pl-5 relative"
                  >
                    <span className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary" />
                    {item}
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
