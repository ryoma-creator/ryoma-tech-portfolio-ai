import { HeroSection } from "@/components/HeroSection";
import { StatsRow } from "@/components/StatsRow";
import { ChatSection } from "@/components/ChatSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <main className="w-full relative z-10" style={{ paddingTop: "64px" }}>
      <HeroSection />
      <StatsRow />
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6" style={{ background: "#050505", position: "relative", zIndex: 10 }}>
        <ChatSection />
        <ProjectsSection />
        <AchievementsSection />
      </div>
      <CTASection />
    </main>
  );
}
