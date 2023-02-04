import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const ShowProject = ({ project }) => {

    console.log(project.links[0].link)

    return (
        <div className='flex flex-col md:flex-row mx-auto bg-neutral rounded-md text-white relative'>
            <div className='w-full md:w-4/12 h-[400px] md:h-[500px] lg:h-[600px] overflow-auto overflow-x-hidden shadow-2xl rounded-md mx-auto order-1 md:order-2'>
                <PerfectScrollbar>
                    <img src={project.images[0]} alt="" className="p-1 rounded-lg" />
                </PerfectScrollbar>
            </div>
            {/* <img className='w-72 h-[300px] overflow-scroll rounded-xl mx-auto p-2' src={project.images[0]} alt="" /> */}
            <div className='w-full md:w-8/12 flex flex-col gap-2 p-2'>
                <div className='flex justify-between my-2'>
                    <h1 className='text-4xl'>{project.name}</h1>
                    <a href={project.links[0].link} target="_blank" rel="noreferrer" className='btn btn-info btn-sm rounded-md'>Visit</a>
                </div>
                <h4 className='text-gray-300'>{project.title}</h4>
                <p className='font-semibold text-primary'>{project.category}</p>
                <p className='text-sm text-gray-300'>{project.description}</p>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Frontend: </h1>
                    {
                        project.frontend.map(item => <span className='bg-teal-600 text-sm px-2 p-1 rounded hover:bg-red-500'>{item}</span>)
                    }
                </div>
                <div className='flex flex-wrap gap-1'>
                    <h1 className='font-semibold'>Backend: </h1>
                    {
                        project.backend.map(item => <span className='bg-sky-600 text-sm px-2 p-1 rounded hover:bg-red-500'>{item}</span>)
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
                    {
                        project.links.map(link =>
                            <a key={link.id} href={link.link} target="_blank" rel="noreferrer" className='btn btn-success btn-xs hover:bg-green-600 rounded-sm'>{link.name}</a>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowProject;