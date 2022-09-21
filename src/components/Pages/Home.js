import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Summary></Summary>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;