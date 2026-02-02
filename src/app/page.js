import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ClientScript from "../components/ClientScript";
import CursorEffect from "../components/CursorEffect";

export default function Home() {
  return (
    <>
      <CursorEffect />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <ClientScript />
    </>
  );
}
