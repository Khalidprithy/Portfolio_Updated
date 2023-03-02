import React from 'react';
import profileImg from '../../images/profile.jpg'

const About = () => {
    return (
        <div className='m-2 my-10'>
            <div className="h-fit bg-neutral rounded-2xl w-full md:w-10/12 mx-auto ease-in-out duration-500 mb-4">

                <div className=" text-white p-2 md:p-10">
                    <h4 className="text-6xl font-bold text-center">I'm <br /> Khalid Bin Alam</h4>
                    {/* <h4 className='text-base md:text-lg mt-2 font-semibold text-gray-400'>Frontend Engineer</h4> */}
                    <p className='text-sm md:text-base mt-4 text-left'>As a Frontend Engineer with more than a year of experience, I am passionate about creating visually appealing and user-friendly web applications using the latest technologies and design trends. I specialize in developing robust React.js applications while also continuously improving my skills in Back-end development. My ultimate goal is to create immersive user experiences that exceed client expectations and help them achieve their business objectives.
                        <br />
                        <br />
                        I discovered my passion for designing and building projects while working on DIY projects during my free time. This led me to explore various web development technologies, programming languages, and frameworks. Over time, I developed expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, React.js, Node.js, Express.js, MongoDB, Firebase, and Heroku. Additionally, I have basic knowledge of Python, C++, and Data Structures and am interested in learning Django.
                        <br />
                        <br />
                        My specialties include responsive design and problem-solving, and I enjoy working collaboratively with cross-functional teams. I have extensive experience in creating visually appealing UIs and integrating them with Back-end systems to ensure a seamless user experience. I also have experience in developing interactive dashboards, custom-designed cards, and authentication and authorization systems.
                        <br />
                        <br />
                        Looking to the future, I find mobile application development particularly fascinating and am already exploring React Native. I am excited to continue learning and growing in my field while creating innovative solutions for clients. If you're interested in collaborating on a project or learning more about my experience, please don't hesitate to get in touch.</p>
                </div>
            </div>
            <div className="h-fit flex justify-center items-center bg-white border-4 border-neutral rounded-2xl w-full md:w-8/12 mx-auto ease-in-out duration-500 ">
                <h4 className='text-center text-4xl py-4'>Services I Provide</h4>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h4 className='text-4xl text-center'>Frontend Development</h4>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h4 className='text-4xl text-center'>React Application</h4>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h4 className='text-4xl text-center'>Backend Development</h4>
            </div>
            <div className='bg-neutral h-24 rounded-2xl w-full md:w-8/12 mx-auto mt-4 flex items-center justify-center text-white hover:text-accent'>
                <h4 className='text-4xl text-center'>MERN Application</h4>
            </div>
        </div>
    );
};

export default About;