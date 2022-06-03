import React,{useState} from 'react'
import { NavLink } from "react-router-dom";


function TecnologyCrew() {

    const [home, setHome] =useState(false);
    const [destination, setDestination] =useState(false);
    const [crew, setCrew] =useState(false);
    const [tech, setTech] =useState(true);

    const [hoverHome, setHoverHome] =useState(false);
    const [hoverDestination, setHoverDestination] =useState(false);
    const [hoverCrew, setHoverCrew] =useState(false);
    const [hoverTech, setHoverTech] =useState(false);

    const [one, setOne] =useState(true);
    const [two, setTwo] =useState(false);
    const [three, setThree] =useState(false);
   
    const [hoverOne, setHoverOne] =useState(false);
    const [hoverTwo, setHoverTwo] =useState(false);
    const [hoverThree, setHoverThree] =useState(false);
   
    const [menu, setMenu] =useState(false);

    const controlMenu = () =>{
      setMenu(!menu);
    }
    const controllerTech = (number) =>{
        switch (number){
  
          case 1:
            setOne(true);
            setTwo(false);
            setThree(false);
          
           break;
          case 2:
            setOne(false);
            setTwo(true);
            setThree(false);
          
            break; 
          case 3:
            setOne(false);
            setTwo(false);
            setThree(true);
           
            break; 
     
          default:
            setOne(true);
            break;
      }}
   
      const navController = (number) =>{
        switch (number){
  
          case 1:
           setHome(true);
           setDestination(false);
           setCrew(false);
           setTech(false);
           break;
          case 2:
            setHome(false);
            setDestination(true);
            setCrew(false);
            setTech(false);
            break; 
          case 3:
            setHome(false);
            setDestination(false);
            setCrew(true);
            setTech(false);
            break; 
          case 4:
            setHome(false);
            setDestination(false);
           setCrew(false);
           setTech(true);
            break;
              
          default:
            setDestination(true);
            break;
      }}

  return (
    <div className=' overflow-hidden  mobile:bg-spaceTechMobile tablet:bg-spaceTechTablet desktop:bg-spaceTechDesktop h-screen  bg-cover font-bellefair p-14 flex flex-col desktop:justify-between  tablet:justify-between mobile:gap-14'>                    
   

   <div className='flex flex-row justify-between z-50  items-center '>
    
    <div className='flex flex-row items-center gap-14 '>
    <NavLink className="" to="/space/home"><img className='z-0 ' src="12-space/home/logo.png" alt="" /></NavLink>
  
    <div className='z-0 h-0.5 bg-gray-700  desktop:w-440 '></div>

    </div>
    { !menu ? 
    <button onClick={()=>controlMenu()} className='desktop:hidden tablet:hidden mobile:flex'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </button>
    :
    <button onClick={()=>controlMenu()} className='desktop:hidden tablet:hidden mobile:flex'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>    </button>
    }
    
    


    <div className='absolute right-0 desktop:p-8 hidden desktop:flex  tablet:flex  mobile:hidden items-center justify-center'>
   
    <div className='absolute flex flex-row  desktop:gap-10 tablet:gap-8 items-center  '>
   
   <div onClick={()=>navController(1)}  onMouseEnter={()=>setHoverHome(true)} onMouseLeave={()=>setHoverHome(false)}  className='relative flex flex-col '>
   <div className='z-40 text-white '>
    <NavLink className="nav-link flex flex-row gap-2" to="/space/home">
    <h1 className='uppercase font-barlow font-bold hidden tablet:hidden desktop:flex'>00</h1>
    <h1 className='uppercase font-barlow'>home</h1>
    </NavLink>
    </div>
   {home ? <hr className='relative top-8 border-2 border-white z-50' /> : hoverHome ? <hr className='relative top-8 border-2 border-gray-blue z-50' /> : <hr className='relative top-8 border-2 opacity-0 z-50' />}
   </div>


   <div onClick={()=>navController(2)} onMouseEnter={()=>setHoverDestination(true)} onMouseLeave={()=>setHoverDestination(false)}  className='relative flex flex-col '>
   <div className='z-40 text-white '>
    <NavLink className="nav-link flex flex-row gap-2" to="/space/destination">
    <h1 className='uppercase font-barlow font-bold hidden tablet:hidden desktop:flex'>01</h1>
    <h1 className='uppercase font-barlow'>destination</h1>
    </NavLink>
    </div>
    {destination? <hr className='relative top-8 border-2 border-white z-50' /> :hoverDestination ? <hr className='relative top-8 border-2 border-gray-blue z-50 ' /> : <hr className='relative top-8 border-2 opacity-0 z-50' />}
   </div>

    <div onClick={()=>navController(3)} onMouseEnter={()=>setHoverCrew(true)} onMouseLeave={()=>setHoverCrew(false)}  className='relative flex flex-col '>
    <div className='z-40 text-white '>
    <NavLink className="nav-link flex flex-row gap-2" to="/space/crew">
    <h1 className='uppercase font-barlow font-bold hidden tablet:hidden desktop:flex'>02</h1>
    <h1 className='uppercase font-barlow'>crew</h1>
    </NavLink>
    </div>
        {crew ? <hr className='relative top-8 border-2 border-white z-50' />:hoverCrew ? <hr className='relative top-8 border-2 border-gray-blue z-50' /> : <hr className='relative top-8 z-50 border-2 opacity-0' />}
    </div>

    <div onClick={()=>navController(4)} onMouseEnter={()=>setHoverTech(true)} onMouseLeave={()=>setHoverTech(false)}  className='relative flex flex-col '>
    <div className='z-40 text-white '>
    <NavLink className="nav-link flex flex-row gap-2" to="/space/technology">
    <h1 className='uppercase font-barlow font-bold hidden tablet:hidden desktop:flex'>03</h1>
    <h1 className='uppercase font-barlow'>technology</h1>
    </NavLink>
    </div>
    {tech ? <hr className='relative z-50 top-8 border-2 border-white' /> :hoverTech ? <hr className='relative z-50 top-8 border-2 border-gray-blue' /> : <hr className='relative top-8 border-2 z-50 opacity-0' />}
    </div>


</div>

    <div className='flex  z-0  top-0 right-0 tablet:w-440 desktop:w-788 h-24 backdrop-filter backdrop-blur-xl '></div>
    </div>
   </div>
   
   {menu ? 
  <div>
  <div className=' absolute right-0 top-24 w-2/3 z-50 p-8 mobile:flex tablet:hidden desktop:hidden flex-col gap-6'>
    <div onClick={()=>navController(1)}  onMouseEnter={()=>setHoverHome(true)} onMouseLeave={()=>setHoverHome(false)}  className='relative flex flex-col '>
       <div className='z-40 text-white '>
        <NavLink className="nav-link flex flex-row gap-2" to="/space/home">
        <h1 className='uppercase font-barlow font-bold  flex'>00</h1>
        <h1 className='uppercase font-barlow'>home</h1>
        </NavLink>
        </div>
       {home ? <hr className='relative top-2 border-2 border-white' /> : hoverHome ? <hr className='relative top-2 border-2 border-gray-blue' /> : <hr className='relative top-8 border-2 opacity-0' />}
       </div>
    
   
       <div onClick={()=>navController(2)} onMouseEnter={()=>setHoverDestination(true)} onMouseLeave={()=>setHoverDestination(false)}  className='relative flex flex-col '>
       <div className='z-40 text-white '>
        <NavLink className="nav-link flex flex-row gap-2" to="/space/destination">
        <h1 className='uppercase font-barlow font-bold lex'>01</h1>
        <h1 className='uppercase font-barlow'>destination</h1>
        </NavLink>
        </div>
        {destination? <hr className='relative top-2 border-2 border-white' /> :hoverDestination ? <hr className='relative top-2 border-2 border-gray-blue ' /> : <hr className='relative top-8 border-2 opacity-0' />}
       </div>

        <div onClick={()=>navController(3)} onMouseEnter={()=>setHoverCrew(true)} onMouseLeave={()=>setHoverCrew(false)}  className='relative flex flex-col '>
        <div className='z-40 text-white '>
        <NavLink className="nav-link flex flex-row gap-2" to="/space/crew">
        <h1 className='uppercase font-barlow font-bold flex'>02</h1>
        <h1 className='uppercase font-barlow'>crew</h1>
        </NavLink>
        </div>
            {crew ? <hr className='relative top-2 border-2 border-white' />:hoverCrew ? <hr className='relative top-2 border-2 border-gray-blue' /> : <hr className='relative top-8 border-2 opacity-0' />}
        </div>

        <div onClick={()=>navController(4)} onMouseEnter={()=>setHoverTech(true)} onMouseLeave={()=>setHoverTech(false)}  className='relative flex flex-col '>
        <div className='z-40 text-white '>
        <NavLink className="nav-link flex flex-row gap-2" to="/space/technology">
        <h1 className='uppercase font-barlow font-bold lex'>03</h1>
        <h1 className='uppercase font-barlow'>technology</h1>
        </NavLink>
        </div>
        {tech ? <hr className='relative top-2 border-2 border-white' /> :hoverTech ? <hr className='relative top-2 border-2 border-gray-blue' /> : <hr className='relative top-8 border-2 opacity-0' />}
        </div>
    </div>

  

    <div className='mobile:flex tablet:hidden desktop:hidden absolute z-40  top-0 right-0 w-2/3 h-screen   backdrop-filter backdrop-blur-lg'></div>
   
  </div>
   :''}

  <div className='flex flex-col desktop:items-start tablet:items-center mobile:items-center justify-between relative tablet:py-10 desktop:p-24 tablet:gap-10 desktop:gap-14 mobile:gap-6'>
 
    <div className='flex flex-col gap-6 tablet:self-start'>
     <div className='flex flex-row gap-4 tracking-4-72 desktop:text-h5 mobile:text-nav-16'>
     <h2 className='uppercase text-white font-bold text-whitefont-bold font-barlow-condensed  opacity-50'>03</h2>
     <h2 className='uppercase  text-white font-barlow-condensed '>space launch 101</h2>
    </div>

   
    
    </div>
 

  
 
  <div className='flex desktop:flex-row tablet:flex-col mobile:flex-col justify-between desktop:gap-6 tablet:gap-8 mobile:gap-8  items-center tablet:text-center mobile:text-center'> 

    <div className='flex desktop:flex-col tablet:flex-row mobile:flex-row justify-between gap-8 order-2'>
      <button  onMouseEnter={()=>setHoverOne(true)} onMouseLeave={()=>setHoverOne(false)} onClick={()=>controllerTech(1)} className={one ? 'rounded-full desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-white': hoverOne ? 'rounded-full  desktop:w-80m  desktop:h-80m  tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white ':'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white opacity-25'}>
          <h1 className={one ? 'text-black desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16':'desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16 text-white'}>1</h1>
      </button> 
      <button onMouseEnter={()=>setHoverTwo(true)} onMouseLeave={()=>setHoverTwo(false)} onClick={()=>controllerTech(2)} className={two ? 'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-white': hoverTwo ? 'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white ' :'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white opacity-25'}>
          <h1 className={two ? 'text-black desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16':'desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16 text-white'}>2</h1>
      </button>
      <button onMouseEnter={()=>setHoverThree(true)} onMouseLeave={()=>setHoverThree(false)} onClick={()=>controllerTech(3)} className={three ? 'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-white': hoverThree ? 'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white ':'rounded-full  desktop:w-80m  desktop:h-80m tablet:h-60m tablet:w-60m mobile:w-40 mobile:h-40 bg-transparent border-2  border-white opacity-25'}>
          <h1 className={three ? 'text-black desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16':'desktop:text-h4 tablet:text-sub-h1 mobile:text-nav-16 text-white'}>3</h1>
      </button>
    </div>

    {one ? 
        <>
   <div className='flex flex-col order-3'>
      <h2 className='text-nav-16 font-barlow-condensed text-space-lila uppercase opacity-50 '>THE TERMINOLOGY…</h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8 text-white uppercase '>LAUNCH VEHICLE</h1> 

    
    <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila tablet:w-485  mobile:w-327 '>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad! </p>
    

    </div>

    <img className='z-50 rounded-sm desktop:flex tablet:hidden mobile:hidden' src="12-space/technology/image-launch-vehicle-portrait.jpg" alt="" />

    <div className='order-1 '>
    <div className='w-screen  tablet:h-330 mobile:h-222 z-50  desktop:hidden tablet:flex mobile:flex bg-launch bg-cover '></div>
    </div>
     
       </> :
   two ? 
   <>
   <div className='flex flex-col order-3'>
      <h2 className='text-nav-16 font-barlow-condensed text-space-lila uppercase opacity-50 '>THE TERMINOLOGY…</h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8 text-white uppercase '>SPACEPORT</h1> 
    
      <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila  tablet:w-485 mobile:w-327'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch. </p>
    </div>

    <img className='z-50   rounded-sm desktop:flex tablet:hidden mobile:hidden ' src="12-space/technology/image-space-capsule-portrait.jpg" alt="" />
    
    <div className='order-1 tablet:overflow-visible '>
    <div className='w-screen tablet:h-330 mobile:h-222 z-50  desktop:hidden tablet:flex mobile:flex bg-space bg-cover '></div>
    </div>
   </> :
   three ? 
   <>
   <div className='flex flex-col order-3'>
      <h2 className='text-nav-16 font-barlow-condensed text-space-lila uppercase opacity-50 '>THE TERMINOLOGY…</h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8 text-white uppercase '>SPACE CAPSULE</h1> 
    
      <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila tablet:w-485  mobile:w-327'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. </p>
    </div>

    <img className='z-50 rounded-sm desktop:flex tablet:hidden mobile:hidden ' src="12-space/technology/image-spaceport-portrait.jpg" alt="" />

    <div className='order-1 tablet:overflow-visible '>
    <div className='w-screen tablet:h-330 mobile:h-222 z-50  desktop:hidden tablet:flex mobile:flex bg-spacePort bg-cover '></div>
    </div>
   </> :''}

   </div>

  
  </div>

  
</div>
    
  )
}

export default TecnologyCrew