import React from 'react';

const ShowProject = ({ project }) => {
    console.log(project)
    return (
        <div className='flex flex-col md:flex-row mx-auto bg-neutral rounded-xl text-white'>
            <img className='w-1/2 rounded-lg' src={project.images[0]} alt="" />
            <div className='flex flex-col gap-2 p-2'>
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

                <div className='flex justify-around gap-2'>
                    <button className='btn btn-accent btn-sm'>Live</button>
                    <button className='btn btn-accent btn-sm'>Live</button>
                    <button className='btn btn-accent btn-sm'>Live</button>
                </div>
            </div>

        </div>
    );
};

export default ShowProject;