import React, { forwardRef } from 'react'

const Expertise = forwardRef((props, ref) => {

     let frontend_skills_set = {
          1: {
               skill_name: 'JavaScript',
               skill_level: 'Intermediate'
          },
          2: {
               skill_name: 'CSS',
               skill_level: 'Advance'
          },
          3: {
               skill_name: 'HTML',
               skill_level: 'Intermediate'
          },
          4: {
               skill_name: 'React',
               skill_level: 'Advance'
          },
          5: {
               skill_name: 'TailwindCSS',
               skill_level: 'Advance'

          },
          6: {
               skill_name: 'NextJS',
               skill_level: 'Intermediate'
          },
          7: {
               skill_name: 'Git',
               skill_level: 'Intermediate'
          },
          8: {
               skill_name: 'Zustand',
               skill_level: 'Basic'
          },
          9: {
               skill_name: 'Sanity',
               skill_level: 'Intermediate'
          },
          10: {
               skill_name: 'Vercel',
               skill_level: 'Intermediate'
          },
     }
     let design_skills_set = {
          1: {
               skill_name: 'Figma',
               skill_level: 'Advance'
          },
          2: {
               skill_name: 'UX',
               skill_level: 'Advance'
          },
          3: {
               skill_name: 'UI',
               skill_level: 'Advance'
          },
          4: {
               skill_name: 'Web',
               skill_level: 'Advance'
          },
          5: {
               skill_name: 'Webflow',
               skill_level: 'Intermediate'
          },
          6: {
               skill_name: 'Logos',
               skill_level: 'Intermediate'
          },
          7: {
               skill_name: 'PhotoShop',
               skill_level: 'Basic'
          },
     }

     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20 bg-bodyColor dark:bg-bodyColorDarkMode' ref={ref}>
                    <div className="px-4 max-w-6xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2 text-titleColor dark:text-titleColorDarkMode">My Expertise Room</h2>
                         <span className=" text-center block text-sm mb-12 text-titleColor dark:text-titleColorDarkMode">What I Technically Offer</span>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                              <div className="justify-center mx-auto ">
                                   <div className="bg-containerColor dark:bg-containerColorDarkMode border border-solid border-black border-opacity-10 rounded-3xl  py-8 px-8 sm:px-16">
                                        <div className='flex items-center gap-6'>
                                             <i className="uil uil-brackets-curly block text-h1 text-titleColor dark:text-titleColorDarkMode mb-4"></i>
                                             <h3 className="text-normal font-medium text-center mb-6 text-titleColor dark:text-titleColorDarkMode">Frontend Development Stack</h3>
                                        </div>


                                        <div className='items-center pb-8 '>
                                             <p className="text-small sm:text-normal leading-6 sm:leading-7 text-titleColor dark:text-titleColorDarkMode">
                                                  I specialize in applications written in React and NextJS. Recently I became also a huge fan of one-way data flow.
                                                  <br />I have launched many single page applications in React or NextJS
                                             </p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-6 justify-center">
                                             {
                                                  Object.values(frontend_skills_set).map((skill) => {
                                                       return (
                                                            <div className="skills_data flex flex-col gap-1 md:gap-1 mx-auto">
                                                                 <div className='flex items-center gap-2'>
                                                                      <i className="uil uil-check-circle font-bold text-lg text-titleColor dark:text-titleColorDarkMode"></i>
                                                                      <h3 className="skill_name leading-4 font-medium text-small text-titleColor dark:text-titleColorDarkMode">{skill.skill_name}</h3>
                                                                 </div>
                                                                 <span className="skill_level text-tiny md:text-tiny text-titleColor dark:text-titleColorDarkMode text-center">{skill.skill_level}</span>
                                                            </div>
                                                       )
                                                  })
                                             }

                                             <div className="skills_data flex flex-col gap-1 md:gap-2 mx-auto text-left">
                                                  <div className='flex items-center gap-2'>
                                                       <i className="uil uil-check-circle font-bold text-base text-titleColor dark:text-titleColorDarkMode"></i>
                                                       <h3 className="skill_name leading-4 font-medium text-smaller text-titleColor dark:text-titleColorDarkMode">Beer &#127867;</h3>
                                                  </div>
                                                  <span className="skill_level text-tiny md:text-tiny text-titleColor dark:text-titleColorDarkMode text-center">Advance</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="justify-center mx-auto ">
                                   <div className="bg-containerColor dark:bg-containerColorDarkMode border border-solid border-black border-opacity-10 rounded-3xl  py-8 px-8 sm:px-16">
                                        <div className='flex items-center gap-6'>
                                             <i className="uil uil-transaction services_icon block text-h1 text-titleColor dark:text-titleColorDarkMode mb-4"></i>
                                             <h3 className="text-normal font-medium text-center mb-6 text-titleColor dark:text-titleColorDarkMode">Designer</h3>
                                        </div>


                                        <div className='flex items-center pb-8 '>
                                             <p className="text-small sm:text-normal leading-6 sm:leading-7 text-titleColor dark:text-titleColorDarkMode">
                                                  I value simple content structure, clean design patterns, and thoughtful interactions.
                                                  <br />Mission: To create unique, digital experiences for brands who deserves to make an impact.
                                                  <br />My collective experience ranges from design, digital media, digital marketing, to brand strategy and development.
                                             </p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 py-6">

                                             {
                                                  Object.values(design_skills_set).map((design_skill) => {
                                                       return (
                                                            <div className="skills_data flex flex-col gap-1 md:gap-1 mx-auto text-left">
                                                                 <div className='flex items-center gap-2'>
                                                                      <i className="uil uil-check-circle font-bold text-base text-titleColor dark:text-titleColorDarkMode"></i>
                                                                      <h3 className="skill_name leading-4 font-medium text-small text-titleColor dark:text-titleColorDarkMode">{design_skill.skill_name}</h3>
                                                                 </div>
                                                                 <span className="skill_level text-tiny md:text-tiny text-titleColor dark:text-titleColorDarkMode text-center">{design_skill.skill_level}</span>
                                                            </div>
                                                       )
                                                  })
                                             }
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Expertise