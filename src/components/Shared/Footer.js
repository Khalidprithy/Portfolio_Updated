import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='mx-1 md:mx-4'>
            <footer className="flex items-center justify-between bg-neutral m-3 mx-auto h-24 w-12/12 md:w-2/3 lg:1/2 hover:w-full ease-in-out duration-500 rounded-xl text-white">

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
        </div>
    );
};

export default Footer;