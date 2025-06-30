import React from 'react'
import AboutImage from '../assets/about_img.jpg'

// Import your logos or use URLs
import HtmlLogo from '../assets/HTML_logo.jpg'
import CssLogo from '../assets/CSS_logo.png'
import JsLogo from '../assets/JS_logo.png'
import ReactLogo from '../assets/ReactJS_logo.png'
import TailwindLogo from '../assets/Tailwindcss_logo.png'

import CLogo from '../assets/C_logo.jpg'
import CppLogo from '../assets/Cpp_logo.jpg'
import JavaLogo from '../assets/Java_logo.png'
import PythonLogo from '../assets/Python_logo.jpg'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'> About Me </h2>

        {/* Flex container for image + text */}
        <div className='flex flex-col md:flex-row md:items-start md:space-x-12 mb-12'>
          <img src={AboutImage} alt="" className='w-75 h-95 rounded object-cover mb-8 md:mb-0'/>
          <div className='flex-1'>
            <p className='text-lg mt-15 text-justify'>
              Hi, I'm Arka Gain from Kolkata, currently pursuing B.Tech at Narula Institute of Technology with a CGPA of 8.74. 
              I'm passionate about coding and have experience in C, C++, Python, Java, and web technologies like HTML, CSS, JavaScript, and ReactJS. 
              I've built projects including an Amazon clone and web-based games. I'm also active in competitive programming, with 3-star ratings in Python and C++ on HackerRank and a 2-star profile on CodeChef. 
              I thrive in creative, open environments, constantly seeking to learn, innovate, and grow.
            </p>
          </div>
        </div>

        {/* Skills Tray */}
        <div className='bg-gray-700 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold mb-4 text-center'> Accuired Skills </h2>

          {/* Flex row for both sections side by side */}
          <div className='flex flex-col md:flex-row md:justify-between gap-8'>

            {/* Web Development */}
            <div className='flex-1'>
              <h4 className='text-2xl font-semibold mb-4'>
                
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#be93c5] to-[#7bc6cc]'>Web Development
                    </span>
                </h4>
              <div className='flex flex-wrap gap-6'>
                {[
                  { img: HtmlLogo, alt: 'HTML' },
                  { img: CssLogo, alt: 'CSS' },
                  { img: JsLogo, alt: 'JavaScript' },
                  { img: ReactLogo, alt: 'ReactJS' },
                  { img: TailwindLogo, alt: 'TailwindCSS' },
                ].map((tech, index) => (
                  <div key={index} className='border border-gray-600 rounded-full p-3 w-18 h-15 flex items-center justify-center bg-gray-900  hover:scale-105'>
                    <img src={tech.img} alt={tech.alt} className='w-10 h-10' />
                  </div>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className='flex-1'>
              <h4 className='text-2xl font-semibold mb-4'>
                
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#be93c5] to-[#7bc6cc]'> Programming Languages
                    </span>
                </h4>
              <div className='flex flex-wrap gap-6'>
                {[ 
                  { img: CLogo, alt: 'C' },
                  { img: CppLogo, alt: 'C++' },
                  { img: JavaLogo, alt: 'Java' },
                  { img: PythonLogo, alt: 'Python' }
                ].map((lang, index) => (
                  <div key={index} className='border border-gray-600 rounded-full p-1 w-18 h-15 flex items-center justify-center bg-gray-900 hover:scale-105'>
                    <img src={lang.img} alt={lang.alt} className='w-10 h-10' />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About
