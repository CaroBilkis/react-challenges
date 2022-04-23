import Navigation from "../components/Navigation";
import React,{useState, useEffect} from 'react';

import { BsFillPauseFill } from "react-icons/bs";



function Advice() {
    const [advices, setAdvices] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                })
            )
    }, []);
    
    function getNewAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(
                (advices => {
                    setAdvices(advices.slip.advice)
                    setId(advices.slip.id)
                })
            )
    }
  return (
  <div>
  
    <div className='bg-dark-blue text-body-medium h-screen mx-auto md:p-16 py-8 sm:py-8'>
    <Navigation />
    
    <div className='bg-grayish-blue w-340 md:w-540 sm:w-340 p-8 pb-0 rounded-xl mx-auto sm:mt-20 mt-20 '>

    <div className='flex flex-col gap-4'>
     <h1 className='text-neon-green font-advice text-center text-sm uppercase  mx-auto'>Advice #{id}</h1>
        <h1 className='text-body-lg font-bold font-advice text-center text-light-cyan w-280 md:w-440 sm:w-280  mx-auto '>{advices} </h1>
        <div className='flex flex-row gap-2 mt-2  justify-center items-center'>
            <div className='border-b-1 h-0 border-light-cyan md:px-24 px-12 sm:px-12 align-middle bg-blue-300'></div>
            <BsFillPauseFill color='hsl(193, 38%, 86%)'/>
            <div className='border-b-1 h-0 border-light-cyan md:px-24 px-12 sm:px-12 bg-blue-300'></div>
        </div>
    
     </div>
        
        <div onClick={getNewAdvice}  className='bg-neon-green  mx-auto relative inset-y-6 rounded-full p-3 w-12 justify-center hover:bg-green-400'>
            <img className='transform ease-in-out duration-100 hover:rotate-45' src="04-advice/icon-dice.png" alt="" />        
        </div>
    </div>
    
  
    </div>
   </div>

 
  );
}

export default Advice;
