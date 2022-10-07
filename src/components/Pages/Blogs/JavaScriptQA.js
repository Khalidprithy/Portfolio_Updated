import React, { useEffect, useState } from 'react';
import ShowJavaScriptQa from './ShowJavaScriptQa';

const JavaScriptQA = () => {
    const [javaScriptQa, setJavaScriptQa] = useState([]);

    useEffect(() => {
        fetch('javascript.json')
            .then(res => res.json())
            .then(data => setJavaScriptQa(data))
    }, []);
    return (
        <div className='m-2'>
            <h1 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>45 JavaScript Interview Q&A</h1>
            <div className='flex flex-col gap-4'>
                {
                    javaScriptQa.map(question => <ShowJavaScriptQa
                        key={question._id}
                        question={question}
                    >
                    </ShowJavaScriptQa>)
                }
            </div>
        </div>
    );
};

export default JavaScriptQA;