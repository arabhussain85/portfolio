import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { ReactTyped } from 'react-typed';
import { Link, Element } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='bg-[#061327] w-full h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>Arab Hussain</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#00df9a]'>I'm a
          <span className='pl-2'>
            <ReactTyped strings={["FrontEnd Developer", "Designer", "Freelancer"]} typeSpeed={100} backSpeed={60} loop={true} />
          </span>
        </h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>I’m focused on building responsive front-end web applications. Currently, I’m focused on building responsive front-end web applications.</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
