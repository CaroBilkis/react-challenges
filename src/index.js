import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';

import Home from './Home';
import reportWebVitals from './reportWebVitals';

import {HashRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import QR from './01-qr/QR';
import Faq from './02-faq/Faq';
import Tracking from './03-tracking/Tracking';
import Advice from './04-advice/Advice';
import Tips from './05-tip/Tips';
import Landing from './06-landing-page/Landing';
import Intro from './07-intro/Intro';
import Pricing from './08-pricing/Pricing';
import Calculator from './09-calculator/Calculator';
import Ecommerce from './10-e-commerce/Ecommerce';
import RoomHome from './11-roomhome/RoomHome';
import HomeSpace from './12-space/HomeSpace';
import DestinationSpace from './12-space/DestinationSpace';
import CrewSpace from './12-space/CrewSpace';
import TecnologyCrew from './12-space/TechnologyCrew';


ReactDOM.render(
  <React.StrictMode>
   <HashRouter>
  
      <Routes> 
    
        <Route exact path = '' element ={<Home/>}/>
        <Route  path="/qr/"  element={<QR/>} />
        <Route  path="/faq/"  element={<Faq />} />
        <Route  path="/tracking/"  element={<Tracking />} />
        <Route  path="/advice/"  element={<Advice/>} />
        <Route  path="/tips/"  element={<Tips/>} />
        <Route  path="/landing/"  element={<Landing />} />
        <Route  path="/intro/"  element={<Intro />} />
        <Route  path="/pricing/"  element={<Pricing />} />
        <Route  path="/calculator/"  element={<Calculator />} />
        <Route  path="/ecommerce/"  element={<Ecommerce />} />
        <Route  path="/roomhome/"  element={<RoomHome />} />
        <Route path="space/home" element={<HomeSpace />} />
        <Route path="space/destination" element={<DestinationSpace />} />
        <Route path="space/crew" element={<CrewSpace />} />
        <Route path="space/technology" element={<TecnologyCrew />} />
      </Routes>

     
   </HashRouter>
     
     
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
