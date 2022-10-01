import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20' ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2">Contact Me</h2>
                         <span className=" text-center block text-sm mb-12">Get in Touch</span>

                         <div className="contact_container flex">
                              <div className="contact_content">
                                   <h3 className="contact_title">Talk to me</h3>

                              </div>
                              <div className="contact_content">
                                   <h3 className="contact_title">Write me your project</h3>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Contact