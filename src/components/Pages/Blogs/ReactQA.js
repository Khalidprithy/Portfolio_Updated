import React, { useEffect, useState } from 'react';
import ShowReactQa from './ShowReactQa';

const ReactQA = () => {


    return (
        <div className='m-2'>
            <h1 className='text-center text-4xl font-medium mt-10 border border-neutral w-full md:w-fit hover:w-6/12  rounded-lg mx-auto p-4 hover:bg-neutral hover:text-white mb-10 ease-in-out duration-300'>20+ React Interview Q&A</h1>
            <div className='flex flex-col gap-4'>

                <ShowReactQa />

            </div>

        </div>
    );
};

export default ReactQA;