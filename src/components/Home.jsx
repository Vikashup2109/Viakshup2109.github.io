import React, { forwardRef } from 'react'
import Photo from '../assets/avatar.png';
import Resume from '../assets/VikashResume.pdf'



const Home = forwardRef((props, ref) => {

     const AboutScroll = (e) => {
          e.preventDefault();
          props.aboutRef.current.scrollIntoView({ behavior: "smooth" });
     };
     return (
          <>
               <section className=" w-full pt-8 md:pt-20 lg:pt-12 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode" ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <div className="flex flex-col lg:flex-row justify-center w-full pt-12 lg:pt-20 items-center mx-auto">

                              {/* Social Media Section */}
                              <div className='flex items-center lg:w-1/2 gap-0 lg:gap-12'>

                                   <div className="w-8 sm:w-28 flex flex-col gap-8 w-18">
                                        <a href="https://www.github.com/Vikashup2109" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                             <i className="uil uil-github-alt"></i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/Vikashup2109" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                             <i className="uil uil-linkedin-alt"></i>
                                        </a>
                                        <a href="https://www.instagram.com/_vikash_upadhyay" className="text-xl md:text-2xl text-titleColor hover:text-titleColorDark dark:text-titleColorDarkMode dark:hover:text-titleColorDarkDarkMode" target="_blank" rel="noreferrer">
                                             <i className="uil uil-instagram"></i>
                                        </a>
                                   </div>

                                   {/* Profile Image Section */}
                                   <div className="profile_image-section">
                                        <img src={Photo} alt="Vikash DP" className='profile-image h-64 sm:h-72 shadow-3xl mx-auto dark:shadow-white/20' />
                                   </div>
                              </div>


                              {/* Hero Section */}

                              <div className="lg:w-1/2 lg:pl-8 md:pl-20 lg:pl-24 mt-24">
                                   <div className="text-center lg:text-left">
                                        <h1 className="text-res-big sm:text-h2 mb-2 text-titleColor dark:text-titleColorDarkMode">Designer and Front-End Developer</h1>
                                        <h3 className="text-res-h3 sm:text-h3 lg:pl-10 font-normal mb-4 text-titleColor dark:text-titleColorDarkMode">Hey, I'm <strong>Vikash</strong>. Nice to meet you.</h3>
                                        <p className="max-w-md text-titleColor dark:text-titleColorDarkMode">I'm a creative designer and developer based in India. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                                        </p>
                                        <a download='Vikash_Resume.pdf' href={Resume} className="button button--flex bg-titleColor dark:bg-titleColorDarkMode space-x-2 my-10 text-containerColor dark:text-containerColorDarkMode">
                                             <span>Get Resume</span>
                                             <i className="uil uil-file-download text-xl"></i>
                                        </a>
                                   </div>
                              </div>
                         </div>
                         <div className="hidden lg:block text-right mt-16">
                              <a href="#about" className="button--flex  text-titleColor dark:text-titleColorDarkMode hover:text-titleColorDark" onClick={AboutScroll}>
                                   <i className="uil uil-mouse-alt text-3xl md:text-4xl"></i>
                                   <span className="text-lg font-medium mr-1 ml-0.5">Scroll Down</span>
                                   <i className="uil uil-arrow-down text-lg md:text-xl"></i>
                              </a>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Home