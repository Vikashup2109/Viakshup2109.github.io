import React, { forwardRef } from 'react'

const Skills = forwardRef((props, ref) => {

     let skills_set = {
          1: {
               skill_name: 'HTML',
               skill_level: 'Intermediate'
          },
          2: {
               skill_name: 'CSS',
               skill_level: 'Intermediate'
          },
          3: {
               skill_name: 'JavaScript',
               skill_level: 'Intermediate'
          },
          4: {
               skill_name: 'React',
               skill_level: 'Intermediate'
          },
          5: {
               skill_name: 'NextJS',
               skill_level: 'Intermediate'
          },
          6: {
               skill_name: 'TailwindCSS',
               skill_level: 'Intermediate'
          },
          7: {
               skill_name: 'Git',
               skill_level: 'Intermediate'
          },
          8: {
               skill_name: 'Zustand',
               skill_level: 'Intermediate'
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

     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20' ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2">Skills</h2>
                         <span className=" text-center block text-sm mb-12">My Technical Level</span>
                         <div className="justify-center mx-auto lg:w-10/12">
                              <div className="bg-containerColor border border-solid border-black border-opacity-10 rounded-3xl  py-8 px-8 sm:px-16">
                                   <h3 className="text-normal font-medium text-center mb-6">Frontend Development Stack</h3>
                                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 py-6">

                                        {
                                             Object.values(skills_set).map((skill) => {
                                                  return (
                                                       <div className="skills_data flex gap-1 md:gap-2 mx-auto text-left">
                                                            <i class="uil uil-check-circle font-bold text-base text-titleColor"></i>
                                                            <div className=''>
                                                                 <h3 className="skill_name leading-4 font-medium text-normal">{skill.skill_name}</h3>
                                                                 <span className="skill_level text-tiny md:text-smaller">{skill.skill_level}</span>
                                                            </div>
                                                       </div>
                                                  )
                                             })
                                        }
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Skills