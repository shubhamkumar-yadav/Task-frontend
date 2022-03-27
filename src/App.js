import React from 'react';
import './App.css';
import { Display } from './components/Display.jsx';
import { Home } from './components/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/users' element={<Display/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;

    
