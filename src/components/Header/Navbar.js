import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='fixed top-2 w-full bg-transparent backdrop-blur-sm z-10 px-5'>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="flex items-center justify-between bg-neutral mx-auto h-24 md:w-2/3  hover:w-full ease-in-out duration-500 rounded-xl text-white  shadow-lg shadow-red-500">
                <div className="text-white">
                    <div className="dropdown">
                        <Link to='/' tabIndex="0" className="text-2xl md:text-4xl font-semibold text-red-400 px-2 md:px-6 ml-1 flex items-center gap-1">Dev.Kbin <BsGear className='animate-spin text-green-500 block md:hidden lg:block' /></Link>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-10 ml-6 p-2 shadow bg-accent rounded-lg w-48">
                            <Link to='/'><p className='text-left py-2 mx-2 text-white font-semibold'>Home</p></Link>
                            <Link to='/projects'><p className='text-left py-2 mx-2 text-white font-semibold'>Projects</p></Link>
                            <Link to='/about'><p className='text-left py-2 mx-2 text-white font-semibold'>About</p></Link>
                            <Link to='/blog'><p className='text-left py-2 mx-2 text-white font-semibold'>Blog</p></Link>
                        </ul>
                    </div>
                </div>
                <div className={` ${open ? "hidden md:block transition ease-in-out delay-500 duration-500" : "hidden"} `}>
                    <ul className="menu menu-horizontal p-0">
                        <ul className="menu menu-horizontal p-0">
                            <Link to='/'><p className='text-2xl px-2 text-white font-semibold hover:text-accent'>Home</p></Link>
                            <Link to='/projects'><p className='text-2xl px-2 text-white font-semibold hover:text-accent'>Projects</p></Link>
                            <Link to='/about'><p className='text-2xl px-2 text-white font-semibold hover:text-accent'>About</p></Link>
                            <Link to='/blog'><p className='text-2xl px-2 text-white font-semibold hover:text-accent'>Blog</p></Link>
                        </ul>
                    </ul>
                </div>
                <div className="flex items-center gap-0 md:gap-2">
                    <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer"> <AiFillGithub className='text-3xl md:text-4xl lg:text-5xl text-white'></AiFillGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer"> <AiFillLinkedin className='text-3xl md:text-4xl lg:text-5xl text-info'></AiFillLinkedin>
                    </a>
                    <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer"> <AiFillInstagram className='text-3xl md:text-4xl lg:text-5xl text-red-400'></AiFillInstagram>
                    </a>
                    <a href='https://drive.google.com/file/d/1Bx9P9fVtH3oUjVyncWaTeX_tH3KfAtKA/view?usp=sharing' rel="noreferrer" className="btn btn-sm text-base-100 border-0 rounded-md bg-red-400 hover:bg-red-600 mr-2" target="_blank" download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
