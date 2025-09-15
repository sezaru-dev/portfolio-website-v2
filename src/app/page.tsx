import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <div>
        <Header/>
        <main>
          <Hero/>
          <Skills/>
          <Projects/>
          <About/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    </>
  );
}
