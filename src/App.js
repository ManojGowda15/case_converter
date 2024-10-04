import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Footer from './components/Footer';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type='info') => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null),1000);
  }

  const toggleMode = () => {
    setMode(!mode);
    showAlert(`Mode has been switched to ${!mode ? 'Dark' : 'Light'}!`, 'success');
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Home mode={mode} alert={alert} />
      {/* <About/> */}
      <Footer mode={mode} />
    </>
  );
}

export default App;
