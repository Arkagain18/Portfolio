import React from 'react'
import Ecommrce from '../assets/Ecommerce_img.png'
import Game1 from '../assets/Stone_Paper_img.png'
import Game2 from '../assets/Tic_img.png'
import Currency from '../assets/Currency_img.png'
import Razorpay from '../assets/Razorpay_img.png'


const projects = [
    {
        id: 1,
        name: "Amazon Website Clone",
        image: Ecommrce,
        description: "Basic Frontend Project using HTML, CSS",
        github: "https://github.com/Arkagain18/Amazon-Clone",
        Demo: "https://arkagain18.github.io/Amazon-Clone/"
    },
    {
        id: 2,
        name: "Stone Paper Scissor Game",
        image: Game1,
        description: "Basic Frontend Project",
        github: "https://github.com/Arkagain18/Stone-Paper-Scissor-game",
        Demo: "https://arkagain18.github.io/Stone-Paper-Scissor-game/"
    },
    {
        id: 3,
        name: "RazorPay Clone",
        image: Razorpay,
        description: "Frontend Project using ReactJS and TailwindCSS",
        github: "https://github.com/Arkagain18/Razorpay-clone",
        Demo: "https://arkagain18.github.io/Razorpay-clone/"
    },
    {
        id: 4,
        name: "Tic Tac Toe Game",
        image: Game2,
        description: "JavaScript Project",
        github: "https://github.com/Arkagain18/Tic-Tac-Toe-Game",
        Demo: "https://arkagain18.github.io/Tic-Tac-Toe-Game/"
    },
    {
        id: 5,
        name: "Currency Converter",
        image: Currency,
        description: "JavaScript Project",
        github: "https://github.com/Arkagain18/Currency-Converter",
        Demo: "https://arkagain18.github.io/Currency-Converter/"
    }
]

const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'> My Projects </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project => (
                <div key={project.id} className='cursor-pointer bg-gray-800 p-6 rpounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                    <h3 className='text-2xl foont-bold mb-2'>{project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.description}</p>
                    <div className='flex justify-between'>
                        <a href={project.github} target="_blank" className='inline-block bg-gradient-to-r from-[#be93c5] to-[#7bc6cc] text-white px-4 py-2 rounded full'> GitHub</a>
                        <a href={project.Demo} target="_blank" className='inline-block bg-gradient-to-r from-[#be93c5] to-[#7bc6cc] text-white px-4 py-2 rounded full'> Live Demo</a>
                    </div>
                </div> 
            ))}
        </div>
      </div>
    </div>
  )
}

export default Project
