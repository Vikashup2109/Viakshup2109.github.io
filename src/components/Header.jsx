import React, { useState } from 'react'

const Header = ({ aboutRef, expertiseRef, homeRef, thoughtsRef, projectsRef, contactRef }) => {
     const [toggle, setToggle] = useState(false);

     const HomeScroll = (e) => {
          e.preventDefault();
          homeRef.current.scrollIntoView({ behavior: "smooth" })
     }
     const AboutScroll = (e) => {
          e.preventDefault();
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ExpertiseScroll = (e) => {
          e.preventDefault();
          expertiseRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ThoughtsScroll = (e) => {
          e.preventDefault();
          thoughtsRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ProjectsScroll = (e) => {
          e.preventDefault();
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ContactScroll = (e) => {
          e.preventDefault();
          contactRef.current.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <>
               <header className='w-full h-10 md:h-16 fixed bottom-0 md:top-0 md:left-0 bg-containerColor shadow-md z-50'>
                    <nav className='px-4 xsm:px-6 max-w-6xl h-10 md:h-16 mx-auto flex justify-between items-center gap-x-4'>
                         <a href="./" className='text-titleColor font-medium text-h3'>Vikash</a>
                         <div className={toggle ? 'nav_menu show_menu' : 'nav_menu'}>
                              <ul className='grid grid-cols-3 gap-x-0 gap-8 md:flex md:gap-x-8 items-center' id='ul'>
                                   <li className='border-t-4 py-0.5 border-titleColor rounded-md '>
                                        <a href="#home" className='btn active flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark' onClick={HomeScroll}>
                                             <i class="uil uil-estate block text-xl md:hidden"></i> Home
                                        </a>
                                   </li>
                                   <li className=''>
                                        <a href="#about" className='btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark' onClick={AboutScroll}>
                                             <i class="uil uil-user block text-xl md:hidden"></i> About
                                        </a>
                                   </li>
                                   <li className=''>
                                        <a href="#skills" className='btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark' onClick={ExpertiseScroll}>
                                             <i class="uil uil-file-alt nav_icon block text-xl md:hidden"></i> Expertise
                                        </a>
                                   </li>

                                   <li className=''>
                                        <a href="#portfolio" className='btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark' onClick={ProjectsScroll}>
                                             <i class="uil uil-scenery block text-xl md:hidden"></i> Portfolio
                                        </a>
                                   </li>
                                   <li className=''>
                                        <a href="#services" className='btn flex flex-col items-center text-small font-medium text-titleColor hover:text-titleColorDark' onClick={ThoughtsScroll}>
                                             <i class="uil uil-briefcase-alt block text-xl md:hidden"></i> Thoughts
                                        </a>
                                   </li>
                                   <li className=''>
                                        <a href="#contact" className='inline-block bg-titleColor text-containerColor p-2 rounded-lg font-bold hover:bg-titleColorDark flex flex-col items-center text-small' onClick={ContactScroll}>
                                             <i class="uil uil-message nav_icon block text-xl md:hidden"></i> Connect
                                        </a>
                                   </li>
                              </ul>
                              <i class="uil uil-times absolute right-5 bottom-2 text-2xl hover:text-titleColorDark block md:hidden" onClick={() => setToggle(!toggle)}></i>
                         </div>
                         <div className="md:hidden text-lg pointer text-titleColor font-medium block" onClick={() => setToggle(!toggle)}>
                              <i class="uil uil-apps"></i>
                         </div>
                    </nav>
               </header>
          </>
     )
}

export default Header