import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'


import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between px-4 bg-[#061327] text-white'>
            <div>
                <img src={logo} alt="" style={{ width: '100px' }} />
            </div>
            {/* {menu} */}

            <ul className='md:flex hidden'>
                <li className='hover:bg-[#090e16]'>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='hover:bg-[#090e16]'><Link

                    to="about"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    About
                </Link></li>
                <li className='hover:bg-[#]'><Link

                    to="skills"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Skills
                </Link></li>
                <li className='hover:bg-[#]'><Link

                    to="work"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Work
                </Link></li>
                <li className='hover:bg-[#090e16]'><Link

                    to="contact"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Contact
                </Link></li>
            </ul>


            {/* hamburgerer */}
            <div onClick={handleClick} className='md:hidden my-8 z-10 cursor-pointer'>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile Menu */}

            <ul className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 border-r bg-[#061327]  ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <img src={logo} alt="" style={{ width: '100px' }} />
                <li  className='text-4xl hover:bg-[#061327]' >
                    <Link  onClick={handleClick}
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='text-4xl hover:bg-[#000203]' ><Link onClick={handleClick}

                    to="about"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    About
                </Link></li>
                <li className='text-4xl hover:bg-[#000203]'><Link onClick={handleClick}

                    to="skills"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Skills
                </Link></li>
                <li className='text-4xl hover:bg-[#000203]' ><Link onClick={handleClick}

                    to="work"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Work
                </Link></li>
                <li  className='text-4xl hover:bg-[#000203]' ><Link onClick={handleClick}

                    to="contact"
                    spy={true}
                    smooth={true}

                    duration={500}

                >
                    Contact
                </Link></li> 
            </ul>


            {/* Social Icons */}
            <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
                <ul className='w-[160px] h-[160px] top-[35%] left-0'>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.instagram.com/arab.hussain85/" target='_blank'>Instagram</a><FaInstagram size={30} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/arabhussain85" target='_blank'>Github</a><FaGithub size={30} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQVxttZFvDbXVDxdqwdFBjWQVrS" target='_blank'>Email</a><HiOutlineMail size={30} />
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="#">Resume</a><BsFillPersonLinesFill size={30} />
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default NavBar
