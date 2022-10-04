import React from 'react'

const Footer = ({ aboutRef, projectsRef }) => {
     const AboutScroll = (e) => {
          e.preventDefault();
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
     };
     const ProjectsScroll = (e) => {
          e.preventDefault();
          projectsRef.current.scrollIntoView({ behavior: "smooth" });
     };
     return (
          <>
               <footer className='bg-containerColor border-t-2 border-solid border-black border-opacity-10 '>
                    <div className="pt-4 pb-16 md:py-6">
                         <h1 className="text-titleColor text-center mb-2 text-h2">Vikash Upadhyay</h1>
                         <ul className="flex justify-center gap-6 mb-6">
                              <li>
                                   <a href="#first" className="text-titleColor hover:text-titleColorDark" onClick={AboutScroll}> About </a>
                              </li>
                              <li>
                                   <a href="#first" className="text-titleColor hover:text-titleColorDark" onClick={ProjectsScroll}> Projects </a>
                              </li>
                         </ul>
                         <div className="flex justify-center gap-5">
                              <a href="https://www.github.com/Vikashup2109" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark" target="_blank" rel="noreferrer">
                                   <i className="uil uil-github-alt"></i>
                              </a>
                              <a href="https://www.linkedin.com/in/Vikashup2109" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark" target="_blank" rel="noreferrer">
                                   <i className="uil uil-linkedin-alt"></i>
                              </a>
                              <a href="https://www.instagram.com/_vikash_upadhyay" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark" target="_blank" rel="noreferrer">
                                   <i className="uil uil-instagram"></i>
                              </a>
                              <a href="https://twitter.com/Vikas19Upadhyay" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark" target="_blank" rel="noreferrer">
                                   <i className="uil uil-twitter-alt"></i>
                              </a>
                         </div>
                         <div className="block mt-8 text-titleColor text-center text-smaller"> Copyright &#169; 2022 Vikash Upadhyay. All rights Reserved. </div>
                    </div>
               </footer>
          </>
     )
}

export default Footer