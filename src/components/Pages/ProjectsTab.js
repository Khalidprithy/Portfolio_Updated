import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import FullStackProjects from './Projects/FullStackProjects';
import FrontendProjects from './Projects/FrontendProjects';
import BackendProjects from './Projects/BackendProjects';

const ProjectsTab = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/projects')
    }
    return (
        <div>
            <div className='flex items-center justify-between bg-white text-black border-2 shadow-lg outline-1 w-full md:w-8/12 mx-auto h-24 rounded-xl mb-4'>
                <h4 className='text-2xl font-semibold m-2'>Top Projects</h4>
                <div className='flex items-center'>
                    <p className='text-2xl font-semibold m-2'>All Projects</p>
                    <BsFillArrowRightCircleFill
                        onClick={handleNavigate}
                        className='text-5xl m-2 text-accent cursor-pointer animate-none md:animate-ping hover:animate-pulse'></BsFillArrowRightCircleFill>
                </div>
            </div>
            <div >
                <div className="w-full md:w-8/12 mx-auto">
                    <ul
                        className="flex items-center gap-4 mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px mt-2 md:mt-0 last:mr-0 flex-auto text-center w-full md:w-44">
                            <a
                                className={
                                    "text-base md:text-xl font-bold capitalize px-5 py-5 mb-4 shadow rounded-md block leading-normal " +
                                    (openTab === 1
                                        ? "text-white bg-neutral "
                                        : "text-gray-800 bg-white border-2 border-gray-900")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Full-stack
                            </a>
                        </li>
                        <li className="-mb-px mt-2 md:mt-0 last:mr-0 flex-auto text-center w-full md:w-44">
                            <a
                                className={
                                    "text-base md:text-xl font-bold capitalize px-5 py-5 mb-4 shadow rounded-md block leading-normal " +
                                    (openTab === 2
                                        ? "text-white bg-neutral "
                                        : "text-gray-800 bg-white border-2 border-gray-900")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Frontend
                            </a>
                        </li>
                        <li className="-mb-px mt-2 md:mt-0 last:mr-0 flex-auto text-center w-full md:w-44">
                            <a
                                className={
                                    "text-base md:text-xl font-bold capitalize px-5 py-5 mb-4 shadow rounded-md block leading-normal " +
                                    (openTab === 3
                                        ? "text-white bg-neutral "
                                        : "text-gray-800 bg-white border-2 border-gray-900")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Backend
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                    <div className="px-1 md:px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <FullStackProjects />
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <FrontendProjects />
                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <BackendProjects />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsTab;