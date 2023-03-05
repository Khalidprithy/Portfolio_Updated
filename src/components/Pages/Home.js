import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Experience from './Experience';
import ProjectsTab from './ProjectsTab';
import Summary from './Summary';
// import Projects from './Projects';

const Home = () => {
    return (
        <div className='mx-2 border border-red-600'>
            <Banner></Banner>
            <Experience />
            <Summary></Summary>
            <ProjectsTab />
            {/* <Projects></Projects> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;