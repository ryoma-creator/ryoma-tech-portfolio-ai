import { NavV2 } from "@/components/v2/NavV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { ProjectsV2 } from "@/components/v2/ProjectsV2";
import { HireMeV2 } from "@/components/v2/HireMeV2";
import { FooterV2 } from "@/components/v2/FooterV2";

export default function HomeV2() {
  return (
    <>
      <NavV2 />
      <main className="w-full">
        <HeroV2 />
        <ProjectsV2 />
        <HireMeV2 />
        <FooterV2 />
      </main>
    </>
  );
}
