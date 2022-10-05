import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header/Navbar';
import About from './components/Pages/About';
import AllProjects from './components/Pages/AllProjects';
import Blog from './components/Pages/Blog';
import MongoQA from './components/Pages/Blogs/MongoQA';
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
        <Route path='/react_qa' element={<ReactQA></ReactQA>}></Route>
        <Route path='/mongo_qa' element={<MongoQA></MongoQA>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
