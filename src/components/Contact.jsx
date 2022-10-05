import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
     return (
          <>
               <section className='w-full pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20' ref={ref}>
                    <div className="px-4 max-w-full xsm:max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2">Contact Me</h2>
                         <span className="text-center block text-sm mb-4">Get in Touch</span>
                         <span className="text-center block text-normal sm:text-h3 mb-12 text-titleColor p-4 bg-containerColor w-fit mx-auto
                                             border-2 border-black border-opacity-10 rounded-xl text-center"># I am available for hire and open to any ideas of cooperation.</span>

                         <div className="flex flex-col md:flex-row justify-center sm:gap-4 lg:gap-24 pb-12 mx-auto">
                              <div className="w-full md:w-2/6 lg:w-1/2">
                                   <h3 className="text-center text-h3 font-medium mb-6">Talk to me</h3>
                                   <div className="mx-auto grid grid-cols-1 gap-6 justify-center pb-12">

                                        <div className="w-56 xsm:w-80 sm:w-96 md:w-36 lg:w-96 mx-auto bg-containerColor border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 pb-4">
                                             <i className="uil uil-fast-mail text-h1 text-titleColor"></i>
                                             <h3 className="title text-small font-bold">Email</h3>
                                             <span className="data text-small block sm:hidden lg:block mb-3">vikash.up2109@gmail.com</span>
                                             <a href="mailto:vikash.up2109@gmail.com"
                                                  className="text-titleColor text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Write Me
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>

                                        <div className="w-56 xsm:w-80 sm:w-40 lg:w-96 mx-auto bg-containerColor border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 py-4">
                                             <i className="uil uil-linkedin-alt text-h2 text-titleColor"></i>
                                             <h3 className="text-small font-bold mt-4">LinkedIn</h3>
                                             <span className="text-small block sm:hidden lg:block mb-3">@Vikashup2109</span>
                                             <a href="https://linkedin.com/in/vikashup2109"
                                                  className="text-titleColor text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Connect
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>

                                        <div className="w-56 xsm:w-80 sm:w-40 lg:w-96 mx-auto bg-containerColor border border-black border-opacity-10 rounded-xl text-center px-4 sm:px-4 py-4">
                                             <i className="uil uil-whatsapp text-h2 text-titleColor"></i>
                                             <h3 className="text-small font-bold mt-2">Whatsapp</h3>
                                             <span className="text-small block sm:hidden lg:block mb-3">+91 6377874808</span>
                                             <a href={`https://api.whatsapp.com/send?phone=916377874808&text=Hey`}
                                                  className="text-titleColor text-small inline-flex items-center justify center gap-1"
                                                  target="_blank" rel="noreferrer"
                                             > Write Me
                                                  <i className="uil uil-arrow-right text-normal"></i>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="w-full md:w-4/6 lg:w-1/2">
                                   <h3 className="text-center text-h3 font-medium mb-6">Write me your project</h3>
                                   <form action="" className="w-60 xsm:w-80 md:w-96 mx-auto">

                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor">Name</label>
                                             <input
                                                  type="text"
                                                  name='name'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid border-black border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Name'
                                             />
                                        </div>
                                        <div className="relative mb-8 h-16">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor">Email</label>
                                             <input
                                                  type="email"
                                                  name='email'
                                                  className='top-0 left-0 w-full h-full border-2 border-solid border-black border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Insert your Email'
                                             />
                                        </div>
                                        <div className="relative mb-8">
                                             <label htmlFor="" className="absolute -top-3 left-5 text-smaller p-1 bg-bodyColor">Project</label>
                                             <textarea name="project" cols="30" rows="10"
                                                  className='resize-none top-0 left-0 w-full h-full border-2 border-solid border-black border-opacity-30 bg-inherit text-textColor outline-0 rounded-xl p-6'
                                                  placeholder='Write your project'
                                             ></textarea>
                                        </div>
                                        <button className="button button--flex space-x-2 my-4 text-containerColor">
                                             <span>Send Message</span>
                                             <i className="uil uil-location-arrow"></i>
                                        </button>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
})

export default Contact