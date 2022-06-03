import React,{useState} from 'react'
import { NavLink } from "react-router-dom";


function CrewSpace() {

    const [home, setHome] =useState(false);
    const [destination, setDestination] =useState(false);
    const [crew, setCrew] =useState(true);
    const [tech, setTech] =useState(false);

    const [hoverHome, setHoverHome] =useState(false);
    const [hoverDestination, setHoverDestination] =useState(false);
    const [hoverCrew, setHoverCrew] =useState(false);
    const [hoverTech, setHoverTech] =useState(false);

    const [crew1, setCrew1] =useState(true);
    const [crew2, setCrew2] =useState(false);
    const [crew3, setCrew3] =useState(false);
    const [crew4, setCrew4] =useState(false);

    const [hoverCrew1, setHoverCrew1] =useState(false);
    const [hoverCrew2, setHoverCrew2] =useState(false);
    const [hoverCrew3, setHoverCrew3] =useState(false);
    const [hoverCrew4, setHoverCrew4] =useState(false);

    const [menu, setMenu] =useState(false);

    const controlMenu = () =>{
      setMenu(!menu);
    }

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
            setCrew(true);
            break;
      }}
    const controllerCrew = (number) =>{
      switch (number){

        case 1:
            setCrew1(true);
            setCrew2(false);
            setCrew3(false);
            setCrew4(false);
         break;
        case 2:
            setCrew1(false);
            setCrew2(true);
            setCrew3(false);
            setCrew4(false);
          break; 
        case 3:
            setCrew1(false);
            setCrew2(false);
            setCrew3(true);
            setCrew4(false);
          break; 
        case 4:
            setCrew1(false);
            setCrew2(false);
            setCrew3(false);
            setCrew4(true);
          break;
            
        default:
            setCrew1(true);
          break;
    }}
  return (
    <div className='mobile:bg-spaceCrewMobile tablet:bg-spaceCrewTablet desktop:bg-spaceCrewDesktop mobile:h-screen tablet:h-1024 desktop:h-screen bg-cover font-bellefair p-14 flex flex-col mobile:gap-14 tablet:justify-between mobile:justify-start  overflow-hidden'>                    
   

   <div className='flex flex-row justify-between z-50  items-center  '>
     
    <div className='flex flex-row items-center gap-14 '>
    <NavLink className="" to="/space/home"><img className='z-0 ' src="../12-space/home/logo.png" alt="" /></NavLink>
    <div className=' z-0 h-0.5 bg-gray-700  desktop:w-440 '></div>
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

  <div className='flex flex-col tablet:items-start mobile:items-center justify-between relative tablet:py-10 desktop:p-24 tablet:gap-10 desktop:gap-14 mobile:gap-6'>
 
    <div className='flex flex-col gap-6 '>
     <div className='flex flex-row gap-4 tracking-4-72 desktop:text-h5 mobile:text-nav-16'>
     <h2 className='uppercase  text-white font-bold font-barlow-condensed opacity-25'>02</h2>
     <h2 className='uppercase  text-white font-barlow-condensed'>meet your crew</h2>
    </div>

   
    
    </div>
 
    {crew1 ? 
    <div className='desktop:w-1140 desktop:h-712 flex desktop:flex-row tablet:flex-col mobile:flex-col-reverse  mobile:items-center  flex-col justify-between gap-8 mobile:gap-12 tablet:text-center tablet:items-center '>
  
    <div>
    <div className='flex flex-col  gap-4  mobile:items-center'> 
        <div className='flex flex-col mobile:items-center mobile:order-2 mobile:mt-6'>
        <h2 className='desktop:text-h4 tablet:text-h8 mobile:text-nav-16 text-white uppercase opacity-50 '>Commander</h2> 
        <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8  text-white uppercase desktop:w-614'>Douglas Hurley</h1> 
        </div>
        
        <div className='mobile:order-3 mobile:w-327'>
        <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15  text-space-lila desktop:w-444 desktop:h-160 mobile:w-327 mobile:text-center'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>

        <div className='flex flex-row gap-4 desktop:mt-32 tablet:mt-10 tablet:self-center mobile:self-center mobile:order-1'>
        <button onClick={()=>controllerCrew(1)} className={crew1 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button> 
        <button  onClick={()=>controllerCrew(2)} className={crew2 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
        <button onClick={()=>controllerCrew(3)}  className={crew3 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
        <button  onClick={()=>controllerCrew(4)} className={crew4 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
        </div>
   
       
    </div> 
    
    
    </div>

    <div className='mobile:w-327 flex flex-col  items-center desktop:absolute right-0'>
    <img className=' z-0 desktop:h-712 tablet:h-572 mobile:h-222 mobile:w-177' src="12-space/crew/image-douglas-hurley.png" alt="" />
    <hr className='border-white opacity-50 border-1 w-full  desktop:hidden tablet:hidden mobile:flex' />
    </div>
  </div> : 
 crew2 ? 
 <div className=' desktop:w-1140 desktop:h-712 flex desktop:flex-row tablet:flex-col mobile:flex-col-reverse  mobile:items-center  flex-col justify-between gap-8 mobile:gap-12 tablet:text-center tablet:items-center '>
  
  <div>
  <div className='flex flex-col  gap-4  mobile:items-center'> 
      <div className='flex flex-col mobile:items-center mobile:order-2 mobile:mt-6'>
      <h2 className='desktop:text-h4 tablet:text-h8 mobile:text-nav-16 text-white uppercase opacity-50 '>Mission Specialist </h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8  text-white uppercase desktop:w-614 '>MARK SHUTTLEWORTH</h1> 
      </div>
      
      <div className='mobile:order-3 mobile:w-327'>
      <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15  text-space-lila desktop:w-444 desktop:h-160 mobile:w-327 mobile:text-center'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
      </div>

      <div className='flex flex-row gap-4 desktop:mt-32 tablet:mt-10 tablet:self-center mobile:self-center mobile:order-1'>
      <button onClick={()=>controllerCrew(1)} className={crew1 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button> 
      <button  onClick={()=>controllerCrew(2)} className={crew2 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button onClick={()=>controllerCrew(3)}  className={crew3 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button  onClick={()=>controllerCrew(4)} className={crew4 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      </div>
 
     
  </div> 
  
  
  </div>

  <div className='mobile:w-327 flex flex-col  items-center desktop:absolute right-0'>

  <img className=' desktop:relative desktop:-bottom-4 z-0 desktop:h-712 tablet:h-572 mobile:h-222 mobile:w-153' src="12-space/crew/image-mark-shuttleworth.png" alt="" />
  <hr className='border-white opacity-50 border-1 w-full  desktop:hidden tablet:hidden mobile:flex' />
  </div>
</div> : 
 crew3 ?
 <div className='desktop:w-1140 desktop:h-712 flex desktop:flex-row tablet:flex-col mobile:flex-col-reverse  mobile:items-center  flex-col justify-between gap-8 mobile:gap-12 tablet:text-center tablet:items-center '>
  
  <div>
  <div className='flex flex-col  gap-4  mobile:items-center'> 
      <div className='flex flex-col mobile:items-center mobile:order-2 mobile:mt-6'>
      <h2 className='desktop:text-h4 tablet:text-h8 mobile:text-nav-16 text-white uppercase opacity-50 '>PILOT</h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8  text-white uppercase desktop:w-614 '>Victor Glover</h1> 
      </div>
      
      <div className='mobile:order-3 mobile:w-327'>
      <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15  text-space-lila desktop:w-444 desktop:h-160 mobile:w-327 mobile:text-center'>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
      </div>

      <div className='flex flex-row gap-4 desktop:mt-32 tablet:mt-10 tablet:self-center mobile:self-center mobile:order-1'>
      <button onClick={()=>controllerCrew(1)} className={crew1 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button> 
      <button  onClick={()=>controllerCrew(2)} className={crew2 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button onClick={()=>controllerCrew(3)}  className={crew3 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button  onClick={()=>controllerCrew(4)} className={crew4 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      </div>
 
     
  </div> 
  
  
  </div>

  <div className='mobile:w-327 flex flex-col  items-center desktop:absolute right-0'>
  <img className=' desktop:relative desktop:-bottom-20 z-0 desktop:h-712 tablet:h-572 mobile:h-222 mobile:w-177' src="12-space/crew/image-victor-glover.png" alt="" />
  <hr className='border-white opacity-50 border-1 w-full  desktop:hidden tablet:hidden mobile:flex' />
  </div>
</div> : 
 crew4 ? 
 <div className=' desktop:w-1140 desktop:h-712 flex desktop:flex-row tablet:flex-col mobile:flex-col-reverse  mobile:items-center  flex-col justify-between gap-8 mobile:gap-12 tablet:text-center tablet:items-center '>
  
  <div>
  <div className='flex flex-col  gap-4  mobile:items-center'> 
      <div className='flex flex-col mobile:items-center mobile:order-2 mobile:mt-6'>
      <h2 className='desktop:text-h4 tablet:text-h8 mobile:text-nav-16 text-white uppercase opacity-50 '>Flight Engineer</h2> 
      <h1 className='desktop:text-h3 tablet:text-h7 mobile:text-h8  text-white uppercase desktop:w-614 '>Anousheh Ansari</h1> 
      </div>
      
      <div className='mobile:order-3 mobile:w-327'>
      <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15  text-space-lila desktop:w-444  desktop:h-160 mobile:w-327 mobile:text-center'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
      </div>

      <div className='flex flex-row gap-4 desktop:mt-32 tablet:mt-10 tablet:self-center mobile:self-center mobile:order-1'>
      <button onClick={()=>controllerCrew(1)} className={crew1 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button> 
      <button  onClick={()=>controllerCrew(2)} className={crew2 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button onClick={()=>controllerCrew(3)}  className={crew3 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      <button  onClick={()=>controllerCrew(4)} className={crew4 ?'rounded-full w-3.5 h-3.5 bg-white':'rounded-full w-3.5 h-3.5 bg-white opacity-20'}></button>
      </div>
 
     
  </div> 
  
  
  </div>

  <div className='mobile:w-327 flex flex-col items-center desktop:absolute right-0'>
  <img className=' desktop:relative desktop:-bottom-36 z-0 desktop:h-712 tablet:h-572 mobile:h-223 mobile:w-226 ' src="12-space/crew/image-anousheh-ansari.png" alt="" />
  <hr className='border-white opacity-50 border-1 w-full desktop:hidden  tablet:hidden mobile:flex' />
  </div>
</div> :  ''}

 
  
  </div>

  
</div>
    
  )
}

export default CrewSpace