import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import TeaTree from '../../images/project/TeaTreeMain.png'
import BloomingBeauty from '../../images/project/BloomingBeautyMain.png'
import HotelView from '../../images/project/HotelBookingMain.png'

const Projects = () => {
    return (
        <div className='m-2'>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg outline-1 w-full md:w-10/12 mx-auto h-24 rounded-lg mb-4'>
                <h1 className='text-2xl font-semibold m-2'>Top Projects</h1>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>All Projects</p>
                    <BsFillArrowRightCircleFill className='text-5xl m-2 text-accent'></BsFillArrowRightCircleFill>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Full-stack application</p>
                        <h1 className="text-6xl font-bold text-center text-green-400">TeaTree</h1>
                        <p className="py-6 px-2">MERN stack Developer. I also have experience working with ES6, Bootstrap, Tailwind, Node.js, and MongoDB. I can work with Figma and Adobe XD. I have built a few Full-stack applications. At this moment, I am seeking a professional working environment to help build real-life applications and grow as a web developer</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Mobile responsive</li>
                            <li>Firebase Auth</li>
                            <li>React firebase hooks</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='1' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-neutral hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <img src={TeaTree} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-2" />
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <img src={BloomingBeauty} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-1" />
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-2">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Full-stack application</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-400">BloomingBeauty</h1>
                        <p className="py-6 px-2">MERN stack Developer. I also have experience working with ES6, Bootstrap, Tailwind, Node.js, and MongoDB. I can work with Figma and Adobe XD. I have built a few Full-stack applications. At this moment, I am seeking a professional working environment to help build real-life applications and grow as a web developer</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Mobile responsive</li>
                            <li>Firebase Auth</li>
                            <li>React firebase hooks</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='1' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-neutral hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 ">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Full-stack application</p>
                        <h1 className="text-6xl font-bold text-center text-sky-400">HotelView</h1>
                        <p className="py-6 px-2">MERN stack Developer. I also have experience working with ES6, Bootstrap, Tailwind, Node.js, and MongoDB. I can work with Figma and Adobe XD. I have built a few Full-stack applications. At this moment, I am seeking a professional working environment to help build real-life applications and grow as a web developer</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Mobile responsive</li>
                            <li>Firebase Auth</li>
                            <li>React firebase hooks</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='1' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-neutral hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='1' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <img src={HotelView} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-2" />
            </div>
        </div>
    );
};

export default Projects;