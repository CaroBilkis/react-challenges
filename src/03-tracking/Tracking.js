

import { BsThreeDots } from "react-icons/bs";

import Navigation from "../components/Navigation";
import MiniCard from '../components/MiniCard';
import React,{useState} from 'react';

function Tracking() {

 const iwork = [<svg  width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="m18.687 10.43 15.464 30.906c.31.682.743 1.322 1.3 1.88.558.557 1.198.99 1.714 1.217L68.237 59.98 52.484 75.732a8.025 8.025 0 0 1-11.355 0L2.934 37.538a8.025 8.025 0 0 1 0-11.356L18.687 10.43Zm19.345-7.99 10.839 10.838 2.065-2.064a5.845 5.845 0 0 1 8.258 0l8.258 8.259a5.845 5.845 0 0 1 0 8.258l-2.064 2.064 10.839 10.84a8.025 8.025 0 0 1 0 11.355l-4.728 4.728L39.126 40.53a1.963 1.963 0 0 1-.578-.413 1.963 1.963 0 0 1-.413-.578L21.95 7.168l4.728-4.728a8.025 8.025 0 0 1 11.355 0Zm17.033 12.903-2.064 2.065 8.258 8.258 2.064-2.064-8.258-8.259Z" fill="#D96C47" fill-rule="nonzero"/></svg>]
 const iexercise = [<svg  width="81" height="55" xmlns="http://www.w3.org/2000/svg"><path d="m33.357.579 16.447.426c.33.009.645.144.88.38l9.953 9.953a4.946 4.946 0 0 1 1.451 3.311l.514 12.87c.02.503.433.895.937.894l9.595-.05a4.438 4.438 0 0 1 4.437 4.43v.26c0 1.164-.453 2.259-1.277 3.082a4.334 4.334 0 0 1-3.083 1.277h-15.77c-2.347 0-4.393-2.045-4.393-4.393l-.001-8.405-12.05-.009.01 15.17c.001.426-.21.826-.56 1.067l-18.098 12.41c-1.363.849-2.958 1.033-4.426.537a5.147 5.147 0 0 1-1.994-1.237 5.247 5.247 0 0 1-1.193-1.85c-.875-2.293.074-4.934 2.256-6.277l12.303-8.973.252-11.28-13.556.442a1.291 1.291 0 0 1-.957-.377L2.237 11.439c-1-.999-1.55-2.38-1.513-3.792a5.124 5.124 0 0 1 1.714-3.71c2.042-1.84 5.234-1.688 7.267.345l8.576 8.576 29.444-1.635-2.133-2.133-12.263.347a4.434 4.434 0 0 1-3.294-1.28l-.016-.015a4.409 4.409 0 0 1-1.294-3.307c.08-2.347 2.16-4.255 4.632-4.256Zm33.78 11.774c3.025-3.025 7.945-3.025 10.97 0 3.024 3.025 3.024 7.944 0 10.97-3.025 3.024-7.945 3.024-10.97 0-3.024-3.026-3.025-7.945 0-10.97Z" fill="#29BA66" fill-rule="nonzero"/></svg>];
 const isocial = [<svg  width="75" height="100" xmlns="http://www.w3.org/2000/svg"><g fill="#5A1CBB" fill-rule="nonzero"><path d="M45.834 46.627c4.78 4.78 13.1 5.754 19.257-.403 5.2-5.199 5.198-13.657 0-18.855L47.151 9.428C42.335 4.614 34.02 3.7 27.892 9.83c-4.701 4.7-5.151 12.066-1.352 17.277l-6.265 6.265c-1.339 1.339-.317 3.644 1.585 3.533l13.474-.777 10.499 10.499Zm11.404-11.483a2.567 2.567 0 1 1-3.629 3.631 2.567 2.567 0 0 1 3.63-3.631ZM35.745 20.909a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm12.562 5.303a2.567 2.567 0 1 1-3.63 3.63 2.567 2.567 0 0 1 3.63-3.63ZM55.16 63.698 37.219 45.756c-5.198-5.197-13.658-5.197-18.857.001-6.072 6.073-5.26 14.4-.402 19.258l10.499 10.5-.777 13.473c-.11 1.886 2.186 2.931 3.533 1.584l6.265-6.265c5.212 3.8 12.577 3.349 17.277-1.352 6.06-6.059 5.274-14.386.403-19.257ZM25.813 57.24a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.931a2.567 2.567 0 1 1 3.63-3.629 2.567 2.567 0 0 1-3.63 3.63Zm8.932 8.933a2.567 2.567 0 1 1 3.63-3.631 2.567 2.567 0 0 1-3.63 3.63Z"/></g></svg>];
 const istudy = [<svg  width="79" height="79" xmlns="http://www.w3.org/2000/svg"><path d="M33.227 1.495a1.87 1.87 0 0 1 2.646 0l1.323 1.323-27.78 27.78c-2.189 2.189-2.1 5.837.088 8.026l12.132 12.132a5.624 5.624 0 0 0 1.096 6.388 5.624 5.624 0 0 0 6.389 1.097l12.132 12.132c2.188 2.188 5.837 2.276 8.025.088l27.78-27.78 1.323 1.322a1.87 1.87 0 0 1 0 2.646L46.632 78.4a1.87 1.87 0 0 1-2.645 0L29.12 63.531a5.624 5.624 0 0 1-6.389-1.097l-5.291-5.291a5.624 5.624 0 0 1-1.097-6.388L1.478 35.89a1.87 1.87 0 0 1 0-2.646ZM59.74 22.783c1.948.27 3.83 1.117 5.325 2.612l10.583 10.583a1.87 1.87 0 0 1 0 2.646L46.544 67.727a1.87 1.87 0 0 1-2.646 0L30.67 54.498a1.872 1.872 0 0 0-2.646 0ZM49.19 6.875a1.87 1.87 0 0 1 2.647 0c4.489 4.489 5.877 8.98 6.178 12.342L27.67 49.56c.349-1.527 1.181-7.463-4.938-13.582a1.87 1.87 0 0 1 0-2.646Zm-7.936-2.646a1.87 1.87 0 0 1 2.645 0l1.323 1.323-25.134 25.134a5.619 5.619 0 0 0 0 7.938c4.005 4.005 4.2 7.696 4.043 9.335L12.15 35.978a1.87 1.87 0 0 1 0-2.646Z" fill="#F04667" fill-rule="nonzero"/></svg>];
 const iplay = [<svg   width="76" height="77" xmlns="http://www.w3.org/2000/svg"><path d="m60.91 71.846 12.314-19.892c3.317-5.36 3.78-13.818-2.31-19.908l-26.36-26.36c-4.457-4.457-12.586-6.843-19.908-2.31L4.753 15.69c-5.4 3.343-6.275 10.854-1.779 15.35a7.773 7.773 0 0 0 7.346 2.035l7.783-1.945a3.947 3.947 0 0 1 3.731 1.033l22.602 22.602c.97.97 1.367 2.4 1.033 3.732l-1.945 7.782a7.775 7.775 0 0 0 2.037 7.349c4.49 4.49 12.003 3.624 15.349-1.782Zm-24.227-46.12-1.891-1.892-1.892 1.892a2.342 2.342 0 0 1-3.312-3.312l1.892-1.892-1.892-1.891a2.342 2.342 0 0 1 3.312-3.312l1.892 1.891 1.891-1.891a2.342 2.342 0 0 1 3.312 3.312l-1.891 1.891 1.891 1.892a2.342 2.342 0 0 1-3.312 3.312Zm14.19 14.19a2.343 2.343 0 1 1 3.315-3.312 2.343 2.343 0 0 1-3.314 3.312Zm0 7.096a2.343 2.343 0 0 1 3.313-3.312 2.343 2.343 0 0 1-3.312 3.312Zm7.096-7.095a2.343 2.343 0 1 1 3.312 0 2.343 2.343 0 0 1-3.312 0Zm0 7.095a2.343 2.343 0 0 1 3.312-3.312 2.343 2.343 0 0 1-3.312 3.312Z" fill="#3F9CBB" fill-rule="nonzero"/></svg>  ];
 const iselfcare = [   <svg width="67" height="67" xmlns="http://www.w3.org/2000/svg"><path d="M.918 50.848c.114 1.723.232 3.5.346 5.336l.003.038.448 6.038c.06.81.412 1.536.951 2.075.54.54 1.266.892 2.075.952l6.038.447.038.003c12.086.755 21.237 1.231 28.95.484 9.007-.873 15.369-3.445 20.02-8.096 8.413-8.413 8.398-21.609-.034-30.041-3.79-3.79-8.959-6.11-14.31-6.526-.415-5.352-2.736-10.52-6.526-14.31C30.484-1.185 17.288-1.2 8.875 7.214-1.295 17.384-.415 30.697.918 50.848ZM21.36 27.122l6.172 6.173 6.16-6.159 6.172 6.173-6.16 6.158 6.173 6.173-6.158 6.158-6.173-6.172-6.158 6.158-6.173-6.172 6.159-6.159-6.173-6.172 6.16-6.159Z" fill="#E6A532" fill-rule="nonzero"/></svg>]; 

const [frecuency, setFrecuency] = useState("day");

  const accorditionDataDay = [
    {title:'Work' , hours:'6hrs', time:'Previous - 7hrs', color:'bg-m-red-200', icon:iwork},
    {title:'Play' , hours:'3hrs', time:'Previous - 2hrs', color:'bg-m-blue-500', icon:iplay},
    {title:'Study' , hours:'4hrs', time:'Previous - 1hrs', color:'bg-m-red-400', icon:istudy},
    {title:'Exercise' , hours:'2hrs', time:'Previous - 1hrs', color:'bg-m-lime-500', icon:iexercise},
    {title:'Social' , hours:'1hrs', time:'Previous - 3hrs', color:'bg-m-violet-500', icon:isocial},
    {title:'Self Care' , hours:'1hrs', time:'Previous - 1hrs', color:'bg-m-orange-100', icon:iselfcare}
    ];

    const accorditionDataWeek = [
    {title:'Work' , hours:'32hrs', time:'Previous - 32hrs', color:'bg-m-red-200', icon:iwork},
    {title:'Play' , hours:'10hrs', time:'Previous - 8hrs', color:'bg-m-blue-500', icon:iplay},
    {title:'Study' , hours:'4hrs', time:'Previous - 7hrs', color:'bg-m-red-400', icon:istudy},
    {title:'Exercise' , hours:'4hrs', time:'Previous - 5hrs', color:'bg-m-lime-500', icon:iexercise}, 
    {title:'Social' , hours:'5hrs', time:'Previous - 7hrs', color:'bg-m-violet-500', icon:isocial},
    {title:'Self Care' , hours:'2hrs', time:'Previous - 2hrs', color:'bg-m-orange-100', icon:iselfcare}
    ];

    const accorditionDataMonth = [
    {title:'Work' , hours:'128hrs', time:'Previous - 124hrs', color:'bg-m-red-200', icon:iwork},
    {title:'Play' , hours:'25hrs', time:'Previous - 15hrs', color:'bg-m-blue-500', icon:iplay},
    {title:'Study' , hours:'24hrs', time:'Previous - 17hrs', color:'bg-m-red-400', icon:istudy},
    {title:'Exercise' , hours:'11hrs', time:'Previous - 16hrs', color:'bg-m-lime-500', icon:iexercise},
    {title:'Social' , hours:'20hrs', time:'Previous - 17hrs', color:'bg-m-violet-500', icon:isocial},
    {title:'Self Care' , hours:'9hrs', time:'Previous - 7hrs', color:'bg-m-orange-100', icon:iselfcare}
    ];   
  return (
  <div>
  
    <div className='bg-m-blue-900 text-body-medium h-screen lg:h-screen md:h-auto p-16'>
    <Navigation/>
    <div className='flex flex-col lg:flex-row md:flex-col  gap-8 lg:w-1110 md:w-375 sm:w-375 mx-auto my-16'>

    {/* Jeremy */}
    <div>

        <div className='bg-m-blue-600 mx-auto p-8 lg:pb-24 container w-72 rounded-2xl z-40 relative'>
            <div className='lg:w-48  flex lg:flex-col justify-center '>
            <img className='lg:w-20 w-16 border-4  rounded-full border-white lg:mb-8' src="image-jeremy.png" alt="" />
            <div className='flex flex-col md:ml-4 ml-4 lg:ml-0  justify-center '>
            <h1 className='text-m-blue-200 text-sm font-normal'>Report for</h1>
            <h1 className='text-white lg:text-4xl text-xl font-light'> Jeremy Robson </h1>
            </div>
            </div>
        </div>

        <div className='bg-m-blue-800 mx-auto lg:p-8 pt-8 px-8 pb-4 container w-72 rounded-b-2xl -top-4 relative z-10'>
            <div className='w-48 flex lg:flex-col lg:gap-4 md:gap-8 gap-8 '>
            
            <button onClick={()=>setFrecuency("day")} className={frecuency === "day" ? 'text-white   text-left ' : 'text-m-blue-200 font-normal text-left transform ease-in-out duration-300 hover:text-white hover:translate-x-1'}>Daily</button>
            <button onClick={()=>setFrecuency("week")} className={frecuency === "week" ? 'text-white  text-left' : 'text-m-blue-200 font-normal text-left transform ease-in-out duration-300 hover:text-white hover:translate-x-1'}>Weekly</button>
            <button onClick={()=>setFrecuency("month")} className={frecuency === "month" ? 'text-white  text-left' : 'text-m-blue-200 font-normal text-left transform ease-in-out duration-300 hover:text-white hover:translate-x-1'}>Monthly</button>
            </div>
        </div>

     </div>
    
    

   
     <div className='flex  gap-6 flex-wrap justify-center'>
    { frecuency === "day" ?  accorditionDataDay.map(({title, hours, time, color, icon})=>(<MiniCard title={title} hours={hours} time={time} color={color} icon={icon}/>)) : 
      frecuency ==="week" ?  accorditionDataWeek.map(({title, hours, time, color, icon})=>(<MiniCard title={title} hours={hours} time={time} color={color} icon={icon}/>)) :
      frecuency ==="month" ?  accorditionDataMonth.map(({title, hours, time, color, icon})=>(<MiniCard title={title} hours={hours} time={time} color={color} icon={icon}/>))
       : ""}
        
     </div> 
    
    
    </div>
    </div>
   </div>

 
  );
}

export default Tracking;
