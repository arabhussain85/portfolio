import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
// import firebase from '../assets/firebase.png'
import nextjs from '../assets/Nextjs.png'
import mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen text-gray-300 bg-[#061327]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full w-full'>
        <div >
          <p className=' text-4xl font-bold border-b-4 border-pink-600 py-4 ' >Skills</p>
          <p className='py-4'> These are the technologies i have worked with:</p>

        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500'>
            <img src={HTML} alt="html icon" className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>

          </div>
          <div className='shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500'>
            <img src={CSS} alt="css icon" className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>

          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500 ">
            <img src={JavaScript} alt="javascript icon" className='w-20 mx-auto' />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500">
            <img src={github} alt="github icon" className='w-20 mx-auto' />
            <p className='my-4'>GitHub</p>
          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500">
            <img src={react} alt="react icon" className='w-20 mx-auto' />
            <p className='my-4'>React</p>
          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500">
            <img src={tailwind} alt="tailwind icon" className='w-20 mx-auto' />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500 ">
            <img src={nextjs} alt="nextjs icon" className='w-20 mx-auto ' />
            <p className='my-4'>Next.js</p>
          </div>
          <div className="shadow-md shadow-[#f2f4f7da] hover:scale-110 duration-500">
            <img src={mongo} alt="mongo icon" className='w-20 mx-auto' />
            <p className='my-4'>MongoDB</p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills
