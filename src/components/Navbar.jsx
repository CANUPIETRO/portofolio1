import React, {useState} from 'react';
import {Link} from "react-scroll"
import {FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png';
const Navbar = () => {
    const[nav, setNav] = useState(false)  
    const handleClick = () => setNav (!nav)


    return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#231f20] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image"  style={{witdh:'120px',height:'100px'}} />
        </div>
        
            <ul className='hidden md:flex'>
                <li>
                <   Link to="home" smooth={true} duration={500} >Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} >About</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} >Skills</Link>
                    </li>
                <li>
                    <Link to="work" smooth={true} duration={500} >Work</Link>
                    </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} >Contact</Link>
                    </li>
            </ul>
        {/* Mobile menu */}
        <div onClick={handleClick} className='md:hidden z-10'>

            {!nav ? <FaBars />:<FaTimes />}
        </div>
        <ul className= {!nav ? 'hidden':' absolute top-0 left-0 w-full h-screen bg-[#231f20] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                <Link to="home" smooth={true} duration={500} >Home</Link>
                </li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Experince</li>
                <li className='py-6 text-4xl'>Skills</li>             
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

              {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.linkedin.com/in/pietro-canu-5a97241b2/'
                >
                Linkedin <FaLinkedin size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a
                className='flex justify-between items-center w-full text-gray-300'
                href='/https://github.com/CANUPIETRO'
                >
                Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://mail.google.com/mail/u/0/?fs=1&to=petroskanou@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com&tf=cm'
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
        </div>
    
    </div>
    )
};
export default Navbar