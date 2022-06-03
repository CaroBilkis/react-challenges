import React,{useState} from 'react'
import { NavLink } from "react-router-dom";


function DestinationSpace() {

    const [home, setHome] =useState(false);
    const [destination, setDestination] =useState(true);
    const [crew, setCrew] =useState(false);
    const [tech, setTech] =useState(false);

    const [hoverHome, setHoverHome] =useState(false);
    const [hoverDestination, setHoverDestination] =useState(false);
    const [hoverCrew, setHoverCrew] =useState(false);
    const [hoverTech, setHoverTech] =useState(false);

    const [moon, setMoon] =useState(true);
    const [mars, setMars] =useState(false);
    const [europa, setEuropa] =useState(false);
    const [titan, setTitan] =useState(false);

    const [hoverMoon, setHoverMoon] =useState(false);
    const [hoverMars, setHoverMars] =useState(false);
    const [hoverEuropa, setHoverEuropa] =useState(false);
    const [hoverTitan, setHoverTitan] =useState(false);


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
            setDestination(true);
            break;
      }}
    const navControllerDestination = (number) =>{
      switch (number){

        case 1:
            setMoon(true);
            setMars(false);
            setEuropa(false);
            setTitan(false);
         break;
        case 2:
            setMoon(false);
            setMars(true);
            setEuropa(false);
            setTitan(false);
          break; 
        case 3:
            setMoon(false);
            setMars(false);
            setEuropa(true);
            setTitan(false);
          break; 
        case 4:
            setMoon(false);
            setMars(false);
            setEuropa(false);
            setTitan(true);
          break;
            
        default:
            setMoon(true);
          break;
    }}
  return (
    <div className='   mobile:bg-spaceDestinationMobile tablet:bg-spaceDestinationTablet desktop:bg-spaceDestinationDesktop  mobile:h-screen tablet:h-autov desktop:h-screen bg-cover font-bellefair p-14 flex flex-col mobile:gap-14 tablet:justify-between mobile:justify-start  overflow-hidden
    '>                    

   <div className='flex flex-row justify-between z-50  items-center '>
    
    <div className='flex flex-row items-center gap-14 '>
    <NavLink className="" to="/space/home"><img className='z-0 ' src="12-space/home/logo.png" alt="" /></NavLink>
    <div className=' 
     z-0 h-0.5 bg-gray-700  desktop:w-440 '></div>
    
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


  <div className=' flex flex-col desktop:items-start tablet:items-center mobile:items-center justify-between relative tablet:py-10 desktop:p-24 tablet:gap-10 desktop:gap-14 mobile:gap-6'>
 
  <div className='flex flex-col gap-6 tablet:self-start'>
     <div className='flex flex-row gap-4 tracking-4-72 desktop:text-h5 mobile:text-nav-16'>
     <h2 className='uppercase  text-white font-bold font-barlow-condensed opacity-25'>01</h2>
     <h2 className='uppercase  text-white font-barlow-condensed'>pick your destination</h2>
    </div>

   
    
    </div>
 
   <div className='  tablet:w-585  tablet:h-760 flex tablet:flex-col mobile:flex-col desktop:flex-row items-center justify-between gap-8 tablet:text-center mobile:text-center'>
      {moon? <img className='tablet:w-300 tablet:h-300 mobile:h-170 mobile:w-170 z-0 ' src="12-space/destination/image-moon.png" alt="" />
      :mars? <img className='tablet:w-300 tablet:h-300 mobile:h-170 mobile:w-170 z-0 ' src="12-space/destination/image-mars.png" alt="" />
      :europa? <img className='tablet:w-300  tablet:h-300 mobile:h-170 mobile:w-170  z-0 ' src="12-space/destination/image-europa.png" alt="" />
      :titan? <img className='tablet:w-300  tablet:h-300 mobile:h-170 mobile:w-170  z-0 ' src="12-space/destination/image-titan.png" alt="" />
      :''}

   <div className='flex flex-col'>
       <div className='flex flex-row mobile:justify-center  tablet:justify-center gap-4 tablet:text-nav-16 mobile:text-nav-14'>
       <div>
       <button onClick={()=>navControllerDestination(1)} onMouseEnter={()=>setHoverMoon(true)} onMouseLeave={()=>setHoverMoon(false)}    className={moon ? 'uppercase font-barlow-condensed tracking-2-7 text-white':'uppercase font-barlow-condensed tracking-2-7 text-space-lila'}>moon</button>
        {moon ? <hr className='relative top-2  border-2 border-white' />:hoverMoon ? <hr className='relative  top-2 border-2 border-gray-blue' /> : <hr className='relative    top-2  border-2 opacity-0' />}
       </div>

        <div>
        <button onClick={()=>navControllerDestination(2)}  onMouseEnter={()=>setHoverMars(true)} onMouseLeave={()=>setHoverMars(false)}  className={mars ? 'uppercase font-barlow-condensed tracking-2-7 text-white':'uppercase font-barlow-condensed tracking-2-7 text-space-lila'}>mars</button>
        {mars ? <hr className='relative  top-2 border-2 border-white' />:hoverMars ? <hr className='relative   top-2 border-2 border-gray-blue' /> : <hr className='relative    top-2 border-2 opacity-0' />}
        </div>

       <div>
       <button onClick={()=>navControllerDestination(3)}  onMouseEnter={()=>setHoverEuropa(true)} onMouseLeave={()=>setHoverEuropa(false)}   className={europa ?'uppercase font-barlow-condensed tracking-2-7 text-white' :'uppercase font-barlow-condensed tracking-2-7 text-space-lila'}>europa</button>
        {europa ? <hr className='relative  top-2  border-2 border-white' />:hoverEuropa ? <hr className='relative   top-2  border-2 border-gray-blue' /> : <hr className='relative   top-2 border-2 opacity-0' />}
       </div>
      
      <div>
      <button onClick={()=>navControllerDestination(4)}  onMouseEnter={()=>setHoverTitan(true)} onMouseLeave={()=>setHoverTitan(false)}  className={titan ?'uppercase font-barlow-condensed tracking-2-7 text-white':'uppercase font-barlow-condensed tracking-2-7 text-space-lila'}>titan</button>
        {titan ? <hr className='relative  top-2  border-2 border-white' />:hoverTitan ? <hr className='relative   top-2 border-2 border-gray-blue' /> : <hr className='relative    top-2 border-2 opacity-0' />}
      </div>
       </div>

     { moon ? 
     <div className='flex flex-col gap-2 mr-4'> 
         <h1 className='desktop:text-h2 tablet:text-h6 mobile:text-h3 text-white uppercase '>moon</h1> 
        
        <div className='flex flex-col gap-8'>
          <p className=' font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila    mobile:w-327 h-auto'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

          <hr className='t-4' />

          <div className='flex tablet:flex-row mobile:flex-col justify-between  gap-2 tablet:gap-20 mobile:gap-6 tracking-2-35'>
            <div className=' flex flex-col'>  
            <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>avg. distance</h3>
            <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>384.400 km</h2>
            </div>

            <div className=' flex flex-col'>  
            <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>est. travel time</h3>
            <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>3 days</h2>
            </div>

          </div>
        </div>
     </div>

    : mars ? 
     <div className='flex flex-col gap-2 mr-4'> 
         <h1 className='desktop:text-h2 tablet:text-h6 mobile:text-h3 text-white uppercase'>mars</h1> 
        
        <div className='flex flex-col gap-8'>
        <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila mobile:w-327 h-auto'>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!.</p>

        <hr className='t-4' />

        <div className='flex tablet:flex-row mobile:flex-col justify-between tablet:gap-20 mobile:gap-6 tracking-2-35'>
        <div className=' flex flex-col'>  
        <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>avg. distance</h3>
        <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>225 MIL. km</h2>
        </div>

        <div className=' flex flex-col'>  
        <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>est. travel time</h3>
        <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>9 months</h2>
        </div>

        </div>
        </div>
     </div>

     : europa ? 
     <div className='flex flex-col gap-2 mr-4'> 
         <h1 className='desktop:text-h2 tablet:text-h6  mobile:text-h3 text-white uppercase  '>europa</h1> 
        
        <div className='flex flex-col gap-8'>
          <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila  mobile:w-327  h-auto'>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>

          <hr />

          <div className='flex tablet:flex-row mobile:flex-col justify-between tablet:gap-20 mobile:gap-6 tracking-2-35'>
          <div className=' flex flex-col'>  
          <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>avg. distance</h3>
          <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>628 MIL. km</h2>
          </div>

          <div className=' flex flex-col'>  
          <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>est. travel time</h3>
          <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>3 years</h2>
          </div>

          </div>
        </div>
     </div>

     : titan ? 
     <div className='flex flex-col gap-2 mr-4  '> 
         <h1 className='desktop:text-h2 tablet:text-h6  mobile:text-h3 text-white uppercase  '>titan</h1> 
        
        <div className='flex flex-col gap-8'>
        <p className='font-barlow desktop:text-nav-18 tablet:text-nav-16 mobile:text-nav-15 text-space-lila  mobile:w-327  h-auto'>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>

        <hr />

        <div className='flex tablet:flex-row mobile:flex-col justify-between tablet:gap-20 mobile:gap-6 tracking-2-35'>
        <div className=' flex flex-col'>  
        <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>avg. distance</h3>
        <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>1.6 BIL. km</h2>
        </div>

        <div className=' flex flex-col'>  
        <h3 className='uppercase font-barlow-condensed text-space-lila text-sub-h2'>est. travel time</h3>
        <h2 className='uppercase text-white tablet:text-h4 desktop:text-h4 mobile:text-sub-h1'>7 years</h2>
        </div>

        </div>
        </div>
     </div>

     :''}
   </div>
   </div>
  
  </div>

  
</div>
    
  )
}

export default DestinationSpace