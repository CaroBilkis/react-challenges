import React,{useState} from 'react'

function Calculator () {
  const [toggle, setToogle] = useState(1);
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops=['/', '*', '+','-', '.'];

  console.log('calc '+calc);
  console.log('result '+result);
  const updateCalc = (value) =>{
    if(
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) return;

    setCalc(calc + value);

    if(!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate = ()=>{
    setCalc(eval(calc).toString());
  
  }

  const del = ()=>{
    if (calc === ''){
      return;
    }
    const value =calc.slice(0, -1);

    setCalc(value);
  }

  const deleteAll = ()=>{
    if (calc === ''){
      return;
    }
    setCalc('');
  }
  function calculator (value) {
  
   
    return (
      <div className={toggle===1 ? 'flex flex-row justify-end overflow-hidden  bg-screen-1 rounded-lg h-130' :
      toggle===2 ? 'flex flex-row justify-end  bg-screen-2 rounded-lg h-130' :
      toggle===3 ? 'flex flex-row justify-end  bg-screen-3 rounded-lg h-130' : ''
      } >
     
      {<h1 className={toggle === 1 ? 'text-6xl font-semibold mr-8 text-white self-center' :
      toggle === 2 ? 'text-6xl font-semibold mr-8 text-calc-grayyellow self-center' :
      toggle === 3 ? 'text-6xl font-semibold mr-8 text-calc-yellow self-center' : ''}>{calc}</h1> || "0"}
    </div>
    )
  }

  return (
   <div className={toggle === 1 ? 'bg-main-1 font-spartan w-full h-screen ' :
   toggle === 2 ? 'bg-main-2 font-spartan  w-full h-screen ' :
   toggle === 3 ? 'bg-main-3 font-spartan w-full h-screen ' : ''
   }>
     <div className='flex flex-col gap-4 w-375 sm:w-375 md:w-540 mx-auto  mb-36 '>
      <div className='flex flex-row justify-between mt-36'>
      <h1 className={toggle===1 ?'text-white text-5xl font-medium' :
      toggle===2 ?'text-calc-grayyellow text-5xl font-medium' :
      toggle===3 ?'text-calc-yellow text-5xl font-medium' : ''
      }>calc</h1>
      <div className='flex flex-row gap-4  '>
      <h1 className={toggle === 1 ? 'uppercase text-white  self-end' :
      toggle === 2 ? 'uppercase  text-calc-grayyellow   self-end' :
      toggle === 3 ? 'uppercase  text-calc-yellow   self-end' : ''
      }>theme</h1>
      <div className='flex flex-col  items-center'>
      <div className='flex flex-row  w-12 justify-between'> 
        <h1 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-calc-grayyellow  text-sm' :
        toggle === 3 ? 'text-calc-yellow text-sm' : ''
        }>1</h1>
       <h1 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-calc-grayyellow  text-sm' :
        toggle === 3 ? 'text-calc-yellow text-sm' : ''
        }>2</h1>
         <h1 className={toggle === 1 ? 'text-white text-sm' :
        toggle === 2 ? 'text-calc-grayyellow  text-sm' :
        toggle === 3 ? 'text-calc-yellow text-sm' : ''
        }>3</h1>
      </div>
      <label className={toggle === 1 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-toggle-1 appearance-none' :
      toggle === 2 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-toggle-2 appearance-none' :
      toggle === 3 ? 'switch relative z-0 inline-block w-14 h-5 rounded-3xl bg-toggle-3 appearance-none' : ''
      } htmlFor="">
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-1 opacity-0' onClick={()=>setToogle(1)}   name="" id="" />
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-5 opacity-0' onClick={()=>setToogle(2)}   name="" id="" />
            <input type="checkbox" className='w-4 h-4 absolute z-50 inset-y-1 left-9 opacity-0' onClick={()=>setToogle(3)}   name="" id="" />
            <span className={toggle === 1 ? 'slider transform ease-in-out duration-200 absolute translate-x-0 w-4 h-4 bg-key-red-1 rounded-full inset-y-0.5 left-1 appearance-none' :
             toggle === 2 ? 'slider transform ease-in-out duration-200 absolute translate-x-4 w-4 h-4 bg-key-orange-2 rounded-full inset-y-0.5 left-1 appearance-none' :
             toggle === 3 ? 'slider transform ease-in-out duration-200 absolute translate-x-8 w-4 h-4 bg-key-violet rounded-full inset-y-0.5 left-1 appearance-none' :
             ''}/>
           
        </label>
      </div>
      </div>
      </div>
     {calculator()}

      <div className={toggle===1 ?'bg-toggle-1 flex flex-col gap-6 p-8 rounded-lg' :
      toggle===2 ?'bg-toggle-2 flex flex-col gap-6 p-8 rounded-lg' :
      toggle===3 ?'bg-toggle-3 flex flex-col gap-6 p-8 rounded-lg' : ''
      }>
      <div className='flex flex-row gap-6  '>
        <button onClick={()=>updateCalc('7')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>7</button>
        <button onClick={()=>updateCalc('8')}  className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>8</button>
        <button onClick={()=>updateCalc('9')}  className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>9</button>
        <button onClick={()=>del()} className={toggle===1?'bg-key-blue-1 shadow-key-blue-1 text-white text-3xl font-medium  w-100 h-15  pt-1 rounded-lg uppercase ' :
        toggle===2?'bg-key-cyan-2 shadow-key-cyan-2 text-white text-3xl font-medium  w-100 h-15  pt-1 rounded-lg uppercase ' :
        toggle===3?'bg-key-violet shadow-key-darkmagenta-3 text-white text-3xl font-medium w-100 h-15  pt-1 rounded-lg uppercase' : ''
        }>del</button>
        
      </div>

      <div className='flex flex-row gap-6'>
        <button onClick={()=>updateCalc('4')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>4</button>
        <button onClick={()=>updateCalc('5')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>5</button>
        <button onClick={()=>updateCalc('6')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>6</button>
        <button onClick={()=>updateCalc('+')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>+</button>
      </div>

      <div className='flex flex-row gap-6'>
        <button onClick={()=>updateCalc('1')}  className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>1</button>
        <button onClick={()=>updateCalc('2')}  className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>2</button>
        <button onClick={()=>updateCalc('3')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>3</button>
        <button onClick={()=>updateCalc('-')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>-</button>
      </div>

      <div className='flex flex-row gap-6'>
      <button onClick={()=>updateCalc('.')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>.</button>
        <button onClick={()=>updateCalc('0')}  className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>0</button>
        <button onClick={()=>updateCalc('/')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>/</button>
        <button onClick={()=>updateCalc('*')} className={toggle ===1 ? 'bg-key-orange-1 shadow-key-orange-1 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===2 ? 'bg-key-yellow-2 shadow-key-grayorange-2 text-calc-blue text-4xl font-medium w-100 h-15  pt-1 rounded-lg' :
        toggle ===3 ? 'bg-key-darkviolet shadow-key-magenta-3 text-calc-yellow text-4xl font-medium w-100 h-15  pt-1 rounded-lg' : ''
        }>x</button>
      </div>

     <div className='flex gap-6 justify-between'> 
     <button onClick={()=>deleteAll()} className={toggle===1?'bg-key-blue-1 shadow-key-blue-1 text-white text-3xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' :
     toggle===2?'bg-key-cyan-2 shadow-key-cyan-2 text-white text-3xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' :
     toggle===3?'bg-key-violet shadow-key-darkmagenta-3 text-white text-3xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' : ''
     }>reset</button>
     <button onClick={calculate} className={toggle === 1 ?'bg-key-red-1 shadow-key-red-1 text-white text-4xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' :
     toggle === 2 ?'bg-key-orange-2 shadow-key-orange-2 text-white text-4xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' :
     toggle === 3 ?'bg-key-cyan-3 shadow-key-cyan-3 text-white text-4xl font-medium  h-15 pt-1 rounded-lg uppercase w-full' : ''
     }>=</button>

      </div>
      </div>
      
     </div>
   </div>
  )
}

export default Calculator