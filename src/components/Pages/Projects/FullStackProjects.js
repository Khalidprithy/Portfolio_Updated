import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import TeaTree from '../../../images/project/TeaTreeMain.png'
import BloomingBeauty from '../../../images/project/BloomingBeautyMain.png'
import HotelView from '../../../images/project/HotelBookingMain.png'
import Todo from '../../../images/project/Todo.png'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';


const FullStackProjects = () => {
    return (
        <div className='m-2 mb-4'>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center my-4 order-2 md:order-1 mx-1 md:mx-auto">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-green-400">TeaTree</h1>
                        <p className="py-6 px-2">Warehouse Management Application for a tea manufacturing company built with React and Tailwind + DaizyUI for frontend and Nodejs ExpressJs for backend. I found this combination is flexible and productive. It also offers the flexibility to customize in future.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Warehouse Management Application for a tea manufacturing company built with React and Tailwind + DaizyUI for frontend and Nodejs Express for the backend.</li>
                            <li>I used the admin system and JWT for user safety</li>
                            <li>The payment system is also implemented using stripe</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-1 lg:gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://tea-tree-6ed1f.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/Tea-Tree-Frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/Tea-Tree-Backend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-2'>
                    <PerfectScrollbar>
                        <img src={TeaTree} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-1'>
                    <PerfectScrollbar>
                        <img src={BloomingBeauty} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
                <div className="text-center my-4 mx-1 md:mx-auto order-2 md:order-2">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-pink-400">BloomingBeauty</h1>
                        <p className="py-6 px-2">This is a react application for a cosmetics e-commerce site to manage their products and sales. Tailwind and daizyUI CSS is used to style the website. Which give user a consistent look and feel. I have added Rechart so that user can easily check and track sells and other business information. Login authentication is added with react firebase hooks. For social login, user can login with google or facebook.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Login system is implemented and Social login is available.</li>
                            <li>Error message for wrong input and actions</li>
                            <li>Mobile and desktop responsive</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://blooming-beauty-25ee5.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/BloomingBeauty-Frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/BloomingBeauty-server' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center my-4 mx-1 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-sky-400">HotelView</h1>
                        <p className="py-6 px-2">Hotel Booking website. User can visit hotels on different location. Hotel, resort, apartment, cabin data is loaded dynamically. User can see details about a hotel and available rooms. They can book certain rooms and once a room is booked other user no longer will be able to book same room on same date.</p>
                        <ul className='text-left list-disc list-inside'>
                            <li>Website to search and book hotel.</li>
                            <li>I used JWT for user safety and login system</li>
                            <li>Booking system has used</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://hotel-booking-3b5e8.web.app/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/hotel-booking-frontend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/hotel-booking-backend' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-2'>
                    <PerfectScrollbar>
                        <img src={HotelView} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
            </div>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center p-2 bg-neutral rounded-lg lg:rounded-2xl w-full md:w-11/12 lg:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className='h-[450px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-1'>
                    <PerfectScrollbar>
                        <img src={Todo} alt="" className="p-1 rounded-lg" />
                    </PerfectScrollbar>
                </div>
                <div className="text-center my-4 mx-1 md:mx-auto order-2 md:order-2">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>MERN Stack</p>
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-center text-teal-400">Todo</h1>
                        <p className="py-6 px-2">This is a MERN stack Todo application. User can add new todo task, delete it, Update the todo task and also check mark it for completed task. User can also delete all todo tasks. </p>
                        <ul className='text-left list-disc list-inside'>
                            <li>React with Tailwind CSS. DaizyUI and Flowbite.</li>
                            <li>Dark mode is also available for dark theme devices.</li>
                            <li>Mobile and desktop responsive.</li>
                        </ul>
                        <div className="w-full sm:flex-1 grid gap-4 grid-cols-1 md:grid-cols-3 pt-6 mx-auto">
                            <a href='https://todo-cmkm.onrender.com/' className="flex items-center border border-green-700 justify-center gap-2 rounded-md font-bold h-8 bg-gray-700 text-white hover:bg-opacity-50" target="_blank" rel="noreferrer"> <CgWebsite className='block md:hidden lg:block'></CgWebsite> Live Site</a>
                            <a href='https://github.com/Khalidprithy/ToDo-CURD-front' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Client</a>
                            <a href='https://github.com/Khalidprithy/Todo_Curd_Server' className="flex items-center border justify-center gap-2 rounded-md font-bold h-8 bg-slate-200 text-black hover:bg-opacity-50" target="_blank" rel="noreferrer"> <AiFillGithub></AiFillGithub>Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullStackProjects;