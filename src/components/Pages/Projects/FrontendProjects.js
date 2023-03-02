import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import HomeStudio from '../../../images/project/TheHomeStudio.png'
import Saitama from '../../../images/project/Saitama.png'
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const FrontendProjects = () => {
    return (
        <div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center my-4 mx-1 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Frontend</p>
                        <h4 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-gray-400">A Home Studio</h4>
                        <p className="py-6 px-2">This is a single page website for a Design studio. I wanted to create a HTML and Tailwind CSS webpage with minimal yet modern looking with no animation. </p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Website for a design studio</li>
                            <li>Only HTML Tailwind CSS</li>
                            <li>Responsive and Dark mode</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 pt-6 mx-auto">
                            <a href='https://thehomestudio.netlify.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/HTML-Tailwind-One-page' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github Repo</a>
                        </div>
                    </div>
                </div>
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-2'>
                    <PerfectScrollbar>
                        <img src={HomeStudio} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-1'>
                    <PerfectScrollbar>
                        <img src={Saitama} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
                <div className="text-center my-4 mx-1 md:mx-auto order-2 md:order-2">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Frontend</p>
                        <h4 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-yellow-400">Backend Portfolio</h4>
                        <p className="py-6 px-2">This is a single page portfolio for a Backend Developer. The goal was to create a simple portfolio to highlight his skills experience and projects where anyone can view everything at one glance. </p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Portfolio for a backend developer.</li>
                            <li>A slider to showcase all the skills</li>
                            <li>Popup modal for contact info</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-2 pt-6 mx-auto">
                            <a href='https://1punchman.netlify.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/BackendDeveloper' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontendProjects;