import { HeroSection } from "@/components/HeroSection";
import { IntroVideoSection } from "@/components/IntroVideoSection";
import { ChatSection } from "@/components/ChatSection";
import { ProjectsSection } from "@/components/ProjectsSection";

// ポートフォリオのメインページ
export default function Home() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <HeroSection />
      <IntroVideoSection />
      <ChatSection />
      <ProjectsSection />
    </main>
  );
}
