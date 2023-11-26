import React from 'react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import SimmiIcon from '../../images/SimmiLogo.png';
import RootDev from '../../images/rootdev.jpg';
import StarticIcon from '../../images/starticLogo.jpg';

const Experience = () => {


    return (
        <div>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg w-full md:w-8/12 mx-auto h-24 rounded-xl mb-6'>
                <h4 className='text-2xl font-semibold m-2'>Experience</h4>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>Here</p>
                    <BsFillArrowDownCircleFill className='text-5xl m-2 text-accent ease-out duration-300 motion-safe:animate-bounce'></BsFillArrowDownCircleFill>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-between bg-neutral text-white w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center justify-center px-2 md:px-6'>
                        <img className='w-16 hidden rounded-full ring-2 ring-red-600 m-2 md:block' src={RootDev} alt="" />
                        <div className='text-left '>
                            <h4 className='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span className='text-red-500'>Root</span>Devs.</h4>
                            <h4 className='text-sm md:text-base font-medium text-gray-200'>Software Engineer</h4>
                        </div>
                    </div>
                    <div className='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                        <p className='text-sm md:text-base'>June 2023 - Current </p>
                        <p className='text-sm md:text-base'>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className={`text-left p-2 `}>
                    <p className='text-sm lg:text-base'>I am an Software Engineer currently employed at RootDev, where I work as a full-stack developer as part of the Web Application Development team. Together, we utilize NextJS and NodeJS to create software solutions that provide users with a seamless and enjoyable experience.</p>
                    <h4 className='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
                    <ul className='text-sm list-disc ml-6'>
                        <li> Develop and maintain the NodeJS server and backend of the Web Application team's software solutions</li>
                        <li> Collaborate with the full-stack developer to contribute to the application's frontend development </li>
                        <li> Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
                    </ul>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-between bg-neutral text-white w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center justify-center px-2 md:px-6'>
                        <img className='w-16 hidden rounded-full ring-2 ring-orange-400 m-2 md:block' src={SimmiIcon} alt="" />
                        <div className='text-left '>
                            <h4 className='text-lg md:text-2xl lg:text-3xl text-orange-400 ease-in-out duration-1000'>Simmi Foundation</h4>
                            <h4 className='text-sm md:text-base font-medium text-gray-300'>Frontend Engineer</h4>
                        </div>
                    </div>
                    <div className='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                        <p className='text-sm md:text-base'>Feb 2022 - Jan 2023 · 1 yr </p>
                        <p className='text-sm md:text-base'>Haryana, India · Remote</p>
                    </div>
                </div>
                <div className={`text-left p-2 `}>
                    <p className='text-sm lg:text-base'>I worked as a Frontend Lead Engineer with a team of 8 developers. I am responsible for the design and development of web applications using React.js. I work closely with project managers to define project scope and timelines and ensure that we deliver high-quality and well-designed products on schedule as a team.</p>
                    <h4 className='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
                    <ul className='text-sm list-disc ml-6'>
                        <li> Designed and developed the website layout and structure for both the client and admin sites. </li>
                        <li> Authentication authorization system for client and admin panel. </li>
                        <li> Maintain React best practices and assisted in code reviews to write clean and flexible code.</li>
                    </ul>
                </div>
            </div>

            <div
                className='flex flex-col items-center justify-between bg-neutral text-white w-full md:w-8/12 mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='flex items-center justify-center px-2 md:px-6'>
                        <img className='w-16 hidden rounded-full ring-2 ring-sky-600 m-2 md:block' src={StarticIcon} alt="" />
                        <div className='text-left '>
                            <h4 className='text-lg md:text-2xl lg:text-3xl text-sky-600 ease-in-out duration-1000'>Startic Field</h4>
                            <h4 className='text-sm md:text-base font-medium text-gray-300'>Frontend Developer</h4>
                        </div>
                    </div>
                    <div className='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                        <p className='text-sm md:text-base'>Nov 2021 - Jan 2022 · 3 mos</p>
                        <p className='text-sm md:text-base'>New Delhi, India · Remote</p>
                    </div>
                </div>

                <div className={`text-left p-2 transition-all ease-in-out duration-300`}>
                    <p className='text-sm lg:text-base'>As a front-end developer, my primary responsibility was to design and develop web pages that were not only aesthetically pleasing but also highly functional and user-friendly for a software-as-a-service (SAAS) product. This involved understanding the product's requirements, target audience, and business objectives to create a web experience that met those needs.</p>
                    <h4 className='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
                    <ul className='text-sm list-disc ml-6'>
                        <li> Design and develop an interactive dashboard with charts and dynamic data. </li>
                        <li>Develop different cards for product, team, marketing, and other pages. </li>
                        <li>Maintain the whole design aesthetic and responsiveness for different devices.</li>
                    </ul>
                </div>



            </div>
        </div>
    );
};

export default Experience;