import React, { useEffect, useState } from 'react';
import ShowNodeQA from './ShowNodeQA';

const NodeQA = () => {

    const [nodeQa, setNodeQa] = useState([]);

    useEffect(() => {
        fetch('node.json')
            .then(res => res.json())
            .then(data => setNodeQa(data))
    }, []);

    return (
        <div className='m-2'>
            <h4 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>40+ Node Interview Q&A</h4>
            <div className='flex flex-col gap-4'>
                {
                    nodeQa.map(question => <ShowNodeQA
                        key={question._id}
                        question={question}
                    >
                    </ShowNodeQA>)
                }
            </div>
        </div>
    );
};

export default NodeQA;