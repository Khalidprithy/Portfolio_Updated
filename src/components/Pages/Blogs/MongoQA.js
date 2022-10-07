import React, { useEffect, useState } from 'react';
import ShowMongoQA from './ShowMongoQA';

const MongoQA = () => {

    const [mongoQa, setMongoQa] = useState([]);

    useEffect(() => {
        fetch('mongodb.json')
            .then(res => res.json())
            .then(data => setMongoQa(data))
    }, []);

    return (
        <div className='m-2'>
            <h1 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>40+ MongoDB Interview Q&A</h1>
            <div className='flex flex-col gap-4'>
                {
                    mongoQa.map(question => <ShowMongoQA
                        key={question._id}
                        question={question}
                    >
                    </ShowMongoQA>)
                }
            </div>
        </div>
    );
};

export default MongoQA;