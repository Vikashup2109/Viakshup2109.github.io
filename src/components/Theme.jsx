import React, { useState } from 'react'

const Theme = () => {
     const [themeToggle, setThemeToggle] = useState(true);

     const htmlelement = document.querySelector("html");

     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          htmlelement.classList.add('dark')
     } else {
          htmlelement.classList.remove('dark')
     }

     const handleClick = () => {
          setThemeToggle(!themeToggle);
          if (themeToggle) {
               localStorage.theme = 'light'
               console.log("first")
          } else {
               localStorage.theme = 'dark'
               console.log("dark")
          }
     }

     console.log(localStorage.theme);
     return (
          <>
               <div className='fixed top-20 right-4' onClick={handleClick}>
                    <label className="bg-titleColor dark:bg-[#FAF9F6] flex gap-1 rounded-full items-center p-1 relative cursor-pointer border-2">
                         <i className={localStorage.theme === 'light' ? "bx bxs-moon text-h3 text-bodyColor" : "hidden "}></i>
                         <i className={localStorage.theme === 'light' ? "hidden" : "bx bxs-sun text-h3 font-black text-yellow-600"}></i>
                    </label>
               </div>
          </>
     )
}

export default Theme