import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const BackendProjects = () => {
    return (

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full md:w-11/12 lg:w-10/12 mx-auto'>
            <div className=" text-white bg-neutral text-center rounded-lg p-2">
                <p className='text-xl font-semibold'>Frontend</p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-yellow-400">Backend Portfolio</h1>
                <p className="py-6 px-2">This is a single page portfolio for a Backend Developer. The goal was to create a simple portfolio to highlight his skills experience and projects where anyone can view everything at one glance. </p>
                <ul className='text-left list-disc list-inside'>
                    <li>Portfolio for a backend developer.</li>
                    <li>A slider to showcase all the skills</li>
                    <li>Popup modal for contact info</li>
                </ul>
                <div className="w-full pt-6 mx-auto">
                    <a href='https://github.com/Khalidprithy/BackendDeveloper' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github Repo</a>
                </div>
            </div>
            <div className=" text-white bg-neutral text-center rounded-lg p-2">
                <p className='text-xl font-semibold'>Frontend</p>
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-yellow-400">Backend Portfolio</h1>
                <p className="py-6 px-2">This is a single page portfolio for a Backend Developer. The goal was to create a simple portfolio to highlight his skills experience and projects where anyone can view everything at one glance. </p>
                <ul className='text-left list-disc list-inside'>
                    <li>Portfolio for a backend developer.</li>
                    <li>A slider to showcase all the skills</li>
                    <li>Popup modal for contact info</li>
                </ul>
                <div className="w-full pt-6 mx-auto">
                    <a href='https://github.com/Khalidprithy/BackendDeveloper' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Github Repo</a>
                </div>
            </div>
        </div>


    );
};

export default BackendProjects;