import React,{useState} from 'react'
import { NavLink } from "react-router-dom";


function HomeSpace() {

    const [hoverHome, setHoverHome] =useState(false);
    const [hoverDestination, setHoverDestination] =useState(false);
    const [hoverCrew, setHoverCrew] =useState(false);
    const [hoverTech, setHoverTech] =useState(false);

    const [home, setHome] =useState(true);
    const [destination, setDestination] =useState(false);
    const [crew, setCrew] =useState(false);
    const [tech, setTech] =useState(false);

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
          setHome(true);
          break;
    }}
  return (
    <div className='mobile:bg-spaceMobile tablet:bg-spaceTablet desktop:bg-spaceDesktop h-screen bg-cover font-bellefair p-14 flex flex-col desktop:justify-between tablet:justify-between mobile:gap-16 '>                    
   
   

   <div className='flex flex-row justify-between z-50  items-center   '>
    
    <div className='flex flex-row items-center gap-14 '>
    <NavLink className="" to="/12-space/home"><img className='z-0 ' src="../12-space/home/logo.png" alt="" /></NavLink>
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
    

    <div className='absolute right-0 desktop:p-8 hidden desktop:flex  tablet:flex  mobile:hidden items-center justify-center '>
   
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

 
  <div className='flex desktop:flex-row tablet:flex-col mobile:flex-col desktop:text-left  items-center justify-between desktop:p-24  mobile:h-508 '>
    <div className='flex flex-col relative text-center  '>
        <div className='flex flex-col gap-6 '>
        <h2 className='uppercase desktop:text-h5 tablet:text-h5 mobile:text-nav-16 font-barlow-condensed text-space-lila font-barlow-condensed tracking-2-35 '>so, you want to travel to</h2>
        <h1 className='text-white desktop:text-h1 tablet:text-h1 mobile:text-h6 uppercase'>space</h1>
        </div>
        <p className='text-white desktop:text-nav-16 tablet:text-nav-16 mobile:text-nav-16 font-barlow w-440 mobile:w-327  text-space-lila'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
    </div>

    <div>
    <button className='text-black bg-white rounded-full desktop:w-274 desktop:h-274 tablet:w-242 tablet:h-242 mobile:w-150 mobile:h-150 hover:shadow-space relative desktop:top-14'>
    <h1 className='uppercase desktop:text-h4 tablet:text-h4 mobile:text-h9'>explore</h1>
    </button>
    </div>
  </div>

  
</div>
    
  )
}

export default HomeSpace