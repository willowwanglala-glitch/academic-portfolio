import { GraduationCap, Award } from "lucide-react";

const educationData = {
  institution: "Guangdong University of Technology (GDUT)",
  location: "Guangzhou, China",
  degree: "Bachelor of Arts in English",
  program: 'First Cohort, "English + AI" Innovation Program',
  minor: "Computer Science",
  period: "09/2023 – 07/2027 (Expected)",
  gpaMajor: "87.4/100",
  gpaOverall: "86.6/100",
  coreModules: [
    { name: "Natural Language Processing", score: 90 },
    { name: "Machine Learning", score: 90 },
    { name: "Algorithm Design & Analysis", score: 96 },
    { name: "Artificial Intelligence", score: 100 },
    { name: "Corpus Linguistics", score: 91 },
    { name: "Database Systems", score: 92 },
    { name: "Big Data and Visualization", score: 92 },
    { name: "Computer Networks", score: 93 },
    { name: "Digital Media Technology", score: 95 },
    { name: "Database Systems Practicum", score: 95 },
  ],
};

const PawIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="17" rx="4" ry="3.5" />
    <circle cx="7" cy="11" r="2.5" />
    <circle cx="17" cy="11" r="2.5" />
    <circle cx="9.5" cy="7" r="2" />
    <circle cx="14.5" cy="7" r="2" />
  </svg>
);

export default function EducationSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-card relative overflow-hidden">
      {/* 小狗爪印装饰 */}
      <svg className="absolute top-8 right-12 w-16 h-16 paw-decoration opacity-20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 3C6.9 5 6 5.9 6 7s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 11c-1.1 0-2 .9-2 2v3c0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5v-3c0-1.1-.9-2-2-2H6z"/>
      </svg>
      <svg className="absolute bottom-12 left-8 w-12 h-12 paw-decoration opacity-15" style={{animationDelay: '1s'}} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 3C6.9 5 6 5.9 6 7s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 11c-1.1 0-2 .9-2 2v3c0 2.8 2.2 5 5 5h6c2.8 0 5-2.2 5-5v-3c0-1.1-.9-2-2-2H6z"/>
      </svg>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-center reveal">
          Education
        </h2>

        <div className="relative reveal">
          {/* 暖黄色虚线时间线 */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-primary/40" />

          {/* 同步移动的小狗足迹 */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 flex flex-col items-center gap-16 pointer-events-none">
            <PawIcon className="w-4 h-4 text-primary/40 reveal-up" data-reveal-delay="0" />
            <PawIcon className="w-4 h-4 text-primary/35 reveal-up" data-reveal-delay="200" />
            <PawIcon className="w-4 h-4 text-primary/30 reveal-up" data-reveal-delay="400" />
            <PawIcon className="w-4 h-4 text-primary/25 reveal-up" data-reveal-delay="600" />
          </div>

          {/* 时间线圆点 - 暖黄色 */}
          <div className="absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm" />

          <div className="ml-12 md:ml-20 space-y-6">
            {/* Institution with dog decoration */}
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-primary mb-2 flex items-center gap-2">
                  {educationData.institution}
                  <span className="text-2xl" role="img" aria-label="dog"></span>
                </h3>
                <p className="text-muted-foreground text-sm mb-1">
                  {educationData.location}
                </p>
              </div>
            </div>

            {/* Degree info */}
            <div className="space-y-2">
              <p className="font-medium">
                {educationData.degree}
              </p>
              <p className="text-sm text-muted-foreground italic">
                {educationData.program}
              </p>
              <p className="text-sm">
                Minor: {educationData.minor}
              </p>
              <p className="text-sm text-muted-foreground">
                {educationData.period}
              </p>
            </div>

            {/* GPA badges - 暖黄色背景 */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-2 bg-primary/15 px-4 py-2 rounded-lg border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">
                  Major GPA: {educationData.gpaMajor}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-primary/15 px-4 py-2 rounded-lg border border-primary/20">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">
                  Overall GPA: {educationData.gpaOverall}
                </span>
              </div>
            </div>

            {/* Core modules grid */}
            <div className="mt-6">
              <h4 className="text-lg font-serif mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Core Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {educationData.coreModules.map((module) => (
                  <div
                    key={module.name}
                    className="bg-secondary/50 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <p className="text-sm font-medium mb-1">{module.name}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all"
                          style={{ width: `${module.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-semibold text-primary">
                        {module.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
