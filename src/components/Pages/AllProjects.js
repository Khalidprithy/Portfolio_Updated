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
        <div className='min-h-screen m-2'>
            <h1 className='text-4xl font-bold my-6 text-center'>All Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-10/12 mx-auto gap-4 md:gap-10'>
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