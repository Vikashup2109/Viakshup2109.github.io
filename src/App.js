import { useRef } from "react";
import About from './components/About';
import Header from './components/Header'
import Home from './components/Home';
import Skills from './components/Skills';
import Services from './components/Services'
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
     const HomeRef = useRef(null);
     const AboutRef = useRef(null);
     const SkillRef = useRef(null);
     const ServicesRef = useRef(null);
     const ProjectsRef = useRef(null);
     const ContactRef = useRef(null);
     return (
          <>
               <Header homeRef={HomeRef} aboutRef={AboutRef} skillRef={SkillRef} servicesRef={ServicesRef} projectsRef={ProjectsRef} contactRef={ContactRef} />
               <main className='main'>
                    <Home aboutRef={AboutRef} ref={HomeRef} contactRef={ContactRef} />
                    <About ref={AboutRef} />
                    <Skills ref={SkillRef} />
                    <Services ref={ServicesRef} />
                    <Projects ref={ProjectsRef} />
                    <Contact ref={ContactRef} />
               </main>
               <Footer aboutRef={AboutRef} projectsRef={ProjectsRef} />
               <ScrollUp homeRef={HomeRef} />
          </>
     );
}

export default App;
