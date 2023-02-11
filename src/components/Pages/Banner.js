import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom'
import profileImg from '../../images/profile.jpg'

const Banner = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/about')
    }


    return (
        <div className='m-2 my-5'>
            <div className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center pt-0 md:pt-10 bg-neutral rounded-2xl w-full md:w-10/12 mx-auto ease-in-out duration-500 ">
                <div className="text-center mx-2 my-4 md:mx-auto order-2 md:order-1">
                    <div className="max-w-md text-white p-2">
                        <p className='text-xl font-semibold'>Hello There</p>
                        <h1 className="text-5xl font-bold text-center">I'm <br /> Khalid Bin Alam</h1>
                        <TypeAnimation
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                'Frontend Developer',
                                1500,
                                'Backend Developer',
                                1500,
                                'ReactJS Developer',
                                1500,
                                'Full Stack Developer',
                                1500,
                            ]}
                            speed={40} // Custom Speed from 1-99 - Default Speed: 40
                            className="text-2xl font-medium font-mono text-green-600"
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                        />

                        <p className="py-6 px-2 text-sm md:text-base lg:text-lg">I have experience working with HTML5, CSS3, JavaScript, ES6, Bootstrap, Tailwind, Node.js, and MongoDB. I can work with Figma and Adobe XD. I have built a few Full-stack applications. At this moment, I am seeking a professional working environment to help build real-life applications and grow as a web developer</p>
                        <a
                            href='#contactMe'
                            className="btn btn-accent text-white animate-pulse">Hire Me</a>
                        <button
                            onClick={handleLearnMore}
                            className="btn btn-info text-white ml-2">Learn More</button>
                    </div>
                </div>
                <img src={profileImg} alt="" className="w-2/4 md:w-3/4 shadow-2xl rounded-full mx-auto order-1 md:order-2 m-10" />
            </div>
        </div>
    );
};

export default Banner;