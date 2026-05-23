import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Works from "./components/Works";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Works />
      <Experience />
      <Skills />
      <Footer />
    </>
  );
}
