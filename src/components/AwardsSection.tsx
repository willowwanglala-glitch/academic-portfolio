import { Award, Trophy, BookOpen, Code2, Users } from "lucide-react";

const PawIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="8" cy="7" rx="2.5" ry="3" />
    <ellipse cx="16" cy="7" rx="2.5" ry="3" />
    <ellipse cx="5" cy="13" rx="2" ry="2.5" />
    <ellipse cx="19" cy="13" rx="2" ry="2.5" />
    <path d="M12 20c-3 0-5-2-5-4s2-3 5-3 5 1 5 3-2 4-5 4z" />
  </svg>
);

const awards = [
  { name: 'iCAN International Contest of Innovation: Advanced from campus round; regional results pending', year: '2026' },
  { name: 'Second Prize (Provincial), "Telling China\'s Stories Well in Foreign Languages" Short Video Competition, Guangdong Province', year: '2025' },
  { name: 'Bronze Award (Provincial), FLTRP · iTest Cup Short Video Competition, Guangdong Province', year: '2024' },
  { name: 'Bronze Award (University), FLTRP · iTest Cup Translation Competition (Written Translation)', year: '2025' },
  { name: 'Merit Award (University), National College Students New Liberal Arts Practice and Innovation Competition', year: '2024' },
  { name: 'First-Class Academic Excellence Scholarship, Guangdong University of Technology', year: '2023–2024' },
  { name: 'Second Prize (University), FLTRP · iTest Cup Reading Competition (English Group)', year: '2023' },
  { name: 'Outstanding Team Leader, "Winter Break Alumni Outreach Program" for Admissions Promotion', year: '2025' },
  { name: 'Gold Award (University), FLTRP · iTest Cup Short Video Competition', year: '2024' },
  { name: 'Merit Award (School), National College Students New Liberal Arts Practice and Innovation Competition', year: '2024' },
  { name: 'Outstanding Orientation Ambassador, Guangdong University of Technology', year: '2023–2024' },
  { name: 'Advanced Individual in Communist Youth League Work, Guangdong University of Technology', year: '2023–2024' },
  { name: 'Outstanding Communist Youth League Member, Guangdong University of Technology', year: '2023' },
];

const certifications = [
  { category: 'English', items: ['CET-4 (569)', 'CET-6 (523)', 'TEM-4 (Good)', 'IELTS 6.5 (6)'] },
  { category: 'Mandarin Chinese', items: ['Level 2-B'] },
];

const skills = [
  { category: 'Programming', items: ['C', 'Python'] },
  { category: 'Tools', items: ['AntConc', 'WordSmith', 'SPSS', 'CiteSpace', 'Coze', 'VOSviewer'] },
  { category: 'Design', items: ['123 Editor', 'Mugeda', 'Adobe Photoshop', 'PPT', 'Canva', 'Powerpoint', 'Media (11 articles and 3 videos, official WeChat account "GDUT Youth Hub", 30k+ reach)'] },
  { category: 'Languages', items: ['Mandarin Chinese (Native)', 'Hakka (Native)', 'English (Proficient)', 'Spanish (Intermediate)'] },
];

const additionalInfo = [
  { category: 'Leadership', details: 'Class academic committee member; Winter admissions outreach team leader' },
  { category: 'Entrepreneurship', details: 'Co-founded "Waimai Go" studio at GDUT Innovation Hub (2024)' },
  { category: 'Public Service', details: 'Administrative assistant, Country Education Bureau (2025)' },
  { category: 'Design', details: '"GDUT Youth Hub" member' },
  { category: 'Professional Training', details: "Completed YGYM Group's intensive program on quantitative research methods (SPSS/JASP) and translation industry practices (Mar 2026)" },
];

export default function AwardsSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif text-center mb-12 reveal">Awards & Achievements</h2>

      {/* Awards */}
      <div className="mb-12 reveal" data-reveal-delay="100">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            <Trophy className="w-6 h-6 text-primary" />
            <PawIcon className="w-4 h-4 text-primary/60 -ml-1 mt-1" />
          </div>
          <h3 className="text-xl font-semibold">Awards & Honors</h3>
        </div>
        <ul className="space-y-3 ml-9">
          {awards.map((award, idx) => (
            <li key={idx} className="flex justify-between items-start gap-4">
              <span className="text-sm leading-relaxed">{award.name}</span>
              <span className="text-xs font-medium bg-primary/15 text-primary-foreground px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                {award.year}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Certifications & Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="reveal" data-reveal-delay="200">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <BookOpen className="w-6 h-6 text-primary" />
              <PawIcon className="w-4 h-4 text-primary/60 -ml-1 mt-1" />
            </div>
            <h3 className="text-xl font-semibold">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx}>
                <p className="font-medium text-sm mb-1">{cert.category}</p>
                <p className="text-sm text-muted-foreground">{cert.items.join('; ')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" data-reveal-delay="300">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <Code2 className="w-6 h-6 text-primary" />
              <PawIcon className="w-4 h-4 text-primary/60 -ml-1 mt-1" />
            </div>
            <h3 className="text-xl font-semibold">Skills</h3>
          </div>
          <div className="space-y-3">
            {skills.map((skill, idx) => (
              <div key={idx}>
                <p className="font-medium text-sm mb-1">{skill.category}</p>
                <p className="text-sm text-muted-foreground">{skill.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="reveal" data-reveal-delay="400">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-6 h-6 text-primary" />
            <PawIcon className="w-4 h-4 text-primary/60 -ml-1 mt-1" />
          </div>
          <h3 className="text-xl font-semibold">Additional Information</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {additionalInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-4 border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-md"
            >
              <p className="font-medium text-sm mb-1">{info.category}</p>
              <p className="text-sm text-muted-foreground">{info.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
