import React from 'react';

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
                <img src="https://i.ibb.co/7WTpJ1K/profile.jpg" alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-full mx-auto order-1 md:order-2 m-10" />
            </div>
            <div className="h-fit flex justify-center items-center bg-neutral rounded-2xl w-full md:w-8/12 mx-auto ease-in-out duration-500 ">
                <h1 className='text-center text-4xl text-white py-4'>Services I Provide</h1>
            </div>

        </div>
    );
};

export default About;