import Navigation from "../components/Navigation";

import React,{useState, useEffect} from 'react';


import { BsFillPersonFill } from "react-icons/bs";



function Tips() {
 
const [total, setTotal] = useState(0.0);
const [people, setPeople] = useState(1);   
const [tip, setTip] = useState(0);
const [foc, setFoc] = useState(false);
const [foc2, setFoc2] = useState(false);

var def;
var def2;
console.log("total"+total, "persona"+people);

const TotalPerson = (total,people, tip, reset) =>{
  const cantTotal  = ((total * tip) / 100);
   def = parseInt(cantTotal);

   const tipTotal = total;
    def2 = parseInt(tipTotal);
   
   const totalCuenta = parseFloat((def+def2)/people).toFixed(1);
   
 
  return (
      <>
      {totalCuenta }
    
         
      </>
  )
}

const TipAmount = (total,tip, people, reset) =>{
     const cantTotal = ((total * tip) / 100);
    // const cantTotal = tip+total/people;
      def = parseInt(cantTotal);
      const totalRecibido = total;
    
      def2=parseInt(totalRecibido);

    const general = parseInt(def+def2);
    return (
        <>
        { general }
 
        </>
    )
  }
  const Reset = () =>{
    
    window.location.reload();
   
  }

  return (
    
    <div>
 
    <div className='bg-m-cyan-500 font-tips text-body-md xl:h-screen lg:h-auto  md:h-auto mx-auto md:p-4 py-8 sm:py-8'>
    <Navigation/>
  
    <h1 className='uppercase text-m-cyan-900 text-center font-bold tracking-2 '>Spli <br /> tter</h1>
    
  
    <div className='bg-white w-375 lg:w-920 md:w-375 p-8 lg:px-4  rounded-xl mx-auto sm:mt-20 mt-20 '>
    <div className=' flex flex-col lg:flex-row md:flex-col gap-12 '>
        <div className='flex flex-col gap-10 lg:p-2 md:p-0 p-0'>
        <div className='flex flex-col  w-380 gap-2'>
            <h1 className='text-m-cyan-900 text-sm font-bold tracking-widest'>Bill</h1>
            
        <div  className={foc ? 'flex flex-row  bg-m-cyan-400 text-m-cyan-600 rounded-lg w-310 lg:w-375 md:w-310 p-2 h-12 appearance-none leading-tight border-2 outline-none  border-m-cyan-800' :'flex flex-row h-12 bg-m-cyan-400 text-m-cyan-600 rounded-lg  w-310 lg:w-375 md:w-310  p-2 appearance-none leading-tight border-none  '}>
        <label className='lg:pl-4 md:pl-1' htmlFor="">$   </label>
            <input className='text-right bg-transparent  appearance-none  leading-tight focus:outline-none text-m-cyan-900 font-bold rounded-lg border-2 relative   h-12  lg:px-9 md:px-0.5 px-0.5 -top-2 lg:-left-10 md:-left-6 focus:border-m-cyan-800'  onInput={(e)=>setTotal(e.target.value)}  type="text"/>
        </div>
        
            
        </div>

        <div className='flex flex-col  w-380 gap-2'>
            <h1 className='text-m-cyan-900 text-sm font-bold tracking-widest'>Select Tip %</h1>
            
        <div className=' flex  gap-6 flex-wrap justify-center text-m-cyan-600 rounded-lg w-310 lg:w-375 md:w-310 lg:p-2 md:p-0'>
            <div className='  flex flex-wrap lg:gap-2 md:gap-2.5 gap-2.5 '>
            <button onClick={()=>setTip(5)} className={tip===5 ?'bg-m-cyan-800 text-m-cyan-900 lg:w-28 md:w-24 w-24 py-2 rounded-md' :'hover:bg-m-cyan-800 hover:text-m-cyan-900 bg-m-cyan-900 text-white lg:w-28 md:w-24 w-24 py-2 rounded-md'}>5%</button>
            <button  onClick={()=>setTip(10)} className={tip===10 ?'bg-m-cyan-800 text-m-cyan-900 lg:w-28 md:w-24 w-24 py-2 rounded-md' :'hover:bg-m-cyan-800 hover:text-m-cyan-900 bg-m-cyan-900 text-white lg:w-28 md:w-24 w-24 py-2 rounded-md'}>10%</button>
            <button  onClick={()=>setTip(15)} className={tip===15 ?'bg-m-cyan-800 text-m-cyan-900 lg:w-28 md:w-24 w-24 py-2 rounded-md' :'hover:bg-m-cyan-800 hover:text-m-cyan-900 bg-m-cyan-900 text-white lg:w-28 md:w-24 w-24 py-2 rounded-md'}>15%</button>
            <button  onClick={()=>setTip(25)} className={tip===25 ?'bg-m-cyan-800 text-m-cyan-900 lg:w-28 md:w-24 w-24 py-2 rounded-md' :'hover:bg-m-cyan-800 hover:text-m-cyan-900 bg-m-cyan-900 text-white lg:w-28 md:w-24 w-24 py-2 rounded-md'}>25%</button>
            <button  onClick={()=>setTip(30)} className={tip===50 ?'bg-m-cyan-800 text-m-cyan-900 lg:w-28 md:w-24 w-24 py-2 rounded-md' :'hover:bg-m-cyan-800 hover:text-m-cyan-900 bg-m-cyan-900 text-white lg:w-28 md:w-24 w-24 py-2 rounded-md'}>50%</button>
            {/* <button className='bg-m-cyan-400 text-m-cyan-900 font-bold w-28 py-2 rounded-md'>Custom</button> */}
            <input onInput={(e)=>setTip(e.target.value)} className='bg-m-cyan-400 text-center text-m-cyan-900 font-bold lg:w-28 md:w-24 w-24 py-2 rounded-md appearance-none border-2  leading-tight focus:outline-none focus:bg-white focus:border-m-cyan-800 lg:text-xl md:text-body text-body' type="text"  placeholder='Custom'/>
          
            </div>
        
            </div>
        </div>

        <div className='flex flex-col w-310 lg:w-375 md:w-310 gap-2'>
           <div className='flex flex-row justify-between'>
           <h1 className='text-m-cyan-900 text-sm font-bold tracking-widest'>Number of People</h1>
           {people < 1 ? <h1 className='text-orange-600 text-sm font-bold tracking-widest '>Can't be zero</h1> :""}
           </div>
        <div className={people < 1 ?'justify-between bg-m-cyan-400  font-bold flex flex-row text-m-cyan-900 rounded-lg w-310 lg:w-375 md:w-310 h-12 p-2 items-center border-2 border-orange-600 ' :
        foc2 ?' justify-between flex flex-row text-m-cyan-900  font-bold bg-m-cyan-400 rounded-lg w-310 lg:w-375 md:w-310 h-12 p-2 items-center border-2 outline-none  border-m-cyan-800 ':
        'bg-m-cyan-400 flex flex-row text-m-cyan-600 rounded-lg w-310 lg:w-375 md:w-310 h-12 p-2 items-center justify-between text-m-cyan-900 font-bold'}>
        
        
        <label className='pl-4 ' htmlFor=""><BsFillPersonFill color='#9DBFBD' className=''/> </label>
            <input   onInput={ (e)=>setPeople(e.target.value)}   className={people<1 ?'text-right w-40 bg-m-cyan-400 appearance-none leading-tight focus:outline-none text-m-cyan-900 font-bold lg:px-9 md:px-0.5 px-0.5' :'text-right rounded-lg relative lg:px-9 md:px-0.5 px-0.5 h-12  -left-12 bg-transparent appearance-none leading-tight focus:outline-none text-m-cyan-900 font-bold border-2 focus:border-m-cyan-800 '} value={people} placeholder='0' type="text"/>
            
            
        </div>

         </div>     
        </div>
     
        <div className='flex flex-col lg:gap-32 gap-0 md:gap-0 bg-m-cyan-900 lg:w-440  w-310  md:w-310  items-center rounded-xl '>
            <div className='flex flex-col lg:gap-10 gap-1 md:gap-1 '>
                <div className='flex flex-row lg:w-380  w-280  md:w-280   lg:px-8 md:px-0 px-0 mt-12 justify-between'>
                    <div className='flex flex-col '>
                        <h1 className='text-white text-lg font-semibold'>Tip Amount</h1>
                        <h1 className='text-white text-sm text-m-cyan-600 font-semibold'>/ person</h1>
                    </div>
                    <div>
                    <h1 className='lg:text-5xl md:text-4xl text-m-cyan-800 font-bold'>$ {total > 0 && people > 0?
                    TipAmount(total, tip, people)  :
                    "0.0"}</h1>
                    </div>
                </div>
            <div className='flex flex-row lg:w-380  w-280  md:w-280  lg:px-8 md:px-0 px-0 justify-between'>
                <div className='flex flex-col '>
                    <h1 className='text-white text-lg font-semibold'>Total</h1>
                    <h1 className='text-white text-sm text-m-cyan-600 font-semibold'>/ person</h1>
                </div>
                <div>
                    <h1 className='lg:text-5xl md:text-4xl text-m-cyan-800 font-bold'>$ {total > 0 && people > 0?
                    TotalPerson(total, people, tip) :
                    "0.0"}</h1>
                </div>
            </div>

        </div>
       <div>
         <button className='uppercase text-m-cyan-900 bg-m-cyan-800 lg:w-380  w-280  md:w-280 m-6 md:m-6 lg:m-0  text-xl h-10  font-semibold rounded-md hover:bg-m-cyan-300' onClick={()=>Reset()}>reset</button>
        </div>

       </div>
    </div>
   </div>
</div>


 </div>
  );
}

export default Tips;
