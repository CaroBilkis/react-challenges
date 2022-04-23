import React,{useState} from 'react'
import { blueGray } from 'tailwindcss/colors';
import Resize from './Resize';

function Pricing  ()  {
    const [toggle, setToogle] = useState(false);
    const controlToggle = () =>{
        setToogle(!toggle);
    }
    const [show, setShow]= useState(1);
    console.log("show" + show)

    const views = ["0K","10K", "50K", "100K", "500K", "1M"];
    const prices = ["0","8","12", "16", "24", "36"];
    const pricesDiscount = ["0","6","9", "12", "18", "27"];
   


    const [slider, setSlider] = useState(5);

     
    const controlSlider = (miSlider) =>{
        setSlider (miSlider);
        setShow(miSlider);

        
    }

    const returnSlider = () =>{

                

        return (
            <div className='relative '>
            <input className='w-310 sm:w-310 md:w-440 absolute left-0 top-1.5  z-40 appearance-none  bg-no-repeat bg-transparent rounded-3xl h-3  boton-cyan shadow-xl ' type="range" name="" id="" onInput={(e)=>controlSlider(e.target.value)}
            
            min={1}  max={5} />       
        
            <input className='w-310 sm:w-310 md:w-440 relative left-0 top-0  z-10 overflow-hidden appearance-none bg-no-repeat bg-transparent rounded-3xl h-3  bg-p-blue-300 shadow-xl cursor-cyan' type="range" name="" id="" value={slider}
            
             min={1}  max={5} />       
         


            </div>

            
        

        
        )
    }



   

    return (
      
    <div className='bg-pricing bg-no-repeat   bg-left-top sm:bg-auto md:bg-contain   h-screen font-manrope flex flex-col items-center  justify-center '>
    <Resize/>

    <div className=' flex flex-col gap-24 z-30 my-auto '>
  
    <div className='relative flex flex-col items-center gap-4 w-440 sm:w-440 md:w-540 '>
        <h1 className='font-extrabold text-p-blue-500 text-2xl sm:text-2xl md:text-4xl z-30'>Simple, traffic-based pricing</h1>
        <h1 className='text-p-blue-400 w-200 sm:w-200 md:w-540 text-15 sm:text-15  text-center z-30'> Sing-up for out 30-day trial. No credit card required.</h1>
        <div className='absolute -top-9 inset-x-40 ml-1 sm:-top-9 sm:inset-x-40 sm:ml-1 md:inset-x-52 z-0'>
         <svg xmlns="http://www.w3.org/2000/svg" width="146" height="145"><g fill="none" fillRule="evenodd" stroke="#CFD8EF"><circle cx="63" cy="82" r="62.5"/><circle cx="105" cy="41" r="40.5"/></g></svg>
    </div>
    </div>

    <div className='bg-white mx-auto rounded-xl shadow-lg h-auto   sm:h-auto w-375 sm:w-375 md:w-540 md:h-auto  flex flex-col gap-12 items-center p-12 '>
       
        <div className='flex   top-0 flex-col w-310 sm:w-310 md:w-440 justify-between  items-center gap-12 '> 
       
           <div className='flex flex-wrap gap-10 md:flex-row items-center w-310 sm:w-310 md:w-440 justify-center sm:justify-center md:justify-between'>
           <h1 className='order-1 md:order-1 sm:order-1 uppercase font-bold text-p-blue-400'> {views[slider]} pageviews</h1>
            <div className='order-3 md:order-2 sm:order-3 flex flex-row items-center gap-2'>
                {toggle ? 
                <h1 className='font-extrabold text-p-blue-500 text-4xl '>${pricesDiscount[slider]}.00</h1> :
                <h1 className='font-extrabold text-p-blue-500 text-4xl '>${prices[slider]}.00</h1>
                }
                <h1 className='text-p-blue-400'>/month</h1>
            </div>
            <div className='order-2 sm:order-2'>
            {returnSlider()}
            </div>
           </div>

            
        </div>
       

       
       
       

        <div className='flex flex-row gap-4 w-310 sm:w-310 md:w-440  justify-end items-center '>
            <div className='flex flex-row gap-2'>
            <h1 className='text-sm text-p-blue-400'>Monthly Billing</h1>
           <label className={toggle ? 'switch relative z-0 inline-block w-10 h-5 rounded-3xl bg-p-cyan-100 appearance-none' : 'switch relative z-0 inline-block w-10 h-5 rounded-3xl bg-p-blue-300 appearance-none'} htmlFor="">
           <input type="checkbox" className='w-8 h-8 absolute z-50 inset-y-1 left-1 opacity-0' onClick={()=>controlToggle()}   name="" id="" />
           <span className={toggle ? 'slider transform ease-in-out duration-200 absolute translate-x-4 w-4 h-4 bg-white rounded-full inset-y-0.5 left-1 appearance-none' : 'slider transform ease-in-out duration-200 absolute w-4 h-4 bg-white rounded-full inset-y-0.5 left-1 appearance-none'}/>
           </label>
            </div>
            
        <div className='flex flex-row items-center gap-4 '>
        <h1 className='text-sm text-p-blue-400'>Yearly Billing</h1>
            <div className='flex flex-row gap-1 bg-p-orange-100 rounded-xl px-2 py-0.5'>
            {toggle ?<h1 className='text-xs font-bold text-p-orange-200 '>-25% </h1> :
            <h1 className='text-xs font-bold text-p-orange-200'>25% </h1> }
            <h1 className='hidden sm:hidden md:flex text-xs font-bold text-p-orange-200 '>discount</h1>
            </div>
        </div>
        </div>

        <hr className='border-1 border-gray-200 w-310 sm:w-310 md:w-440 ' />

       <div className='flex flex-col gap-6 sm:gap-6 md:gap-0 sm:flex-col items-center sm:justify-center md:flex-row md:justify-between w-310 sm:w-310 md:w-440 '>
        <div className='flex flex-col gap-4 sm:gap-4 md:gap-2 items-center sm:items-center md:items-left'>
            <div className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
            <h1 className='text-15 sm:text-15 md:text-xs font-bold text-p-blue-400'>Unlimited websites</h1>
            </div>

            <div className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
            <h1 className='text-15 sm:text-15 md:text-xs font-bold text-p-blue-400'>100% data ownership</h1>
            </div>

            <div className='flex flex-row gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="8"><path fill="none" stroke="#10D8C4" strokeWidth="2" d="M1 4.134l1.907 1.908L7.949 1"/></svg>
            <h1 className='text-15 sm:text-15 md:text-xs font-bold text-p-blue-400'>Email reports</h1>
            </div>
        </div>

        <button className='bg-p-blue-500 rounded-3xl px-10 text-xs font-bold h-10 text-p-blue-300'>Start my trial</button>

       </div>
    </div>
    </div>
    </div>
  )
}

export default Pricing