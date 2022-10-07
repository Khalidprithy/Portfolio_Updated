import React, { useEffect, useState } from 'react';
import ShowCssQA from './ShowCssQA';

const CssQA = () => {

    const [cssQa, setCssQa] = useState([]);

    useEffect(() => {
        fetch('css.json')
            .then(res => res.json())
            .then(data => setCssQa(data))
    }, []);
    return (
        <div className='m-2'>
            <h1 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>25 CSS Interview Q&A</h1>
            <div className='flex flex-col gap-4'>
                {
                    cssQa.map(question => <ShowCssQA
                        key={question._id}
                        question={question}
                    >
                    </ShowCssQA>)
                }
            </div>
        </div>
    );
};

export default CssQA;