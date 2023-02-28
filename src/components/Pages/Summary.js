import React, { useState } from 'react';
import { AiFillHtml5, AiFillApi, AiFillGithub } from 'react-icons/ai';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { FaNpm, FaFigma } from 'react-icons/fa';
import { DiBootstrap, DiReact, DiNodejs, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiVisualstudiocode, SiTensorflow, SiHeroku, SiNetlify, SiPostman, SiExpress, SiFirebase, SiGraphql, SiPostgresql, SiInsomnia, SiAdobexd } from 'react-icons/si';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';


const Summary = () => {

    const [openFront, setOpenFront] = useState(false);
    const [openBack, setOpenBack] = useState(false);
    const [openTools, setOpenTools] = useState(false);

    return (
        <div className='mx-2'>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg w-full md:w-8/12 mx-auto h-24 rounded-xl mb-6'>
                <h1 className='text-2xl font-semibold m-2'>My Skills</h1>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>Here</p>
                    <BsFillArrowDownCircleFill className='text-5xl m-2 text-accent animate-bounce'></BsFillArrowDownCircleFill>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenFront(true)}
                onMouseLeave={() => setOpenFront(false)}
                className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-info px-4 ease-in-out duration-1000 animate-pulse'>Frontend</h1>
                <div className={` ${openFront ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                    <div className="tooltip tooltip-info" data-tip="HTML5">

                        <AiFillHtml5 className='text-4xl hover:text-error ease-out duration-300'></AiFillHtml5>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="CSS3">

                        <IoLogoCss3 className='text-4xl hover:text-error ease-out duration-300'></IoLogoCss3>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="JavaScript">

                        <IoLogoJavascript className='text-4xl hover:text-error ease-out duration-300'></IoLogoJavascript>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="Bootstrap">

                        <DiBootstrap className='text-4xl hover:text-error ease-out duration-300'></DiBootstrap>

                    </div>
                    <div className="tooltip tooltip-info" data-tip="Tailwind CSS">

                        <SiTailwindcss className='text-4xl hover:text-error ease-out duration-300'></SiTailwindcss>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="ReactJS">

                        <DiReact className='text-4xl hover:text-error ease-out duration-300'></DiReact>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="GraphQL">

                        <SiGraphql className='text-4xl hover:text-error ease-out duration-300'></SiGraphql>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="NPM">

                        <FaNpm className='text-4xl hover:text-error ease-out duration-300'></FaNpm>
                    </div>
                    <div className="tooltip tooltip-info" data-tip="Tensorflow">

                        <SiTensorflow className='text-4xl hover:text-error ease-out duration-300'></SiTensorflow>
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenBack(true)}
                onMouseLeave={() => setOpenBack(false)}
                className='flex flex-col md:flex-row  items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-accent px-4 ease-in-out duration-1000 animate-pulse'>Backend</h1>
                <div className={` ${openBack ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                    <div className="tooltip tooltip-accent" data-tip="NodeJS">

                        <DiNodejs className='text-4xl hover:text-error ease-out duration-300'></DiNodejs>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="ExpressJS">

                        <SiExpress className='text-4xl hover:text-error ease-out duration-300'></SiExpress>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="MongoDB">

                        <DiMongodb className='text-4xl hover:text-error ease-out duration-300'></DiMongodb>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="PostgresSQL">

                        <SiPostgresql className='text-4xl hover:text-error ease-out duration-300'></SiPostgresql>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="GraphQL">

                        <SiGraphql className='text-4xl hover:text-error ease-out duration-300'></SiGraphql>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="Firebase">

                        <SiFirebase className='text-4xl hover:text-error ease-out duration-300'></SiFirebase>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="Postman">

                        <SiPostman className='text-4xl hover:text-error ease-out duration-300'></SiPostman>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="Insomnia">

                        <SiInsomnia className='text-4xl hover:text-error ease-out duration-300'></SiInsomnia>
                    </div>
                    <div className="tooltip tooltip-accent" data-tip="REST API">

                        <AiFillApi className='text-4xl hover:text-error ease-out duration-300'></AiFillApi>
                    </div>
                </div>
            </div>
            <div
                onMouseEnter={() => setOpenTools(true)}
                onMouseLeave={() => setOpenTools(false)}
                className='flex flex-col md:flex-row  items-center justify-around bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4'
            >
                <h1 className='text-5xl text-center text-success px-4 ease-in-out duration-1000 animate-pulse'>Tools</h1>
                <div className={` ${openTools ? "hidden md:flex justify-between gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                    <div className="tooltip tooltip-success" data-tip="VS Code">

                        <SiVisualstudiocode className='text-4xl hover:text-error ease-out duration-300'></SiVisualstudiocode>
                    </div>
                    <div className="tooltip tooltip-success" data-tip="GitHub">

                        <AiFillGithub className='text-4xl hover:text-error ease-out duration-300'></AiFillGithub>
                    </div>
                    <div className="tooltip tooltip-success" data-tip="Heroku">

                        <SiHeroku className='text-4xl hover:text-error ease-out duration-300'></SiHeroku>
                    </div>
                    <div className="tooltip tooltip-success" data-tip="Netlify">

                        <SiNetlify className='text-4xl hover:text-error ease-out duration-300'></SiNetlify>
                    </div>
                    <div className="tooltip tooltip-success" data-tip="Figma">

                        <FaFigma className='text-4xl hover:text-error ease-out duration-300'></FaFigma>
                    </div>
                    <div className="tooltip tooltip-success" data-tip="Adobe XD">

                        <SiAdobexd className='text-4xl hover:text-error ease-out duration-300'></SiAdobexd>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;