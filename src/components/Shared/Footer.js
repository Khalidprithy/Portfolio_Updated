import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='mx-1 md:mx-4 pb-1'>
            <footer className="flex items-center justify-between bg-neutral m-3 mx-auto h-24 w-12/12 md:w-2/3 hover:w-full ease-in-out duration-500 rounded-xl text-white px-0 md:px-20 shadow-lg shadow-red-500">

                <div className="items-center grid-flow-col mx-2">
                    <p className='text-white text-xl mx:text-2xl'>Copyright © Dev.Kbin</p>
                </div>
                <div className="flex gap-2 mx-2">
                    <a href='https://github.com/Khalidprithy' target="_blank" rel="noreferrer"> <AiFillGithub className='text-4xl text-white'></AiFillGithub>
                    </a>
                    <a href='https://www.linkedin.com/in/khalidbinalam/' target="_blank" rel="noreferrer"> <AiFillLinkedin className='text-4xl text-info'></AiFillLinkedin>
                    </a>
                    <a href='https://www.instagram.com/mdkhalidbinalam/' target="_blank" rel="noreferrer"> <AiFillInstagram className='text-4xl text-red-400'></AiFillInstagram>
                    </a>
                </div>
            </footer>
            <img className='block md:hidden rounded-md' src="https://raw.githubusercontent.com/gist/MedRedha/fd8e2481bde2610c96b9aafde543879c/raw/88624e8d31c4295973dcb7c900dacf0edc0a6d99/coding.gif" alt="" />
        </div>
    );
};

export default Footer;