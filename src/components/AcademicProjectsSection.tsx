import { BookOpen, ExternalLink } from "lucide-react";
import { AcademicProject } from "@/types";

const projects: AcademicProject[] = [
  {
    title: 'Scoop One: Branding Upgrade Plan for KUKU Ice Cream Robot',
    subtitle: 'Exchange Program (PolyU × GDUT), Credit-based GBA Immersive Experience Program (3rd Cohort)',
    period: '07/2026',
    description: [
      'Selected for the 8-day, credit-bearing "AI + Robotics" program jointly offered by PolyU and GDUT (42 students from 20+ majors), with English-medium Design Thinking coursework and credits mutually recognized by both universities.',
      'Conducted field research at GBA robotics enterprises (KUKU Robotics, Aican Technology, Hikvision); worked in a 6-member cross-university team on a real challenge posed by KUKU Robotics—transforming its ice cream robot from a vending machine into a child-oriented interactive brand experience.',
      'Led user research and needs analysis (children aged 3–12 and parents) and presented the "Customer Opportunity" module in the final business pitch; co-proposed a low-cost modular retrofit (IP stickers, logo upgrade, joystick and light-button modules) with a phased MVP pilot plan (3 machines, 4–6 weeks, ¥300,000 budget cap), and built one of the team\'s two AI-assisted 3D prototype models.',
    ],
  },
  {
    title: 'Food Loanword Borrowing under Globalization: Interactive Data Visualization Study',
    subtitle: 'Course Project (Big Data and Visualization) — Team Leader',
    period: '06/2026',
    description: [
      'Led a team to build an interactive web-based research report on 662 deduplicated English food loanwords, integrating Google Books Ngram frequencies (1800–2020) with Merriam-Webster first-attestation and inclusion data.',
      'Collected and cleaned multi-source lexical data (828 raw entries → 662 words) in Python; conducted Pearson chi-square tests in SPSS (dictionary inclusion × semantic category) and machine learning analysis in scikit-learn (K-Means on frequency trajectories; Random Forest on peak frequency).',
      'Proposed a "dual-track asymmetry" framework contrasting corpus frequency with dictionary inclusion, revealing stratified waves of loanword influx across 13 source languages.',
    ],
    link: 'https://willowwanglala-glitch.github.io/globalization-food-words',
  },
  {
    title: 'Bilingual Corpus Construction and Machine Translation Model Training for Chinese Political Discourse Based on LSTM',
    subtitle: 'Course Project (Machine Learning) — Undergraduate Course Paper',
    period: 'Undergraduate Course Paper',
    description: [
      'Constructed a self-built Chinese–English parallel corpus of approximately 320,000 words covering Chinese political documents such as government work reports and white papers.',
      'After text cleaning, tokenization, and vocabulary construction, a three-layer LSTM neural network was implemented using PyTorch. The model was trained and evaluated with an 80/20 train–test split.',
      'The training process was stable, with the loss value decreasing steadily and converging at 8.3047. The results demonstrate the feasibility of LSTM-based architectures for machine translation of political discourse and provide empirical reference for translation modeling in low-resource or domain-specific settings.',
    ],
  },
  {
    title: 'Gendered Discourse Analysis of Subtitles from Top 30 Global Box Office Films in 2025',
    subtitle: 'Course Project (Corpus Linguistics) — Undergraduate Course Paper',
    period: 'Undergraduate Course Paper',
    description: [
      'Constructed a target corpus of subtitles from 14 popular films, comprising 138,137 words. Used the LOB and Brown corpora as reference corpora.',
      'Using tools such as AntConc, WordSmith, and SPSS, conducted keyword analysis (e.g., he/she, man/woman), log-likelihood (LL) value calculation, and part-of-speech tagging to examine gendered discourse patterns.',
      'Exhibited clear gendered discourse differences in the film subtitle corpus, with male-associated language more frequently linked to power and action, and female-associated language more often related to appearance and family. Statistically significant differences were observed between the film corpus and the reference corpora.',
    ],
  },
  {
    title: 'Language for Life: AI-Powered English Exam Prep Mini Program',
    subtitle: 'Course Project (Software Engineering) — Team Leader & Backend/AI Lead',
    period: 'Undergraduate Course Paper',
    description: [
      'Led 2-member team through 4-Sprint agile development, coordinating cross-functional integration and deliverable scheduling.',
      'Architected unified backend API gateway (20 cloud functions) with MongoDB schema design and dual-mode cloud/local deployment.',
      'Orchestrated Coze AI workflows for intelligent tutoring, study plan generation, and essay evaluation with fault-tolerant degradation pipelines.',
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
              style={{ backgroundColor: 'oklch(0.98 0.04 85 / 0.6)' }}
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

              {'link' in project && project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline mb-3"
                >
                  <ExternalLink size={14} />
                  View Project
                </a>
              )}

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
