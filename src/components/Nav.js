import { HashLink as Link } from 'react-router-hash-link';
import navLogow from '../assets/navLogow.png'
import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  // FaGithub,
  // FaLinkedin,
} from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';






function Nav(props) {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)


    return (
          <div className="fixed w-full h-[80px] flex justify-between items-center px-4 mb-8" id='nav-bg'>
            <div>
              <img className="h-16 w-18" src={navLogow} alt="logo"/>
            </div>
            <ul className="hidden md:flex  flex justify-between items-center">
              <li className='px-4'>
                <Link to="#home" smooth={true} duration={500}>
                  HOME
                </Link>
              </li>
              <li className='px-4'>
                <Link to="#about" smooth={true} duration={500}>
                ABOUT
                </Link>
              </li>
              <li className='px-4'>
                <Link to="#projects" smooth={true} duration={200}>
                PROJECTS
                </Link>
              </li>
              <li className='px-4'>
                <Link to="#skills" smooth={true} duration={500}>
                SKILLS
              </Link>
              </li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
              {!nav ? <FaBars /> : <FaTimes />}
           </div>
           {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-sky-700 flex flex-col justify-center items-center'}>
              <li className='py-4 text-4xl'>
                <Link onClick={handleClick} to='#home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className='py-4 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='#about' smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className='py-4 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='#skills' smooth={true} duration={500}>
                  Skills
                </Link>
              </li>
              <li className='py-4 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='#projects' smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              {/* <li className='py-6 text-4xl'>
                {' '}
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                  Contact
                </Link>
              </li> */}
            </ul>
            {/* <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                  <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://www.linkedin.com/in/nprati/'>
                    Linkedin <FaLinkedin size={30} />
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                  <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/nprati01'
                  >
                    Github <FaGithub size={30} />
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                  <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'
                  >
                    Email <HiOutlineMail size={30} />
                  </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='/'
                  >
                    Resume <BsFillPersonLinesFill size={30} />
                  </a>
                </li>
              </ul>
            </div> */}
        </div>





    )
  }

  export default Nav;
