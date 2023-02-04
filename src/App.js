import { Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import Navbar from './components/Header/Navbar';
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
import Footer from './components/Shared/Footer';
import { ReactComponent as MySVG } from "./arrow.svg";


function App() {
  return (
    <div className='bg-white dark:bg-gray-700 pt-3'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<AllProjects></AllProjects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/html_qa' element={<HtmlQA></HtmlQA>}></Route>
        <Route path='/css_qa' element={<CssQA></CssQA>}></Route>
        <Route path='/javascript_qa' element={<JavaScriptQA></JavaScriptQA>}></Route>
        <Route path='/react_qa' element={<ReactQA></ReactQA>}></Route>
        <Route path='/mongo_qa' element={<MongoQA></MongoQA>}></Route>
        <Route path='/node_qa' element={<NodeQA></NodeQA>}></Route>
        <Route path='/wake_up' element={<WakeUpBlog />}></Route>
        <Route path='/work_out' element={<WorkOutBlog />}></Route>
        <Route path='/daily_blog' element={<DailyBlogMERN />}></Route>
      </Routes>

      <ScrollToTop smooth component={<MySVG className='animate-pulse p-1 bg-accent dark:bg-red-500 rounded-md' />} />
      <Footer></Footer>
    </div>
  );
}

export default App;
