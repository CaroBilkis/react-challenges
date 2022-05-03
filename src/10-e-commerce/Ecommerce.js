import { hover } from '@testing-library/user-event/dist/hover';
import React,{useState} from 'react'
import Gallery from './Gallery';
import { FaTrashAlt } from "react-icons/fa";


function Ecommerce() {
  const [gallery, showGallery] =useState(false);
  const [numberImg, setNumberImg] =useState(0);
  const [hoverCollection, setHoverCollection] =useState(false);
  const [hoverMen, setHoverMen] =useState(false);
  const [hoverWoman, setHoverWoman] =useState(false);
  const [hoverAbout, setHoverAbout] =useState(false);
  const [hoverContact, setHoverContact] =useState(false);
  const [selectedImg, setSelectedImg] =useState(Gallery[0]);

  const [addCart, setAddCart] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState(false);

  const imgs =[ 
  "10-e-commerce/image-product-1.jpg",
  "10-e-commerce/image-product-2.jpg",
  "10-e-commerce/image-product-3.jpg",
 "10-e-commerce/image-product-4.jpg",];

  const [cant, setCant] = useState(1);
  
  const total = 125 *cant;
  const incriseImg = (number) =>{
    if (number<3){
      number++;
    }
    setNumberImg(number);
    
   console.log(Gallery[number]) ;
  }
  const decremetImg = (number) =>{
    if (number>0){
     number--;
    }

    setNumberImg(number);
    
   }

  const moreCant = (cant)=>{
    if (cant <10) {
      cant++;
     }
    setCant(cant);
  } 

  const lessCant = (cant) =>{
   if (cant>1) {
    cant--;
   }
    setCant(cant);
  }

  const controlCart = () => {
    setShowCart(!showCart);
  }

  const controlMenu = () => {
    setMenu(!menu);
  }


  return (
    <div className='p-8 font-kumbhsans'>
      <div className='flex flex-row justify-between items-center'>
      <div className='flex flex-row gap-14'>

        <div className='flex flex-row items-center gap-3 md:items-start'>
          
        <div className='flex sm:flex md:hidden'>
        {menu ?
        <svg className='z-50'  onClick={()=>controlMenu()}  width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>         
        : <svg className='z-50'  onClick={()=>controlMenu()} width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
        }
        </div>

        <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z" fill="#1D2026" fillRule="nonzero"/></svg>
      
      
        </div>
      

        <div className='hidden sm:hidden md:flex flex-row gap-6'>
         <div onMouseEnter={()=>setHoverCollection(true)} onMouseLeave={()=>setHoverCollection(false)} className='w-auto cursor-default'>
         <h1 className='relative text-ec-dark-grayishblue font-16 '>Collection</h1>
         <hr className={hoverCollection ? 'relative  top-12 border-2 border-ec-orange':'relative border-2 top-12 border-transparent '} />
         </div>
         <div onMouseEnter={()=>setHoverMen(true)} onMouseLeave={()=>setHoverMen(false)} className='w-auto cursor-default'>
         <h1 className='relative text-ec-dark-grayishblue font-16 '>Men</h1>
         <hr className={hoverMen ? 'relative  top-12 border-2 border-ec-orange':'relative border-2 top-12 border-transparent '} />
         </div>
         <div onMouseEnter={()=>setHoverWoman(true)} onMouseLeave={()=>setHoverWoman(false)} className='w-auto cursor-default'>
         <h1 className='relative text-ec-dark-grayishblue font-16 '>Women</h1>
         <hr className={hoverWoman ? 'relative  top-12 border-2 border-ec-orange':'relative border-2 top-12 border-transparent '} />
         </div>
         <div onMouseEnter={()=>setHoverAbout(true)} onMouseLeave={()=>setHoverAbout(false)} className='w-auto cursor-default'>
         <h1 className='relative text-ec-dark-grayishblue font-16 '>About</h1>
         <hr className={hoverAbout ? 'relative  top-12 border-2 border-ec-orange':'relative border-2 top-12 border-transparent '} />
         </div>
         <div onMouseEnter={()=>setHoverContact(true)} onMouseLeave={()=>setHoverContact(false)} className='w-auto cursor-default'>
         <h1 className='relative text-ec-dark-grayishblue font-16 '>Contact</h1>
         <hr className={hoverContact ? 'relative  top-12 border-2 border-ec-orange':'relative border-2 top-12 border-transparent '} />
         </div>
         
        </div>
      </div>


      <div className='flex flex-row gap-0  md:gap-8 items-center'>
        <div className='flex flex-col'>
          <div  onClick={()=>controlCart()} className={'flex flex-row  w-14 h-6 items-center'}>
            <svg class={addCart ? 'relative text-ec-dark-grayishblue w-4 md:w-8' :'relative text-ec-dark-grayishblue w-4 md:w-6'}  fill="currentColor" stroke="none" viewBox="0 0 22 20">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" /></svg>
          
          {addCart ?     
            <h1 className='text-xs w-6 md:w-10  relative -top-2 -left-2  rounded-xl flex justify-center items-center text-white bg-ec-orange font-bold'>{cant}</h1> 
            : '' }
          </div>
    
      {showCart ?
        <div className='absolute top-28 md:top-24 inset-x-0 md:inset-x-auto  md:right-0 z-20 bg-white rounded-md shadow-xl w-auto mx-2 md:mx-0  md:w-280 h-200 p-4 flex flex-col gap-4 '>
        <h1 className='font-bold'>Cart</h1> 
        <hr />
        
        { !addCart ?
        
          <div className='flex items-center justify-center  h-full'>
          <h1 className='text-xs text-ec-dark-grayishblue text-center '>Your cart is empty.</h1>

          </div>
        :
        <>
        <div className='flex flex-row gap-3 items-center w-380   md:w-auto '>
        <img className='w-10 rounded-md' src={imgs[numberImg]} alt="" />
        
        <div className='flex flex-col gap-0.5 '>
        <h1 className='text-xs text-ec-dark-grayishblue md:w-auto w-280 sm:w-280'>Fall limited Edition Sneakers</h1>
        <div className='flex flex-row gap-1'>
        <h1 className='text-xs text-ec-dark-grayishblue'>$125.00 x {cant}</h1>
          <h1 className='text-xs font-bold'> ${total}.00</h1>
        </div>
      
        
        </div>

        <FaTrashAlt className='absolute right-4 sm:right-0 md:relative ' onClick={()=>setAddCart(0)} color="#C3CAD9" size={14}/>

        </div>
        <div>
        <button onClick={()=>controlCart()} className='bg-ec-orange text-white flex flex-row items-center py-3 px-4 rounded-lg  justify-center gap-2 w-full  hover:opacity-80  text-xs font-bold'>Checkout</button>

        </div>
        </>
        
        }

        </div>
       
       :''}
        </div>
        <img className='w-8 md:w-14 rounded-full border-2 border-transparent  hover:border-ec-orange ' src="10-e-commerce/image-avatar.png" alt="" />
      </div>
      </div>

     
      {menu  ? 
       <>
       <div className='w-screen h-screen p-8 top-0 left-0 bg-black opacity-70 z-40 absolute flex sm:flex md:hidden '>
            
            </div>
            <div className=' absolute top-0 left-0 sm:flex flex md:hidden  z-40 bg-almost-white h-screen w-72'>
            <div className='flex flex-col gap-4 px-8 items-start  mt-24'>
            <h1 className=' text-black font-bold font-16'>Collections</h1>
            <h1 className=' text-black font-bold font-16'>Men</h1>
            <h1 className=' text-black font-bold font-16'>Women</h1>
            <h1 className=' text-black font-bold font-16'>About</h1>
            <h1 className=' text-black font-bold font-16'>Contact</h1>
            </div>
            </div>
       </>
      : ''
      }

    
    <div className='mt-8 w-auto h-1 bg-ec-light-grayishblue  '>

    </div>

    <div className='flex flex-col md:flex-row justify-between  w-full md:m-14 items-center gap-6'>
      <div className='flex flex-col gap-8 '>
    
    {gallery ?
      <div className='hidden md:flex'>
      <div className='absolute top-0 left-0  z-40  w-full h-screen '>
      <div className='relative  flex flex-row gap-4 justify-center m-24  '>
      <div className='flex flex-col gap-8  items-center  '>
        <div className='flex flex-row justify-center items-center w-610 '>
        <button onClick={()=>decremetImg(numberImg)} className='bg-ec-light-grayishblue rounded-full w-10 h-10 items-center flex justify-center relative left-5'>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
        </button>

        <img  className='w-472 rounded-xl border-2 border-transparent  hover:border-ec-orange' src={imgs[numberImg]}/>
        
        <button onClick={()=>incriseImg(numberImg)} className='bg-ec-light-grayishblue rounded-full w-10 h-10 items-center flex justify-center relative right-5'>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg> 
        </button>
        </div>

      <div className='flex flex-row justify-between  w-375 md:w-472'>
     
      {Gallery.map((img, index)=>(
        <img    className=' w-1/5 rounded-xl border-2 border-transparent  hover:border-ec-orange '  key={index} src={img} onClick={imgs[img]} alt="" />
      ))}
      </div>
     </div>

   
    <svg class='text-white w-10 h-10 hover:text-ec-orange' onClick={()=>showGallery(false)} fill="currentColor" stroke="none" viewBox="0 0 32 32">
    <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" 
   />
    </svg>
    
   </div>

    </div>
    <div className='w-screen h-920  top-0 left-0 bg-black opacity-70 z-20 absolute '>
            
     </div>
      </div>
     :''}

    
      <img onClick={()=>showGallery(true)} className='hidden md:flex w-375 md:w-472 rounded-xl border-2 border-transparent  hover:border-ec-orange ' src={selectedImg}/>
      
    
      <div className='md:hidden flex  flex-row justify-center items-center w-610 relative z-0'>
       


       
        
        <button onClick={()=>decremetImg(numberImg)} className='bg-ec-light-grayishblue rounded-full w-4 h-4 p-4  z-0 relative left-16'>
        <svg class="relative -left-2 -top-2" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg>
        </button>

        <div className='h-330 overflow-hidden w-440 bg-emerald-300'>
        <img className=' w-auto' src={imgs[numberImg]}/>
        </div>

      
        <button onClick={()=>incriseImg(numberImg)} className='bg-ec-light-grayishblue rounded-full w-4 h-4 p-4  z-0 relative right-16'>
        <svg  class="relative -left-1 -top-2 " width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fillRule="evenodd"/></svg> 
        </button>
        </div>

      <div className='flex flex-row justify-between w-375 md:w-472'>
     
      {Gallery.map((img, index)=>(
        <img    className='hidden md:flex w-1/5 rounded-xl border-2 border-transparent hover:opacity-80 hover:border-ec-orange'  key={index} src={img} onClick={()=> setSelectedImg(img)}alt="" />
      ))}
      </div>
      </div>

      <div className='flex flex-col w-375 md:w-440 md:mr-16  '>
      <div className='flex flex-col gap-4'>
      <h1 className='uppercase text-xs text-ec-orange font-bold '> sneaker company</h1>

      <div className='flex flex-col gap-4'>
      <h1 className='text-4xl font-bold'>Fall Limited Edition Sneakers</h1>
      <p className='text-ec-dark-grayishblue'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      </div>

      <div className='flex flex-row justify-between items-center md:flex-col md:items-start'>
      <div className='flex flex-row gap-4 items-center'> 
      <h1 className='font-bold text-2xl'>$125.00</h1>
      <h1 className='flex items-center px-2 h-5 text-xs text-ec-orange bg-ec-paleorange rounded-md font-bold'>50%</h1>
      </div>
      <h1 className='font-bold line-through text-ec-grayishblue '>$250.00</h1>
      </div>

      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='bg-ec-light-grayishblue flex gap-2 p-2 items-center justify-between  rounded-lg md:w-2/5'>
        <button onClick={()=>lessCant(cant)}  className="">
        <span className="m-auto text-xl text-ec-orange font-bold pl-2 relative  -inset-y-0.5 hover:opacity-80">−</span>
        </button>
        <input  className="bg-transparent w-8 text-md text-center font-bold" value={cant}></input>
        <button onClick={()=>moreCant(cant)} className="   ">
          <span className="m-auto text-xl text-ec-orange font-bold pr-2  relative -inset-y-0.5 hover:opacity-80 ">+</span>
        </button>
        </div>

        <button  onClick={()=>setAddCart(true)} className='bg-ec-orange flex flex-row items-center py-2 px-4 rounded-lg  justify-center gap-2 md:w-3/5 hover:shadow-ec-orange hover:opacity-80  '>
        {/* <svg  width="22" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fillRule="nonzero"/></svg> */}
        <svg class={'relative text-white w-6'}  fill="currentColor" stroke="none" viewBox="0 0 22 20">
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" /></svg>
          
        <h1 className='text-white'>Add to cart</h1>
        </button>

      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Ecommerce