import React from 'react';

const ShowReactQa = ({ question }) => {
    return (
        <div>
            <h1>{question.question}</h1>
            <p>{question.answer}</p>
        </div>
    );
};

export default ShowReactQa;