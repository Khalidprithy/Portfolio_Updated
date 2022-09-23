import React, { useState } from 'react';
import { AiFillHtml5, AiFillApi, AiFillGithub } from 'react-icons/ai';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { FaNpm } from 'react-icons/fa';
import { DiBootstrap, DiReact, DiNodejs, DiMongodb, DiFirebase } from 'react-icons/di';
import { SiTailwindcss, SiVisualstudiocode, SiHeroku, SiNetlify, SiPostman, SiExpress, SiFirebase } from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';


const Summary = () => {

    const [openFront, setOpenFront] = useState(false);
    const [openBack, setOpenBack] = useState(false);
    const [openTools, setOpenTools] = useState(false);

    return (
        <div className='mx-2'>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg w-full md:w-10/12 mx-auto h-24 rounded-lg mb-6'>
                <h1 className='text-2xl font-semibold m-2'>My Skills</h1>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>Here</p>
                    <BsFillArrowDownCircleFill className='text-5xl  m-2 text-accent'></BsFillArrowDownCircleFill>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenFront(true)}
                onMouseLeave={() => setOpenFront(false)}
                className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-info px-4 ease-in-out duration-1000'>Frontend</h1>
                <div className={` ${openFront ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                    <AiFillHtml5 className='text-4xl hover:text-error ease-out duration-300'></AiFillHtml5>
                    <IoLogoCss3 className='text-4xl hover:text-error ease-out duration-300'></IoLogoCss3>
                    <IoLogoJavascript className='text-4xl hover:text-error ease-out duration-300'></IoLogoJavascript>
                    <DiBootstrap className='text-4xl hover:text-error ease-out duration-300'></DiBootstrap>
                    <SiTailwindcss className='text-4xl hover:text-error ease-out duration-300'></SiTailwindcss>
                    <DiReact className='text-4xl hover:text-error ease-out duration-300'></DiReact>
                    <FaNpm className='text-4xl hover:text-error ease-out duration-300'></FaNpm>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenBack(true)}
                onMouseLeave={() => setOpenBack(false)}
                className='flex flex-col md:flex-row  items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-accent px-4 ease-in-out duration-1000'>Backend</h1>
                <div className={` ${openBack ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                    <DiNodejs className='text-4xl hover:text-error ease-out duration-300'></DiNodejs>
                    <SiExpress className='text-4xl hover:text-error ease-out duration-300'></SiExpress>
                    <DiMongodb className='text-4xl hover:text-error ease-out duration-300'></DiMongodb>
                    <SiFirebase className='text-4xl hover:text-error ease-out duration-300'></SiFirebase>
                    <SiPostman className='text-4xl hover:text-error ease-out duration-300'></SiPostman>
                    <AiFillApi className='text-4xl hover:text-error ease-out duration-300'></AiFillApi>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenTools(true)}
                onMouseLeave={() => setOpenTools(false)}
                className='flex flex-col md:flex-row  items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-success px-4 ease-in-out duration-1000'>Tools</h1>
                <div className={` ${openTools ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>

                    <SiVisualstudiocode className='text-4xl hover:text-error ease-out duration-300'></SiVisualstudiocode>
                    <AiFillGithub className='text-4xl hover:text-error ease-out duration-300'></AiFillGithub>
                    <SiHeroku className='text-4xl hover:text-error ease-out duration-300'></SiHeroku>
                    <SiNetlify className='text-4xl hover:text-error ease-out duration-300'></SiNetlify>
                    <DiFirebase className='text-4xl hover:text-error ease-out duration-300'></DiFirebase>
                </div>
            </div>
        </div>
    );
};

export default Summary;