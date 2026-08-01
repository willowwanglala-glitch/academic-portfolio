import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HeroSection";
import ResearchInterests from "@/components/ResearchInterests";
import EducationSection from "@/components/EducationSection";
import PublicationsSection from "@/components/PublicationsSection";
import ResearchExperienceSection from "@/components/ResearchExperienceSection";
import AcademicProjectsSection from "@/components/AcademicProjectsSection";
import AwardsSection from "@/components/AwardsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ResearchInterests />
      <EducationSection />
      <PublicationsSection />
      <ResearchExperienceSection />
      <AcademicProjectsSection />
      <AwardsSection />
    </div>
  );
}
