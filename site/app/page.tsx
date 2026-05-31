import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  );
}
