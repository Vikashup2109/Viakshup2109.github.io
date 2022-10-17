import React, { forwardRef } from 'react'
import Photo from '../assets/avatar2.png';
import Resume from '../assets/VikashResume.pdf'


const About = forwardRef((props, ref) => {
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20' ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2">About Me</h2>
                         <span className=" text-center block text-sm mb-12">My Introduction</span>
                         <div className="container mx-auto grid grid-cols-1 gap-10 lg:gap-6 lg:grid-cols-2">
                              <img src={Photo} alt="main_image" className='h-56 lg:h-[350px] rounded-3xl justify-self-center' />

                              {/* About Info */}
                              <div className="text-center lg:text-left px-auto lg:pr-6 w-full">
                                   <div className="justify-center grid grid-cols-2 xsm:grid-cols-3 gap-2 mb-8 w-11/12 mx-auto">
                                        <div className="bg-containerColor border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                                             <i className="uil uil-award-alt about_icon text-3xl text-titleColor mb-2"></i>
                                             <h3 className="text-small font-medium">Experience</h3>
                                             <span className="text-tiny">1+ Years</span>
                                        </div>
                                        <div className="bg-containerColor border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                                             <i className="uil uil-bag-alt about_icon text-3xl text-titleColor mb-2"></i>
                                             <h3 className="text-small font-medium">Completed</h3>
                                             <span className="text-tiny">10+ Projects</span>
                                        </div>
                                        <div className="bg-containerColor border border-solid border-black border-opacity-10 rounded-xl text-center py-2 px-1 sm:py-3 sm:px-2 lg:py-4 lg:px-5">
                                             <i className="uil uil-headphones-alt about_icon text-3xl text-titleColor mb-2"></i>
                                             <h3 className="text-small font-medium"> Support</h3>
                                             <span className="text-tiny">Online 24/7</span>
                                        </div>
                                   </div>
                                   {/* About Description */}

                                   <p className="p-0 sm:pr-20 sm:pl-20 lg:p-0 lg:pr-5 mb-8">
                                        <strong> Frontend Developer</strong>, I create successful websites that are fast, easy to use, and built with best practices.
                                        My journey of a freelance developer started a year ago and I have done many freelancing Projects right from scratch.
                                   </p>

                                   {/* About CV Button */}
                                   <a download='Vikash_Resume.pdf' href={Resume} className="button button--flex space-x-2 my-8 lg:my-10 text-containerColor">
                                        <span>Get Resume</span>
                                        <i className="uil uil-file-download text-xl"></i>
                                   </a>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}
)

export default About