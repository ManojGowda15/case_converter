import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const[mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
};

  return (
    <>
    <Navbar  mode = {mode} toggleMode = {toggleMode} />
    <Home mode = {mode}/>
    {/* <About/> */}
    <Footer mode = {mode}/>
    </>
  );
}

export default App;
