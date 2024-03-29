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

                <div className={`${open ? 'hidden' : 'hidden lg:block'}`}>
                    <svg className='animate-pulse' fill="#E74C3C" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17,11.5 L17,12.5 C17,12.7761424 16.7761424,13 16.5,13 C16.2238576,13 16,12.7761424 16,12.5 L16,10.5 C16,10.2238576 15.7761424,10 15.5,10 C15.2238576,10 15,10.2238576 15,10.5 L15,12.5 C15,12.7761424 14.7761424,13 14.5,13 C14.2238576,13 14,12.7761424 14,12.5 L14,9.5 C14,9.22385763 13.7761424,9 13.5,9 C13.2238576,9 13,9.22385763 13,9.5 L13,12.5 C13,12.7761424 12.7761424,13 12.5,13 C12.2238576,13 12,12.7761424 12,12.5 L12,4.5 C12,4.22385763 11.7761424,4 11.5,4 C11.2238576,4 11,4.22385763 11,4.5 L11,9.5 L11,12.0474376 C11,12.3783481 10.8839855,12.698786 10.6721417,12.9529985 C10.1720143,13.5531514 9.28006076,13.6342381 8.6799078,13.1341106 L7.75607376,12.3642489 C7.4736449,12.1288916 7.11763998,12 6.75,12 C6.48363526,12 6.24082605,12.1526146 6.12532205,12.3926334 L6.08962348,12.4668155 C5.95447865,12.7476481 5.99541029,13.0814869 6.19439734,13.321352 L10.607865,18.6414804 C11.3217788,19.502054 12.3818498,20 13.5,20 C15.9852814,20 18,17.9852814 18,15.5 L18,11.5 C18,11.2238576 17.7761424,11 17.5,11 C17.2238576,11 17,11.2238576 17,11.5 Z M16.9474595,10.1050446 C17.1184541,10.0372568 17.3048761,10 17.5,10 C18.3284271,10 19,10.6715729 19,11.5 L19,15.5 C19,18.5375661 16.5375661,21 13.5,21 C12.0842933,21 10.7421216,20.3695431 9.83822457,19.279958 L5.42475695,13.9598296 C4.97611908,13.4190278 4.88383427,12.6663521 5.18853292,12.0331845 L5.2242315,11.9590024 C5.50634865,11.3727595 6.09940726,11 6.75,11 C7.35157648,11 7.9341143,11.2109078 8.39625816,11.5960277 L9.3200922,12.3658894 C9.49596826,12.5124527 9.75735708,12.4886901 9.90392046,12.3128141 C9.96600171,12.2383166 10,12.1444116 10,12.0474376 L10,9.5 L10,4.5 C10,3.67157288 10.6715729,3 11.5,3 C12.3284271,3 13,3.67157288 13,4.5 L13,8.08535285 C13.1563895,8.03007711 13.3246823,8 13.5,8 C14.191734,8 14.7741062,8.46823386 14.9474595,9.10504462 C15.1184541,9.03725677 15.3048761,9 15.5,9 C16.191734,9 16.7741062,9.46823386 16.9474595,10.1050446 Z" />
                    </svg>
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
