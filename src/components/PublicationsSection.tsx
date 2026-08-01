import { Clock } from "lucide-react";

interface Manuscript {
  title: string;
  authors: string;
  details: string;
}

const manuscripts: Manuscript[] = [
  {
    title: "Prompt Optimization for Chinese Classical Poetry Translation Based on Large Language Models",
    authors: "Zhenfei Wang",
    details: "Manuscript of approximately 13,000 words. Found the main effect of prompt framework on translation quality (p < .001) through 486 prompt-translation pairs across DeepSeek-V3.1, Kimi-K2, and ChatGPT.",
  },
  {
    title: "Research Hotspots and Visualized Analysis of Prosodic Grammar Based on VOSviewer and CiteSpace",
    authors: "Zhenfei Wang",
    details: "Manuscript of over 10,000 words. Independent bibliometric analysis of 5,000+ citation records using CiteSpace and VOSviewer, focusing on the scholarly contributions of Feng Shengli.",
  },
];

function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary">
      <Clock size={12} />
      Manuscript
    </span>
  );
}

export default function PublicationsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-center reveal">
          Publications
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-12 reveal">
          Selected manuscripts and works in progress
        </p>

        <div className="space-y-6">
          {manuscripts.map((paper, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300 reveal"
              data-reveal-delay={String(index * 100)}
            >
              <div className="mb-3">
                <StatusBadge />
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug mb-2">
                {paper.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-3">
                {paper.authors}
              </p>

              <p className="text-sm text-foreground/80 leading-relaxed">
                {paper.details}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center reveal">
          <p className="text-sm text-muted-foreground">
            Full CV with complete publication list available upon request.
          </p>
        </div>
      </div>
    </section>
  );
}
