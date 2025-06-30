import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contacts'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'> Contact Me </h2>
    
            
            <div className='flex flex-col md:flex-row md:items-start md:space-x-12 mb-12'>
             
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb4'> Let's Talk</h3>
                <p className=''>I am open to work. Feel free to reach out to me.</p>
                <div className='mb-4 mt-8'>
                    <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                    <a href="mailto:gainarka@gmail.com" className='hover:underline hover:text-blue-500'>gainarka@gmail.com</a>
                </div>
                <div className='mb-4'>
                    <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                    <span>+91-9836640048</span>
                </div>
                <div className="flex gap-4 text-2xl">
                  <a href="https://github.com/Arkagain18" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://linkedin.com/in/arka-gain-150853254" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://instagram.com/gain_arka.18" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="https://twitter.com/arka_gain18" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </div>
                
              </div>
              <div className='flex-1 w-full'> 
                <form action="https://formspree.io/f/mrbkyggl" method="POST" className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Your Name</label>
                    <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                      placeholder="Enter your Name"/>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                      placeholder="Enter your Email" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <textarea id="message" name="message" required className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                    rows="5" placeholder="Enter your Message"></textarea>
                  </div>

                  <button type="submit"
                  className="cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                    Submit
                  </button>
                </form>

              </div>
            </div>
            </div>
        </div>
  )
}

export default Contact
