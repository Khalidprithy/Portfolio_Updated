import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const ShowNodeQA = ({ question }) => {
    return (
        <div className='p-2 w-full md:w-8/12 mx-auto rounded-lg border hover:border-neutral'>
            <h4 className='text-2xl font-semibold'>{question.index + 1}. {question.question}</h4>
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
            <p>{question?.summary}</p>
        </div>
    );
};

export default ShowNodeQA;