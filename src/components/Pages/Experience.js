import React, { useState } from 'react';
import SimmiIcon from '../../images/SimmiLogo.png'
import StarticIcon from '../../images/starticLogo.jpg'
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Experience = () => {

    const [simmiFoundation, setSimmiFoundation] = useState(false);
    const [starticField, setStarticField] = useState(false);

    return (
        <div>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg w-full md:w-8/12 mx-auto h-24 rounded-xl mb-6'>
                <h1 className='text-2xl font-semibold m-2'>Experience</h1>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>Here</p>
                    <BsFillArrowDownCircleFill className='text-5xl m-2 text-accent ease-out duration-300 motion-safe:animate-bounce'></BsFillArrowDownCircleFill>
                </div>
            </div>

            <div
                onMouseEnter={() => setSimmiFoundation(true)}
                onMouseLeave={() => setSimmiFoundation(false)}
                className='flex items-center justify-between bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4 px-4'>
                <div className='flex items-center justify-center px-6'>
                    <img className='w-16 hidden rounded-full ring-2 ring-orange-400 m-2 md:block' src={SimmiIcon} alt="" />
                    <div className='text-left'>
                        <h1 className='text-xl md:text-3xl text-orange-400 ease-in-out duration-1000'>Simmi Foundation</h1>
                        <h4 className='text-sm md:text-base font-medium text-gray-300'>ReactJS Developer</h4>
                    </div>
                </div>
                <div>
                    <div className={` ${simmiFoundation ? "hidden" : "block text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500"} `}>
                        <p>Oct 2022 - Present </p>
                        <p>Haryana, India · Remote</p>
                    </div>
                    <div className={` ${simmiFoundation ? "hidden lg:block  text-center p-2 gap-4 ease-in-out duration-500" : "hidden"} `}>
                        <p className='text-sm mx-6'>I am working as a ReactJS developer with a team of 8 developers. I am responsible for the design and development of web applications using React.js. I work closely with project managers to define project scope and timelines and ensure that we deliver high-quality and well-designed products on schedule as a team.</p>
                    </div>
                </div>

            </div>

            <div
                onMouseEnter={() => setStarticField(true)}
                onMouseLeave={() => setStarticField(false)}
                className='flex items-center justify-between bg-neutral text-white w-full md:w-8/12 mx-auto hover:w-10/12 h-32 rounded-xl ease-in-out duration-500 mb-4 px-4'>
                <div className='flex items-center justify-center px-6'>
                    <img className='w-16 hidden rounded-full ring-2 ring-sky-600 m-2 md:block' src={StarticIcon} alt="" />
                    <div className='text-left '>
                        <h1 className='text-xl md:text-3xl text-sky-600 ease-in-out duration-1000'>Startic Field</h1>
                        <h4 className='text-sm md:text-base font-medium text-gray-300'>Frontend Developer</h4>
                    </div>
                </div>
                <div>
                    <div className={` ${starticField ? "hidden" : "block text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500"} `}>
                        <p>Nov 2022 - Dec 2022 · 2 mos</p>
                        <p>New Delhi, India · Remote</p>
                    </div>
                    <div className={` ${starticField ? "hidden lg:block  text-center p-2 gap-4 ease-in-out duration-500" : "hidden"} `}>
                        <p className='text-sm mx-6'>My role as a front-end developer was to design and develop modern good pages for a SAAS product. I have worked with technologies like ReactJS, NextJS Tailwind CSS, and more.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;