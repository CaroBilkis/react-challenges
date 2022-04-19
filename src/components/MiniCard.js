
import { BsThreeDots } from "react-icons/bs";
import React from 'react';

const MiniCard = ({ title, hours, time, color, icon }) =>  {


  return (
  <div className='transform ease-in-out duration-300 hover:translate-y-1'>

        
     <div className='flex flex-col  h-56'>
         <div className= {color +' p-8 w-72 md:w-72 lg:w-60 rounded-2xl z-0 overflow-hidden'}> 
            <div className='relative -top-8 left-32' >
            {icon}
            </div>    
        </div>
        <div className='bg-m-blue-800 p-8  w-72 md:w-72 lg:w-60 rounded-2xl z-40 relative -top-6'>
            <div className='w-48 flex flex-col gap-4'>
            <div className='flex flex-row  justify-between '>
            <h1 className='text-white font-medium'>{title}</h1>
            <BsThreeDots color='#bdc1ff'/>
            </div>
            <h1 className='text-white text-5xl font-light'> {hours}</h1>
            <h1 className='text-m-blue-200 text-sm'>{time}</h1>
            </div>
        </div>

     </div> 

    </div> 
 

  );
}

export default MiniCard;
