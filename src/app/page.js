import Topbar from '@/components/Topbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Leadership from '@/components/Leadership';
import Awards from '@/components/Awards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <div className="rule wrap" aria-hidden="true"></div>
        <About />
        <div className="rule wrap" aria-hidden="true"></div>
        <Experience />
        <div className="rule wrap" aria-hidden="true"></div>
        <Skills />
        <div className="rule wrap" aria-hidden="true"></div>
        <Education />
        <div className="rule wrap" aria-hidden="true"></div>
        <Leadership />
        <div className="rule wrap" aria-hidden="true"></div>
        <Awards />
      </main>
      <Footer />
    </>
  );
}
