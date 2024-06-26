import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const modeColor = {
    dark: {
      backgroundColor: '#4d3c78',
      color: 'white'
    },
    light: {
      backgroundColor: 'white',
      color: 'black'
    }
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = modeColor.dark.backgroundColor;
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = modeColor.dark.backgroundColor;
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
   <BrowserRouter>
  <Navbar
    title="TextUtils"
    about="About"
    home="Home"
    mode={mode}
    modeColor={modeColor}
    toggleMode={toggleMode}
  />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route
        exact
        path="/"
        element={
          <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
            modeColor={modeColor}
          />
        }
      />
    </Routes>
  </div>
</BrowserRouter>

   
    
    </>
  );
}

export default App;
