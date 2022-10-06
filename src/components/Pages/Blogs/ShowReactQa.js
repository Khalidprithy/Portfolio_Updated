import React from 'react';

const ShowReactQa = ({ question }) => {


    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border hover:border-neutral'>
            <h1 className='text-2xl font-semibold'>{question.index + 1}. {question.question}</h1>
            <p className='bg-neutral text-white p-2 rounded-lg mt-2'>{question.answer}</p>
        </div>
    );
};

export default ShowReactQa;