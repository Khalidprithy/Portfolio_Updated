import React, { useEffect, useState } from 'react';
import ShowHtmlQa from './ShowHtmlQa';

const HtmlQA = () => {

    const [htmlQa, setHtmlQa] = useState([]);

    useEffect(() => {
        fetch('htmlqa.json')
            .then(res => res.json())
            .then(data => setHtmlQa(data))
    }, []);

    return (
        <div className='m-2'>
            <h1 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>25 HTML Interview Q&A</h1>
            <div className='flex flex-col gap-4'>
                {
                    htmlQa.map(question => <ShowHtmlQa
                        key={question._id}
                        question={question}
                    >
                    </ShowHtmlQa>)
                }
            </div>
        </div>
    );
};

export default HtmlQA;