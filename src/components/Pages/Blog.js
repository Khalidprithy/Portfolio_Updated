import React, { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Blog = () => {

    const [openBlog0, setOpenBlog0] = useState(false);
    const [openBlogC, setOpenBlogC] = useState(false);
    const [openBlog1, setOpenBlog1] = useState(false);
    const [openBlog2, setOpenBlog2] = useState(false);
    const [openBlog3, setOpenBlog3] = useState(false);
    const [openBlog4, setOpenBlog4] = useState(false);
    const [openBlog5, setOpenBlog5] = useState(false);
    const [openBlog6, setOpenBlog6] = useState(false);


    const navigate = useNavigate();

    const handleHTMLQa = () => {
        navigate('/html_qa')
    }
    const handleCSSQa = () => {
        navigate('/css_qa')
    }
    const handleJavaScriptQa = () => {
        navigate('/javascript_qa')
    }
    const handleReactQa = () => {
        navigate('/react_qa')
    }
    const handleMongoQa = () => {
        navigate('/mongo_qa')
    }
    const handleNodeQa = () => {
        navigate('/node_qa')
    }


    return (
        <div >
            <div className='flex items-center justify-center m-4 mt-6'>
                <div
                    onMouseEnter={() => setOpenBlog0(true)}
                    onMouseLeave={() => setOpenBlog0(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>25 HTML interview Q&A</h1>
                    <div className={` ${openBlog0 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleHTMLQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4 mt-6'>
                <div
                    onMouseEnter={() => setOpenBlogC(true)}
                    onMoonClick={handleNodeQa} useLeave={() => setOpenBlogC(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>25 CSS interview Q&A</h1>
                    <div className={` ${openBlogC ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleCSSQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4 mt-6'>
                <div
                    onMouseEnter={() => setOpenBlog1(true)}
                    onMouseLeave={() => setOpenBlog1(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>45 JavaScript interview Q&A</h1>
                    <div className={` ${openBlog1 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleJavaScriptQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>

                <div
                    onMouseEnter={() => setOpenBlog2(true)}
                    onMouseLeave={() => setOpenBlog2(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 NodeJS interview Q&A</h1>
                    <div className={` ${openBlog2 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleNodeQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog3(true)}
                    onMouseLeave={() => setOpenBlog3(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 React interview Q&A</h1>
                    <div className={` ${openBlog3 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleReactQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog4(true)}
                    onMouseLeave={() => setOpenBlog4(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>40 MongoDB interview Q&A</h1>
                    <div className={` ${openBlog4 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill
                            onClick={handleMongoQa}
                            className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog5(true)}
                    onMouseLeave={() => setOpenBlog5(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>Why waking up early is the best habit to start with.</h1>
                    <div className={` ${openBlog5 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center m-4'>
                <div
                    onMouseEnter={() => setOpenBlog6(true)}
                    onMouseLeave={() => setOpenBlog6(false)}
                    className='flex flex-col md:flex-row items-center justify-around bg-neutral text-white w-full md:w-6/12 mx-auto hover:w-10/12 hover:text-accent h-24 rounded-xl ease-in-out duration-500 mb-4'
                >
                    <h1 className='text-xl md:text-3xl text-center text-white px-4 ease-in-out duration-1000'>10 benefits of working out</h1>
                    <div className={` ${openBlog6 ? "flex justify-between items-center gap-4 ease-in-out duration-500" : "flex items-center gap-1 md:hidden"} `}>
                        <p className='text-xl md:text-2xl font-bold'>View</p>
                        <BsFillArrowRightCircleFill className='text-xl md:text-5xl hover:text-error ease-out duration-300'></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;