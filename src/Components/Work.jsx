import React from 'react'
import image from '../assets/image.png'
import project2 from '../assets/project2.png'

const Work = () => {
    return (
        <div name="work" className='w-full md:h-screenh-screen text-gray-300 bg-[#061327] '>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 pt-[180px]">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                    <p className="py-6">Check out some of my projects</p>
                </div>
                {/* container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* grid item */}
                    <div style={{ backgroundImage: `url(${image})` }}
                        className="shadow-md shadow-[#f2f4f7da] group container rounded-md flex justify-center items-center mx-auto content-div 
                        hover:scale-105 duration-500
                        
                        ">

                        {/* {hover effects} */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${project2})` }}
                        className="shadow-md shadow-[#f2f4f7da] group container rounded-md flex justify-center items-center mx-auto content-div 
                        hover:scale-105 duration-500
                        
                        ">

                        {/* {hover effects} */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                              iTask To-DO Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>DEMO</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>CODE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Work
