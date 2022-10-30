import React from 'react';
import { useState } from 'react';
import GitIcon from '../../images/git_icon.svg.png'
import LinkedIcon from '../../images/linkedIn_icon.svg.png'
import InstaIcon from '../../images/Instagram-Icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='mx-1 md:mx-4'>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="flex items-center justify-between bg-neutral m-3 mx-auto h-24 w-12/12 md:w-1/2 hover:w-full ease-in-out duration-500 rounded-xl text-white">
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
                    <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle">
                        <img src={GitIcon} alt="" className='rounded-full mr-1 md:mr-6 w-8 md:w-full' />
                    </a>
                    <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle">
                        <img src={LinkedIcon} alt="" className='rounded-full mr-1 md:mr-6 w-8 md:w-full' />
                    </a>
                    <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer" className="btn btn-ghost btn-circle">
                        <img src={InstaIcon} alt="" className='rounded-full mr-1 md:mr-6 w-8 md:w-full' />
                    </a>
                    <a href='https://drive.google.com/file/d/1Gy9qYOA3UzY77SEGyhu3unkHq28VotTb/view?usp=sharing' rel="noreferrer" className="btn btn-sm text-base-100 border-0 rounded-md bg-red-400 hover:bg-red-600 mr-2" target="_blank" download>Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;