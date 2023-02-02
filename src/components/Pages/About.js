import React from 'react';
import profileImg from '../../images/profile.jpg'

const About = () => {
    return (
        <div className='m-2 my-10'>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-0 md:pt-10 bg-neutral rounded-2xl w-full md:w-8/12 hover:w-10/12 mx-auto ease-in-out duration-500 mb-4">
                <div className="text-center my-4 mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white p-2">
                        <p className='text-xl font-semibold'>Hello There</p>
                        <h1 className="text-6xl font-bold text-center">I'm <br /> Khalid Bin Alam</h1>
                        <h4 className='text-base md:text-lg mt-2 font-semibold text-gray-400'>MERN Stack Developer</h4>
                        <p className='text-sm md:text-base mt-4'>I'm a Full Stack Developer with a passion for building creative and intuitive web applications. My expertise lies in the MERN stack and I have a solid understanding of JavaScript, ES6, and its various frameworks and libraries. I have experience using popular front-end frameworks such as Tailwind CSS and Bootstrap, as well as Material UI for creating user-friendly and responsive interfaces. With a strong attention to detail, I ensure that all my projects meet the highest standards of quality and performance. I'm always eager to learn new technologies and take on challenging projects, and I look forward to collaborating with you on your next project</p>
                    </div>
                </div>
                <img src={profileImg} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-full mx-auto order-1 md:order-2 m-10" />
            </div>
            <div className="h-fit flex justify-center items-center bg-white border-4 border-neutral rounded-2xl w-full md:w-8/12 mx-auto ease-in-out duration-500 ">
                <h1 className='text-center text-4xl py-4'>Services I Provide</h1>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl text-center'>Frontend Development</h1>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl text-center'>React Application</h1>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl text-center'>Backend Development</h1>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h1 className='text-4xl text-center'>MERN Application</h1>
            </div>
        </div>
    );
};

export default About;