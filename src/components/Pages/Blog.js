import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const [openBlog1, setOpenBlog1] = useState(false);
    const [openBlog2, setOpenBlog2] = useState(false);
    const [openBlog3, setOpenBlog3] = useState(false);
    const [openBlog4, setOpenBlog4] = useState(false);
    const [openBlog5, setOpenBlog5] = useState(false);


    const navigate = useNavigate();

    const handleReactQa = () => {
        navigate('/react_qa')
    }


    return (
        <div >
            <div className='flex items-center justify-center m-4 mt-6'>
                <div
                    onMouseEnter={() => setOpenBlog1(true)}
                    onMouseLeave={() => setOpenBlog1(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>50 JavaScript interview Q&A</h1>
                    <div className={` ${openBlog1 ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>

                <div
                    onMouseEnter={() => setOpenBlog2(true)}
                    onMouseLeave={() => setOpenBlog2(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 CSS interview Q&A</h1>
                    <div className={` ${openBlog2 ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog3(true)}
                    onMouseLeave={() => setOpenBlog3(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 React interview Q&A</h1>
                    <div className={` ${openBlog3 ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleReactQa}
                            className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog4(true)}
                    onMouseLeave={() => setOpenBlog4(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>Why waking up early is the best habit to start with.</h1>
                    <div className={` ${openBlog4 ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog5(true)}
                    onMouseLeave={() => setOpenBlog5(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-3xl text-center text-white px-4 ease-in-out duration-1000'>10 benefits of working out</h1>
                    <div className={` ${openBlog5 ? "hidden md:flex justify-between items-center gap-4 ease-in-out duration-500" : "flex md:hidden"} `}>
                        <p className='text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;