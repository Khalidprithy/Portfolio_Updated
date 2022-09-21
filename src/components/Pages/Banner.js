import React from 'react';
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/about')
    }


    return (
        <div className='m-2 my-10'>
            <div className="h-fit md:h-screen grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-0 md:pt-10 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 ">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white">
                        <p className='text-xl font-semibold'>Hello There</p>
                        <h1 className="text-6xl font-bold text-center">I'm <br /> Khalid Bin Alam</h1>
                        <p className="py-6 px-2 text-base md:text-2xl">MERN stack Developer. I also have experience working with ES6, Bootstrap, Tailwind, Node.js, and MongoDB. I can work with Figma and Adobe XD. I have built a few Full-stack applications. At this moment, I am seeking a professional working environment to help build real-life applications and grow as a web developer</p>
                        <a
                            href='#contactMe'
                            className="btn btn-secondary text-white">Hire Me</a>
                        <button
                            onClick={handleLearnMore}
                            className="btn btn-accent text-white ml-2">Learn More</button>
                    </div>
                </div>
                <img src="https://i.ibb.co/7WTpJ1K/profile.jpg" alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-full mx-auto order-1 md:order-2 m-10" />
            </div>
        </div>
    );
};

export default Banner;