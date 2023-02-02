import React from 'react';
import profileImg from '../../images/profile.jpg'

const About = () => {
    return (
        <div className='m-2 my-10'>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-0 md:pt-10 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white p-2">
                        <p className='text-xl font-semibold'>Hello There</p>
                        <h1 className="text-6xl font-bold text-center">I'm <br /> Khalid Bin Alam</h1>
                        <h4 className='mt-2 font-semibold'>MERN Stack Developer</h4>
                    </div>
                </div>
                <img src={profileImg} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-full mx-auto order-1 md:order-2 m-10" />
            </div>
            <div className="h-fit flex justify-center items-center bg-white border-4 border-neutral rounded-2xl w-full md:w-8/12 mx-auto ease-in-out duration-500 ">
                <h1 className='text-center text-4xl py-4'>Services I Provide</h1>
            </div>
            <div className='bg-neutral h-20 rounded-2xl w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl'>Frontend Development</h1>
            </div>
            <div className='bg-neutral h-20 rounded-2xl w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl'>React Application</h1>
            </div>
            <div className='bg-neutral h-20 rounded-2xl w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl'>Backend Development</h1>
            </div>
            <div className='bg-neutral h-20 rounded-2xl w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl'>MERN Application</h1>
            </div>
        </div>
    );
};

export default About;