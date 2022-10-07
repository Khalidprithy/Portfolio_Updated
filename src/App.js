import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import About from './components/Pages/About';
import AllProjects from './components/Pages/AllProjects';
import Blog from './components/Pages/Blog';
import CssQA from './components/Pages/Blogs/CssQA';
import HtmlQA from './components/Pages/Blogs/HtmlQA';
import JavaScriptQA from './components/Pages/Blogs/JavaScriptQA';
import MongoQA from './components/Pages/Blogs/MongoQA';
import NodeQA from './components/Pages/Blogs/NodeQA';
import ReactQA from './components/Pages/Blogs/ReactQA';
import Home from './components/Pages/Home';
import Footer from './components/Shared/Footer';


function App() {
  return (
    <div >
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
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
