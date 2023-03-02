import React, { useEffect, useState } from 'react';
import ShowProject from './ShowProject';


const AllProjects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    return (
        <div className='min-h-screen m-4'>
            <h4 className='text-4xl font-bold my-6 text-center dark:text-gray-200'>All Projects</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 w-full mx-auto gap-4 md:gap-10'>
                {
                    projects.map(project => <ShowProject
                        key={project._id}
                        project={project}
                    ></ShowProject>)
                }
            </div>
        </div>
    );
};

export default AllProjects;