import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

import { HiOutlineMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yjyfszl', 'template_l26d6fj', form.current, '9CH62NioqIjo3L1fc')
            .then((result) => {
                toast.success('Email sent successfully')
            }, (error) => {
                toast.error('Could not sent Email, Try again')
            });
    };

    return (
        <div className='m-2'>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg w-full md:w-8/12 mx-auto h-24 rounded-xl mb-6'>
                <h4 className='text-2xl font-semibold m-2'>Contact me</h4>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>Here</p>
                    <BsFillArrowDownCircleFill className='text-5xl  m-2 text-accent animate-bounce'></BsFillArrowDownCircleFill>
                </div>
            </div>

            <div id='contactMe' className="h-fit grid grid-cols-1 md:grid-cols-2 justify-center items-center lg:p-2 rounded-2xl w-full md:w-10/12 mx-auto ease-in-out duration-500 bg-white dark:bg-gray-400 border-2 shadow-lg ">
                <div className="text-center p-4 text-black lg:text-left mx-auto">
                    <h4 className="text-4xl lg:text-5xl font-bold">Let's get in touch</h4>
                    <p className="py-6">Feel free to contact me to discuss about any kind of Front-end Back-end projects. <br /> I am open learn and try something new.</p>
                    <div>
                        <div className="text pl-3">
                            <p className='flex items-center gap-2'> <HiLocationMarker></HiLocationMarker> <span>Address:</span> <a href="https://www.google.com.bd/maps/dir/23.755121,90.3600549//@23.7550124,90.3603433,20z/data=!4m2!4m1!3e0?hl=en" target="_blank" rel="noreferrer">Mohammodpur, Dhaka</a></p>
                        </div>
                        <div className="text pl-3">
                            <p className='flex items-center gap-2'> <HiPhone></HiPhone> <span>Phone:</span> <a href="tel://+8801842502822">+ 88 01842502822</a></p>
                        </div>
                        <div className="text pl-3">
                            <p className='flex items-center gap-2'> <HiOutlineMail></HiOutlineMail> <span>Email:</span> <a href="mailto:khalidprithy@gmail.com">khalidprithy@gmail.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-10/12 min-h-[320px] flex-shrink-0 mx-auto shadow-2xl bg-neutral rounded-xl text-white relative">
                    <div className="px-4 mt-4 ">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex my-2'>
                                <label className='font-bold mr-2'>Name</label>
                                <input className='rounded-md px-3 py-1 text-black w-full h-8' type="text" name="user_name" required autoComplete="off" />
                            </div>
                            <div className='flex my-2'>
                                <label className='font-bold mr-3'>Email</label>
                                <input className='rounded-md px-3 py-1 text-black w-full h-8' type="email" name="user_email" required autoComplete="off" />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label className='font-bold mr-3 text-left'>Message</label>
                                <textarea className='rounded-md px-3 py-1 text-black mt-1 h-32' name="message" />
                            </div>
                            <input className='btn btn-sm btn-accent rounded-md absolute bottom-4' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;