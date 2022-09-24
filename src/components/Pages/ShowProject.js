import React from 'react';

const ShowProject = ({ project }) => {
    console.log(project)
    return (
        <div className='flex flex-col md:flex-row mx-auto bg-neutral rounded-xl text-white hover:scale-105 ease-out duration-300'>
            <img className='w-1/2 rounded-lg mx-auto' src={project.images[0]} alt="" />
            <div className='flex flex-col gap-2 p-2 relative'>
                {/* <div id="animation-carousel" class="relative" data-carousel="static">
                    {
                        project.images.map(image => <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <img className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' src={image} alt="Burger" />
                            <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                    <span class="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                    <span class="sr-only">Next</span>
                                </span>
                            </button>
                        </div>)
                    }
                </div> */}
                <h1 className='text-4xl text-center my-1'>{project.name}</h1>
                <h4 className='text-gray-300'>{project.title}</h4>
                <p className='font-semibold text-primary'>{project.category}</p>
                <p className='text-sm text-gray-300'>{project.description}</p>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Frontend: </h1>
                    {
                        project.frontend.map(item => <span className='bg-primary text-sm p-1 rounded-lg hover:bg-red-500'>{item}</span>)
                    }
                </div>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Backend: </h1>
                    {
                        project.backend.map(item => <span className='bg-info text-sm p-1 rounded-lg hover:bg-red-500'>{item}</span>)
                    }
                </div>
                <div className=''>
                    <h1 className='font-semibold'>Features </h1>

                    {
                        project.bulletPoint.map(item =>
                            <ul className='text-sm p-1 rounded-lg hover:text-primary mb-2'><span className='font-bold'>{item.id + 1} -</span> {item.name}</ul>
                        )
                    }

                </div>


                <div className='flex justify-around gap-2 absolute bottom-0 left-0 m-2'>
                    <button className='btn btn-accent btn-xs rounded-md'>Live Site</button>
                    <button className='btn btn-accent btn-xs rounded-md'>Frontend</button>
                    <button className='btn btn-accent btn-xs rounded-md'>Backend</button>
                </div>
            </div>

        </div>
    );
};

export default ShowProject;