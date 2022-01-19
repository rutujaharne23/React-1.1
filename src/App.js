import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#172b49';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'React 1.1 - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'React 1.1 - Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="React 1.1" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3">
            <Switch>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/">
                <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
              </Route>
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
