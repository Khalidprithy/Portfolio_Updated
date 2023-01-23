import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='mx-1 md:mx-4'>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="flex items-center justify-between bg-neutral mb-3 mx-auto h-24 w-12/12 md:w-2/3 lg:1/2 hover:w-full ease-in-out duration-500 rounded-xl text-white">
                <div className=" text-white">
                    <div className="dropdown">
                        <Link to='/' tabIndex="0" className=" text-2xl md:text-4xl font-semibold text-accent px-2 md:px-10 ml-1">Dev.Kbin</Link>
                        <ul tabIndex="1" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-48">
                            <Link to='/'><p className='text-left py-2 mx-2 text-white font-semibold'>Home</p></Link>
                            <Link to='/projects'><p className='text-left py-2 mx-2 text-white font-semibold'>Projects</p></Link>
                            <Link to='/about'><p className='text-left py-2 mx-2 text-white font-semibold'>About</p></Link>
                            <Link to='/blog'><p className='text-left py-2 mx-2 text-white font-semibold'>Blog</p></Link>
                        </ul>
                    </div>
                </div>
                <div className={` ${open ? "hidden md:block ease-in-out duration-500" : "hidden"} `}>
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
                    <a href='https://drive.google.com/file/d/1gNC3eMyc6kcoQaB-vq8Xb-hLbAKXI-1d/view?usp=sharing' rel="noreferrer" className="btn btn-sm text-base-100 border-0 rounded-md bg-red-400 hover:bg-red-600 mr-2" target="_blank" download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;