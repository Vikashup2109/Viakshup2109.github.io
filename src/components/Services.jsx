import React, { forwardRef } from 'react'

const Services = forwardRef((props, ref) => {
     return (
          <>
               <section className='pt-8 md:pt-20 lg:pt-20 pb-8 md:pb-12 lg:pb-20' ref={ref}>
                    <div className="px-4 max-w-5xl mx-auto">
                         <h2 className="text-4xl text-titleColor text-center pb-2">Services</h2>
                         <span className=" text-center block text-sm mb-12">What I Offer</span>

                         <div className="mx-auto flex flex-col md:flex-row gap-16 lg:gap-32 lg:p-6 py-6">
                              <div className="border border-solid border-black border-opacity-10 rounded-xl bg-containerColor px-4 sm:px-12 py-8">
                                   <div className='flex items-center gap-6'>
                                        <i class="uil uil-brackets-curly block text-big text-titleColor mb-4"></i>
                                        <h3 className="text-h3 mb-4 font-medium "> Front-End Developer</h3>
                                   </div>
                                   <div className='flex items-center pb-8'>
                                        <p className="">Have more than 3 years ecperience
                                             Have more than 3 years ecperienceHave more than 3 years ecperienceHave more than 3 years ecperience</p>
                                   </div>
                                   <div>
                                        <ul className="services_model-services flex flex-col gap-2">
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I develop the User Interface.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">Web Page Development.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I create UX element Interaction.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I position a company brand.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I develop User Experience.</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="border border-solid border-black border-opacity-10 rounded-xl bg-containerColor px-4 sm:px-12 py-8">
                                   <div className='flex items-center gap-6'>
                                        <i class="uil uil-transaction services_icon block text-big text-titleColor mb-4"></i>
                                        <h3 className="service_title text-h3 mb-4 font-medium "> UI/UX Designer</h3>
                                   </div>
                                   <div className='flex items-center pb-8'>
                                        <p className="services_model-description">Have more than 3 years ecperience
                                             Have more than 3 years ecperienceHave more than 3 years ecperienceHave more than 3 years ecperience</p>
                                   </div>
                                   <div>
                                        <ul className="services_model-services flex flex-col gap-2">
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I develop the User Interface.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">Web Page Development.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I create UX element Interaction.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I position a company brand.</p>
                                             </li>
                                             <li className="services_model-service flex gap-4">
                                                  <i className="uil uil-check-circle services_model-icon"></i>
                                                  <p className="services_model-info">I develop User Experience.</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>

                         </div>
                    </div>
               </section>
          </>
     )
})

export default Services