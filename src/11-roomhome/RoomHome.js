import React,{useState} from 'react'

const RoomHome = () => {

  const [page, setPage] = useState(1);
  const [menu, setMenu] =useState(false);

  const controlMenu = () =>{
    setMenu(!menu);
  }
  console.log(page);
  const nextPage = (mPage) =>{
    if(mPage<3) {
      mPage++;
    }
    setPage(mPage)
  }

  const previusPage = (mPage) =>{
    if(mPage>1) {
      mPage--;
    }
    setPage(mPage)
  } 
  return (
  <div className=' font-12 font-spartan grid grid-rows-1 sm:grid-rows-1 md:grid-cols-3 w-485 sm:w-485 md:w-full mx-auto'>

  <div class=" col-span-1 md:col-span-2 grid justify-end relative h-360 sm:h-360 md:h-530 w-485 sm:w-485 md:w-auto">

   <section className={page===1 ? "absolute left-0 top-0 bg-bottom sm:bg-bottom md:bg-top  bg-cover bg-roomheadermobile1 sm:bg-roomheadermobile1 md:bg-roomheader1 h-360 w-485 sm:w-485 md:h-530 md:w-full ":
   page===2 ? "absolute left-0 top-0 bg-bottom sm:bg-bottom md:bg-top bg-cover bg-roomheadermobile2 sm:bg-roomheadermobile2 md:bg-roomheader2 h-360 w-485 sm:w-485 md:h-530 md:w-full":
   page===3 ? "absolute left-0 top-0  bg-bottom sm:bg-bottom md:bg-top bg-cover bg-roomheadermobile3 sm:bg-roomheadermobile3 md:bg-roomheader3 h-360 w-485 sm:w-485 md:h-530 md:w-full": ''}>
   <div className='hidden sm:hidden md:flex flex-row z-40 gap-8 m-12 absolute'>
        <div className='self-center'>
        <svg width="62" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z" fill="#FFF" fill-rule="nonzero"/></svg>
        </div>
            <div className='flex flex-row gap-4'>
                <h2 className='font-medium text-white border-b-2 border-transparent hover:border-white'>home</h2>
                <h2 className='font-medium text-white border-b-2 border-transparent hover:border-white'>shop</h2>
                <h2 className='font-medium text-white border-b-2 border-transparent hover:border-white'>about</h2>
                <h2 className='font-medium text-white border-b-2 border-transparent hover:border-white'>contact</h2>
                
            </div>
    </div> 
    <div className={menu ? 'hidden' :'flex sm:flex md:hidden flex-row p-12 h-24 w-485 justify-between '}>

      
        <div className='' onClick={()=>controlMenu()}>
        <svg width="16" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
        </div>
        
      
      {/* room */}
        <div className=''> 
            <svg width="62" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.988 12.672v-7.32c0-.48.142-.928.426-1.344a3.36 3.36 0 011.11-1.02c.456-.264.94-.396 1.452-.396.296 0 .618.048.966.144.348.096.654.224.918.384L9.096.588A4.277 4.277 0 007.998.162 5.115 5.115 0 006.744 0c-.776 0-1.488.186-2.136.558-.648.372-1.188.91-1.62 1.614V.384H0v12.288h2.988zm13.472.384c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0020.054.828C18.986.276 17.788 0 16.46 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm15.704 2.568c1.328 0 2.526-.276 3.594-.828a6.406 6.406 0 002.532-2.304c.62-.984.93-2.116.93-3.396 0-1.288-.31-2.422-.93-3.402A6.421 6.421 0 0035.758.828C34.69.276 33.492 0 32.164 0c-1.336 0-2.536.276-3.6.828a6.476 6.476 0 00-2.532 2.298c-.624.98-.936 2.114-.936 3.402 0 1.28.312 2.412.936 3.396a6.45 6.45 0 002.538 2.304c1.068.552 2.266.828 3.594.828zm0-2.568c-.744 0-1.416-.17-2.016-.51a3.729 3.729 0 01-1.416-1.404c-.344-.596-.516-1.278-.516-2.046 0-.776.172-1.462.516-2.058a3.686 3.686 0 011.416-1.398c.6-.336 1.272-.504 2.016-.504.752 0 1.426.168 2.022.504a3.698 3.698 0 011.41 1.398c.344.596.516 1.282.516 2.058 0 .768-.172 1.45-.516 2.046a3.741 3.741 0 01-1.41 1.404c-.596.34-1.27.51-2.022.51zm12.608 2.184V4.896c0-.44.126-.85.378-1.23s.596-.686 1.032-.918c.436-.232.93-.348 1.482-.348.8 0 1.432.258 1.896.774.464.516.696 1.206.696 2.07v7.428h2.988V4.908c0-.44.124-.852.372-1.236a2.717 2.717 0 011.02-.924c.432-.232.92-.348 1.464-.348.8 0 1.438.266 1.914.798s.714 1.254.714 2.166v7.308h2.988V4.548c0-.952-.198-1.766-.594-2.442a4.051 4.051 0 00-1.62-1.56C58.818.182 58.036 0 57.156 0c-.928 0-1.744.21-2.448.63-.704.42-1.332 1.022-1.884 1.806-.312-.744-.846-1.336-1.602-1.776C50.466.22 49.604 0 48.636 0c-.752 0-1.442.152-2.07.456-.628.304-1.226.772-1.794 1.404V.384h-2.988v12.288h2.988z" fill="#FFF" fill-rule="nonzero"/></svg>
        </div>

        <div className=' opacity-0'>
        <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
        </div>
    </div> 

    {menu ? 
    <div>
    
        
      
        <div className='md:hidden bg-white w-485 flex sm:flex flex-row h-24 justify-between p-12 items-center' >
        <svg onClick={()=>controlMenu()}  width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
       
        <div className='flex flex-row gap-8 '>
                <h2 className='font-semibold text-lg text-black border-b-2 border-transparent hover:border-white'>home</h2>
                <h2 className='font-semibold text-lg text-black border-b-2 border-transparent hover:border-white'>shop</h2>
                <h2 className='font-semibold text-lg text-black border-b-2 border-transparent hover:border-white'>about</h2>
                <h2 className='font-semibold text-lg text-black border-b-2 border-transparent hover:border-white'>contact</h2>
                
        </div>
        </div> 
        <div className='bg-black opacity-70 h-1920 z-50 w-485'>

        </div>
        
    
        
        
    </div>
    :''}

   </section> 
 

  <div className='self-end   absolute md:-right-24 right-7 sm:right-7'>
  <div className='flex flex-row w-24 '>
          <div className='bg-black p-6 hover:bg-room-very-dark-gray' onClick={()=>previusPage(page)}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
          </div>
          <div className='bg-black p-6 hover:bg-room-very-dark-gray'  onClick={()=>nextPage(page)}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg>
          </div>
      </div>
  </div>
  </div>
  <div class=" self-center flex flex-col gap-4 px-4 py-6 md:p-12 md:w-full w-375  mx-auto sm:w-375 ">
 
  { page === 1 ? 
        <>
        <h1 className='text-3xl md:text-5xl font-semibold w-310 sm:w-310 md:w-440 pt-4'>Discover innovative ways to decorate</h1>
          <p className='w-308 sm:w-308 md:w-420 h-180 text-room-dark-gray font-16'>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in briging
          your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
        </>
       :
      page === 2 ? 
      <>
      <h1 className='text-3xl md:text-5xl font-semibold w-310 sm:w-310 md:w-440 pt-4 '>We are available all across the globe</h1>
      <p className='w-308 sm:w-308 md:w-420 h-180 text-room-dark-gray font-16'>With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Fin the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.</p> 
      </>
     : page === 3 ? 
     <>
     <h1 className='text-3xl md:text-5xl font-semibold w-310 sm:w-310 md:w-440 pt-4'>Manufactured with the best materials</h1>
      <p className='w-308 sm:w-308 md:w-420 h-180 text-room-dark-gray font-16'>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what custumers wan for their home and office.</p> 
     
     </> : ""
      }

      <button className='flex flew-row items-center gap-3 tracking-2 text-black hover:text-room-dark-gray'>
        <h2 className='uppercase font-16  text-left'> shop now</h2>
        <svg className='' width="40" height="12" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="currentColor" stroke="none" viewBox="0 0 22 20"/>
        </svg>
        </button>
  
  </div>
 
 <div className='mx-auto bg-roomdark w-485 sm:w-500 z-0 h-265 md:h-auto md:w-full bg-cover bg-left '></div>

  <div class="flex flex-col gap-2 mx-auto h-330 sm:h-330 md:h-409 w-375 sm:w-375 md:w-auto px-4 justify-center">
  <h2 className='uppercase font-semibold font-16  tracking-widest'>About our furniture</h2>

      <p className='font-16  text-room-dark-gray '> Our multifunctional collection bleds design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best
      express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. <br />
      Product specialists are available to help you create your dream space.
      </p>
  </div>
 
  <div className='mx-auto bg-roomlight w-485 sm:w-500  h-265 md:h-auto md:w-full bg-cover bg-left'></div>
  
  
  </div>
  )
}

export default RoomHome