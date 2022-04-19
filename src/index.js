import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';

import Home from './Home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QR from './01-qr/QR';
import Faq from './02-faq/Faq';
import Tracking from './03-tracking/Tracking';
import Advice from './04-advice/Advice';
import Tips from './05-tip/Tips';
import Landing from './06-landing-page/Landing';
import Intro from './07-intro/Intro';


ReactDOM.render(
  <React.StrictMode>
     <Router>
      <Routes> 
    
        <Route path='/react-challenges' exact element={<Home/>}/>
        <Route path="/react-challenges/qr" exact element={<QR/>} />
        <Route path="/react-challenges/faq" exact element={<Faq />} />
        <Route path="/react-challengestracking" exact element={<Tracking />} />
        <Route path="/react-challenges/advice" exact element={<Advice/>} />
        <Route path="/react-challenges/tips" exact element={<Tips/>} />
        <Route path="/react-challenges/landing" exact element={<Landing />} />
        <Route path="/react-challenges/intro" exact element={<Intro />} />
      </Routes>

      </Router>
     
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
