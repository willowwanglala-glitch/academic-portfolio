import { Brain, Globe, Languages, Sparkles, BookOpen } from "lucide-react";

const interests = [
  { icon: Brain, label: "Computational Linguistics" },
  { icon: Globe, label: "Cross-lingual NLP" },
  { icon: Languages, label: "Low-resource Machine Translation" },
  { icon: Sparkles, label: "Prompt Engineering for Linguistic Texts" },
  { icon: BookOpen, label: "Corpus Linguistics" },
];

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="17" rx="4" ry="3.5" />
      <circle cx="7" cy="11" r="2.5" />
      <circle cx="17" cy="11" r="2.5" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="7" r="2" />
    </svg>
  );
}

export default function ResearchInterests() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-10 reveal flex items-center justify-center gap-3">
        Research Interests
        <PawIcon className="w-7 h-7 text-primary paw-decoration" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {interests.map((item, idx) => (
          <div
            key={idx}
            className="reveal group flex items-center gap-3 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 cursor-default"
            data-reveal-delay={String(idx * 80)}
          >
            <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/15 flex items-center justify-center text-primary group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300">
              <item.icon size={20} />
            </div>
            <span className="text-sm font-medium leading-snug">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
