import { Mail, Phone, Github, MapPin } from "lucide-react";

const PROFILE_IMAGE_URL = "/profile.jpg";

const HEALING_BG_URL = "/hero-bg-web.jpg";
  "https://conversation.cdn.meoo.host/conversations/341593501286400000/image/2026-07-31/1785511939519-image.png?auth_key=8550f3f0c52733b40feac9f2c57d68ffa853614e794b2cdad857659ac54fdda2";

const fallingPaws = [
  { left: "8%", size: "w-5 h-5", delay: "0s", duration: "8s", opacity: "opacity-20" },
  { left: "18%", size: "w-4 h-4", delay: "1.2s", duration: "9s", opacity: "opacity-15" },
  { left: "28%", size: "w-6 h-6", delay: "0.5s", duration: "7.5s", opacity: "opacity-25" },
  { left: "38%", size: "w-3 h-3", delay: "2s", duration: "10s", opacity: "opacity-10" },
  { left: "48%", size: "w-5 h-5", delay: "0.8s", duration: "8.5s", opacity: "opacity-20" },
  { left: "58%", size: "w-4 h-4", delay: "1.5s", duration: "9.5s", opacity: "opacity-15" },
  { left: "68%", size: "w-6 h-6", delay: "0.3s", duration: "7s", opacity: "opacity-25" },
  { left: "78%", size: "w-3 h-3", delay: "2.5s", duration: "10.5s", opacity: "opacity-10" },
  { left: "88%", size: "w-5 h-5", delay: "1s", duration: "8s", opacity: "opacity-20" },
];

function PawPrint({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="17" rx="4" ry="3.5" />
      <circle cx="7" cy="11" r="2.5" />
      <circle cx="17" cy="11" r="2.5" />
      <circle cx="9.5" cy="7" r="2" />
      <circle cx="14.5" cy="7" r="2" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Healing illustration background - no overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HEALING_BG_URL})` }}
      />

      {/* Falling paw prints animation */}
      {fallingPaws.map((paw, i) => (
        <PawPrint
          key={i}
          className={`absolute -top-8 ${paw.size} text-primary ${paw.opacity} falling-paw`}
          style={{
            left: paw.left,
            animationDelay: paw.delay,
            animationDuration: paw.duration,
          }}
        />
      ))}

      {/* Dog emoji in top-right corner with float animation */}
      <div className="absolute top-6 right-6 text-4xl floating-dog" role="img" aria-label="dog">
        🐕
      </div>

      {/* Soft glow orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-accent/8 blur-3xl" />

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <div className="reveal reveal-left flex justify-center md:justify-start">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/20">
              <img
                src={PROFILE_IMAGE_URL}
                alt="Zhenfei Wang"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-primary/15 blur-xl" />
          </div>
        </div>

        {/* Content without card background - pure text with shadow for readability on illustration */}
        <div className="reveal reveal-right space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight drop-shadow-lg" style={{ textShadow: "0 2px 8px rgba(255,255,255,0.6)" }}>
            Zhenfei Wang
          </h1>
          <p className="text-lg md:text-xl font-semibold" style={{ color: "oklch(0.25 0.04 140)", textShadow: "0 1px 6px rgba(255,255,255,0.5)" }}>
            English + AI Innovation Program · GDUT
          </p>
          <p className="text-base max-w-md mx-auto md:mx-0 leading-relaxed" style={{ color: "oklch(0.3 0.04 140)", textShadow: "0 1px 4px rgba(255,255,255,0.4)" }}>
            Exploring the intersection of computational linguistics and cross-cultural communication through AI-driven research.
          </p>

          {/* Contact Info - left aligned with dark green text */}
          <div className="flex flex-wrap justify-start gap-4 pt-2">
            <ContactItem icon={<Phone size={16} />} text="+86 13794684194" colorClass="text-foreground" />
            <ContactItem icon={<Mail size={16} />} text="3223005898@mail2.gudt.edu.cn" colorClass="text-foreground" />
            <ContactItem icon={<Github size={16} />} text="github.com/willowwanglala-glitch" href="https://github.com/willowwanglala-glitch" colorClass="text-foreground" />
            <ContactItem icon={<MapPin size={16} />} text="Guangzhou, China" colorClass="text-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text, href, colorClass = "text-muted-foreground" }: { icon: React.ReactNode; text: string; href?: string; colorClass?: string }) {
  const content = (
    <span className={`flex items-center gap-2 text-sm ${colorClass} hover:text-primary transition-colors`}>
      <span className="text-primary">{icon}</span>
      {text}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex">
        {content}
      </a>
    );
  }

  return <span className="inline-flex">{content}</span>;
}
