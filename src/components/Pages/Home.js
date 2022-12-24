import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import Summary from './Summary';

const Home = () => {
    return (
        <div className='mx-2'>
            <Banner></Banner>
            <Experience />
            <Summary></Summary>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;