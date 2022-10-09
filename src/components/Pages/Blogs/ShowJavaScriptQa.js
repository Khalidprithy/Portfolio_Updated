import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const ShowJavaScriptQa = ({ question }) => {
    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border hover:border-neutral'>
            <h1 className='text-2xl font-semibold'>{question.index + 1}. {question.question}</h1>
            {
                question.answer &&
                <p className='bg-neutral text-white text-xl p-2 rounded-lg mt-2'>{question.answer}</p>
            }

            <ul className='ml-2 flex flex-col'>
                {
                    question.points &&
                    question?.points.map(point => <li className='flex items-center gap-1'>
                        <FaHandPointRight className='w-10'></FaHandPointRight>
                        <p className=''>{point}</p>
                    </li>)
                }
            </ul>
            <p className='p-2'>{question?.summary}</p>
        </div>
    );
};

export default ShowJavaScriptQa;