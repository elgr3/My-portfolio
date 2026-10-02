import { Providers } from "@/components/Providers";
import { Background } from "@/components/Background";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { CaseStudy } from "@/components/CaseStudy";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <Providers>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Certifications />
        <About />
        <CaseStudy />
        <Education />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </Providers>
  );
}
