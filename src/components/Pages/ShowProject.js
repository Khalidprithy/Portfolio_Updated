import React from 'react';

const ShowProject = ({ project }) => {
    console.log(project)
    return (
        <div className='flex flex-col md:flex-row mx-auto bg-neutral rounded-xl text-white relative'>
            <img className='w-72 rounded-xl mx-auto p-2' src={project.images[0]} alt="" />
            <div className='flex flex-col gap-2 p-2'>
                <div className='flex justify-between my-2'>
                    <h1 className='text-4xl'>{project.name}</h1>
                    <button className='btn btn-accent rounded-sm'>Details</button>
                </div>
                <h4 className='text-gray-300'>{project.title}</h4>
                <p className='font-semibold text-primary'>{project.category}</p>
                <p className='text-sm text-gray-300'>{project.description}</p>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Frontend: </h1>
                    {
                        project.frontend.map(item => <span className='bg-primary text-sm px-2 p-1 rounded-full hover:bg-red-500'>{item}</span>)
                    }
                </div>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Backend: </h1>
                    {
                        project.backend.map(item => <span className='bg-info text-sm px-2 p-1 rounded-full hover:bg-red-500'>{item}</span>)
                    }
                </div>
                <div className='hidden lg:block'>
                    <h1 className='font-semibold'>Features </h1>

                    {
                        project.bulletPoint.map(item =>
                            <ul key={item.id} className='text-sm p-1 rounded-lg hover:text-primary mb-2'><span className='font-bold'>{item.id + 1} -</span> {item.name}</ul>
                        )
                    }

                </div>

                <h1 className='text-center text-xl font-medium'>Live Site and GitHub links</h1>
                <div className='flex justify-around gap-2'>
                    <button className='btn btn-success btn-xs rounded-md'>Live Site</button>
                    <button className='btn btn-success btn-xs rounded-md'>Frontend</button>
                    <button className='btn btn-success btn-xs rounded-md'>Backend</button>
                </div>
            </div>

        </div>
    );
};

export default ShowProject;