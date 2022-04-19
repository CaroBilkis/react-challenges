import Navigation from "../components/Navigation";


function QR() {
  return (
  <div>
  
    <div className='bg-blue-100 h-screen p-16'>
    <Navigation/>
    <div className='bg-white mx-auto p-4 container w-80 rounded-xl'>
      <div className='flex flex-col text-center '>
        <img className='rounded-xl' src="image-qr-code.png" alt="" />
        <div className='flex flex-col gap-4 mt-4'>
          <h1 className='font-bold text-2xl text-gray-800 '>Improve your front-end  <br /> skills by building projects</h1>
          <h1 className=' font-medium text-gray-400 mx-4'>Scan the QR code to visit Frontend  <br /> Mentor and take your coding skills to the next level</h1>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}

export default QR;
