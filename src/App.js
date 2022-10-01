import About from './components/About';
import Header from './components/Header'
import Home from './components/Home';
import { useRef } from "react";
import Skills from './components/Skills';
import Services from './components/Services'
import Projects from './components/Projects';
import Contact from './components/Contact';

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
                    <Home resultRef={AboutRef} ref={HomeRef} />
                    <About ref={AboutRef} />
                    <Skills ref={SkillRef} />
                    <Services ref={ServicesRef} />
                    <Projects ref={ProjectsRef} />
                    <Contact ref={ContactRef} />
               </main>
          </>
     );
}

export default App;
