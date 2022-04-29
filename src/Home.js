import React, { useState, Suspense } from 'react';

import { NavLink } from "react-router-dom";


function Home() {

  return(
    
  <div className=''>
    
    <div className='container w-max h-auto mx-auto m-4 p-4'> 
    <div>
    <h1 className='text-6xl font-bold text-center'>Front-end challenges</h1>
    <h1 className='text-4xl font-bold text-center'>React and Tailwindcss</h1>
    </div>
   <ul className='flex lg:flex-row md:flex-wrap sm:flex-col flex-col gap-8 mt-6   '>
    
    
    <li className='shadow px-4 py-2 rounded-md lg:w-440  transform ease-in-out duration-300 mx-auto  hover:-translate-y-1'> <NavLink className="nav-link" to="/qr/">
    <img className='lg:w-96 ' src="./01-qr/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>QR code component</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md lg:w-440  transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/faq/">
    <img className='lg:w-96' src="./02-faq/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>FAQ accordion card</h1>
    </NavLink>
    </li>
    
    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/tracking/">
    <img className='lg:w-96' src="./03-tracking/desktop-preview-3.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Time tracking dashboard</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/advice/">
    <img className='lg:w-96' src="./04-advice/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Advice generator app</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/tips/">
    <img className='lg:w-96' src="./05-tip/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Tip calculator app</h1>
    </NavLink>
    </li>
   
    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/landing/">
    <img className='lg:w-96' src="./06-landing-page/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Sunnyside agency landing page</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/intro/">
    <img className='lg:w-96' src="./07-intro/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Intro section with dropdown navigation</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/pricing/">
    <img className='lg:w-96' src="./08-pricing/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Interactive pricing component</h1>
    </NavLink>
    </li>

    <li className='shadow px-4 py-2 rounded-md  lg:w-440 transform ease-in-out duration-300 mx-auto hover:-translate-y-1'> <NavLink className="nav-link" to="/calculator/">
    <img className='lg:w-96' src="./08-calculator/desktop-preview.jpg" alt="" />
    <h1 className='text-2xl font-semibold mt-2'>Multi theme calculator</h1>
    </NavLink>
    </li>
   </ul>

    
    </div>
  </div>

  );
}

export default Home;
