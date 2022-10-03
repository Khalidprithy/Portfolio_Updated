import React, { useEffect, useState } from 'react';
import ShowReactQa from './ShowReactQa';

const ReactQA = () => {

    const [reactQa, setReactQa] = useState([]);


    useEffect(() => {
        fetch('react.json')
            .then(res => res.json())
            .then(data => setReactQa(data))
    }, []);

    return (
        <div>
            <div>
                {
                    reactQa.map(question => <ShowReactQa
                        key={question._id}
                        question={question}
                    >

                    </ShowReactQa>)
                }
            </div>

        </div>
    );
};

export default ReactQA;