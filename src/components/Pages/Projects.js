import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import TeaTree from '../../images/project/TeaTreeMain.png'
import BloomingBeauty from '../../images/project/BloomingBeautyMain.png'
import HotelView from '../../images/project/HotelBookingMain.png'

const Projects = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects')
    }
    return (
        <div className='m-2 mb-4'>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg outline-1 w-full md:w-8/12 mx-auto h-24 rounded-xl mb-4'>
                <h1 className='text-2xl font-semibold m-2'>Top Projects</h1>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>All Projects</p>
                    <BsFillArrowRightCircleFill
                        onClick={handleNavigate}
                        className='text-5xl m-2 text-accent'></BsFillArrowRightCircleFill>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-6xl font-bold text-center text-green-400">TeaTree</h1>
                        <p className="py-6 px-2">Warehouse Management Application for a tea manufacturing company built with React and Tailwind + DaizyUI for frontend and Nodejs ExpressJs for backend. I found this combination is flexible and productive. It also offers the flexibility to customize in future.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Warehouse Management Application for a tea manufacturing company built with React and Tailwind + DaizyUI for frontend and Nodejs Express for the backend.</li>
                            <li>I used the admin system and JWT for user safety</li>
                            <li>The payment system is also implemented using stripe</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://tea-tree-6ed1f.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/Tea-Tree-Frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/Tea-Tree-Backend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <img src={TeaTree} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-2" />
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <img src={BloomingBeauty} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-1" />
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-2">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-400">BloomingBeauty</h1>
                        <p className="py-6 px-2">This is a react application for a cosmetics e-commerce site to manage their products and sales. Tailwind and daizyUI CSS is used to style the website. Which give user a consistent look and feel. I have added Rechart so that user can easily check and track sells and other business information. Login authentication is added with react firebase hooks. For social login, user can login with google or facebook.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Login system is implemented and Social login is available.</li>
                            <li>Error message for wrong input and actions</li>
                            <li>Mobile and desktop responsive</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://blooming-beauty-25ee5.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/BloomingBeauty-Frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/BloomingBeauty-server' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 ">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-6xl font-bold text-center text-sky-400">HotelView</h1>
                        <p className="py-6 px-2">Hotel Booking website. User can visit hotels on different location. Hotel, resort, apartment, cabin data is loaded dynamically. User can see details about a hotel and available rooms. They can book certain rooms and once a room is booked other user no longer will be able to book same room on same date.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Website to search and book hotel.</li>
                            <li>I used JWT for user safety and login system</li>
                            <li>Booking system has used</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://hotel-booking-3b5e8.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/hotel-booking-frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/hotel-booking-backend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <img src={HotelView} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-md mx-auto order-1 md:order-2" />
            </div>
        </div>
    );
};

export default Projects;