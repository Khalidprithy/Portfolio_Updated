import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as ScrollToTopIcon } from './arrow.svg';
import Navbar from './components/Header/Navbar';
import Footer from './components/Shared/Footer';

import About from './components/Pages/About';
import AllProjects from './components/Pages/AllProjects';
import Blog from './components/Pages/Blog';
import CssQA from './components/Pages/Blogs/CssQA';
import DailyBlogMERN from './components/Pages/Blogs/DailyBlogMERN';
import HtmlQA from './components/Pages/Blogs/HtmlQA';
import JavaScriptQA from './components/Pages/Blogs/JavaScriptQA';
import MongoQA from './components/Pages/Blogs/MongoQA';
import NodeQA from './components/Pages/Blogs/NodeQA';
import ReactQA from './components/Pages/Blogs/ReactQA';
import WakeUpBlog from './components/Pages/Blogs/WakeUpBlog';
import WorkOutBlog from './components/Pages/Blogs/WorkOutBlog';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className='bg-white dark:bg-gray-700 pt-3 overflow-auto'>
      <PerfectScrollbar>
        <Navbar />
        <div className='mt-28'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<AllProjects />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/html_qa' element={<HtmlQA />} />
            <Route path='/css_qa' element={<CssQA />} />
            <Route path='/javascript_qa' element={<JavaScriptQA />} />
            <Route path='/react_qa' element={<ReactQA />} />
            <Route path='/mongo_qa' element={<MongoQA />} />
            <Route path='/node_qa' element={<NodeQA />} />
            <Route path='/wake_up' element={<WakeUpBlog />} />
            <Route path='/work_out' element={<WorkOutBlog />} />
            <Route path='/daily_blog' element={<DailyBlogMERN />} />
          </Routes>
          <ScrollToTop smooth component={<ScrollToTopIcon className='animate-pulse p-1 bg-success dark:bg-red-500 rounded-md' />} />
        </div>
        <Footer />
      </PerfectScrollbar>
    </div>
  );
}

export default App;
