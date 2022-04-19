import React, { useEffect, useState } from 'react'

function Resize(){
    const [width, setWidth]=useState(window.innerWidth);
const [height, setHeight]=useState(window.innerHeight);

const cambiarTamaño=()=>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
}

useEffect(()=>{
    window.addEventListener('resize', cambiarTamaño);
    return()=>{
        window.removeEventListener('resize', cambiarTamaño);
    }
})

return(
    <div className='container mx-auto text-center my-4 p-2 '>
        <p className='text-white'>{width} x {height}</p>
    </div>
);
}



export default Resize;