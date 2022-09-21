import './App.css';
import Navbar from './components/Header/Navbar';
import Home from './components/Pages/Home';
import Footer from './components/Shared/Footer';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
