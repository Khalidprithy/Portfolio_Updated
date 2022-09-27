import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const Blog = () => {

    const [openFront, setOpenFront] = useState(false);

    return (
        <div>
            <div className='flex items-center justify-center m-4 mt-6'>
                <div
                    onMouseEnter={() => setOpenFront(true)}
                    onMouseLeave={() => setOpenFront(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>50 JavaScript interview Q&A</h1>
                    <div className={` ${openFront ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>

                <div
                    onMouseEnter={() => setOpenFront(true)}
                    onMouseLeave={() => setOpenFront(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 CSS interview Q&A</h1>
                    <div className={` ${openFront ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenFront(true)}
                    onMouseLeave={() => setOpenFront(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 React interview Q&A</h1>
                    <div className={` ${openFront ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenFront(true)}
                    onMouseLeave={() => setOpenFront(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>Why waking up early is the best habit to start with.</h1>
                    <div className={` ${openFront ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenFront(true)}
                    onMouseLeave={() => setOpenFront(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>10 benefits of working out</h1>
                    <div className={` ${openFront ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;