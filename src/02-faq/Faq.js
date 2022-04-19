import React, {useState} from 'react';
// import Accordion from './components/Accordion';

import Navigation from "../components/Navigation";
import { IoChevronUp,IoChevronDown } from "react-icons/io5";

 
function Faq() {

    const [p1, setP1] = useState(false);
    const [p2, setP2] = useState(false);
    const [p3, setP3] = useState(false);
    const [p4, setP4] = useState(false);
    const [p5, setP5] = useState(false);

    const changeQuestion = (number, title) =>{
      switch (number){
        case 1:
         
          setP1(!p1);
          setP2(false);
          setP3(false);
          setP4(false);
          setP5(false);
          break;
        case 2:
         
          setP1(false);
          setP2(!p2);
          setP3(false);
          setP4(false);
          setP5(false);
          break; 
        case 3:
          setP1(false);
          setP2(false);
          setP3(!p3);
          setP4(false);
          setP5(false);
          break; 
        case 4:
          setP1(false);
          setP2(false);
          setP3(false);
          setP4(!p4);
          setP5(false);
          break;
        case 5:
          setP1(false);
          setP2(false);
          setP3(false);
          setP4(false);
          setP5(!p5);
          break;         
        default:
          break;
      }
    }

    // const accorditionData = [
    // {title:'How many team members can I invite?' , content:'There is no limit on team members for the Premium plan.', state:p1},
    // {title:'What is the maximum file upload size?' , content:'No more than 2GB. All files in your account must fit your allotted storage space.', state:p2},
    // {title:'How do I reset my password?' , content:'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.', state:p3},
    // {title:'Can I cancel my subscription?' , content:'Yes! Send us a message and we´ll process your request no questions asked.', state:p4},
    // {title:'Do you provide additional support?' , content:'Chat and email support is available 24/7. Phone lines are open during normal business hours.', state:p5}
    // ];


  return (
  <div>
  {/*  */}
    <div className='h-screen p-16  bg-gradient-m'>
    <Navigation/>
   
           {/* w-500 h-800 */}
    <div className='bg-white mx-auto my-24 rounded-xl w-375  h-530 container md:rounded-xl sm:rounded-3xl  md:w-920 md:h-508 sm:w-375  sm:h-530'>
         
        <div className='flex flex-col p-4 md:flex-row lg:flex-row xl:flex-row'>
          
            <div className='static'>
            <div className='relative -top-32 left-8 md:-inset-x-20 md:inset-y-10 sm:-top-32 sm:left-8'>
            <img className='w-64 sm:w-64 md:w-472  transform ease-in-out duration-300 hover:translate-x-1 '  src="illustration-woman-online-desktop.png"  alt="" />
            <div className='absolute top-14 -left-6 md:top-24 md:-left-8  sm:top-14 sm:-left-6 z-40 '>
            <img className='w-28 sm:w-28 md:w-48 transform ease-in-out duration-200 hover:translate-y-1' src="illustration-box-desktop.png"  alt="" />
            </div>
            </div>
            </div>
            
           <div className='flex flex-col  self-center '>
                <h1 className='text-3xl font-bold uppercase  text-center -mt-24 md:mt-8 md:text-left sm:text-center sm:-mt-24'>FAQ</h1>
                {/* <h1>{accorditionData.map(({title, content, state})=>(<Accordion title={title} content={content} state={state}/>))}</h1> */}


                <div className="mt-6 h-18  w-72 md:w-400 sm:w-72">
                <div className="text-grayish-verydark text-body" onClick={() => changeQuestion(1)}>
                <div className='flex flex-row items-center gap-2 '>
                  <div className={p1 ? 'font-bold' : 'font-normal hover:text-orange-600'}>How many team members can I invite? </div>
                  <div> {p1 ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
                </div>
                </div>
                {p1 && <div className="mt-2 md:w-400 w-72 sm:w-72 text-body text-grayish-dark">There is no limit on team members for the Premium plan.</div>}
                <hr className='mt-4' />
               </div>

              
              <div className="mt-6  h-18 md:w-400 sm:w-72 w-72 ">
                <div className="text-grayish-verydark text-body" onClick={() => changeQuestion(2)}>
                <div className='flex flex-row items-center gap-2 '>
                  <div className={p2 ? 'font-bold' : 'font-normal hover:text-orange-600'}>What is the maximum file upload size?</div>
                  <div> {p2 ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
                </div>
                </div>
                {p2 && <div className="mt-2 md:w-400 sm:w-72 text-body text-grayish-dark">No more than 2GB. All files in your account must fit your allotted storage space.</div>}
                <hr className='mt-4' />
              </div>

              <div className="mt-6   h-18 md:w-400 sm:w-72 w-72 ">
                <div className="text-grayish-verydark text-body" onClick={() => changeQuestion(3)}>
                <div className='flex flex-row items-center gap-2 '>
                  <div className={p3 ? 'font-bold' : 'font-normal hover:text-orange-600'}>How do I reset my password? </div>
                  <div> {p3 ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
                </div>
                </div>
                {p3 && <div className="mt-2 w-400 sm:w-72 w-72  text-body text-grayish-dark">Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</div>}
                <hr className='mt-4' />
              </div>

              <div className="mt-6 h-18 md:w-400 sm:w-72 w-72 ">
                <div className="text-grayish-verydark text-body" onClick={() => changeQuestion(4)}>
                <div className='flex flex-row items-center gap-2 '>
                  <div className={p4 ? 'font-bold' : 'font-normal hover:text-orange-600'}>Can I cancel my subscription?</div>
                  <div> {p4 ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
                </div>
                </div>
                {p4 && <div className="mt-2 w-400 sm:w-72 w-72  text-body text-grayish-dark">Yes! Send us a message and we´ll process your request no questions asked.</div>}
                <hr className='mt-4' />
              </div>

              <div className="mt-6 h-18 md:w-400 sm:w-72 w-72 ">
                <div className="text-grayish-verydark text-body" onClick={() => changeQuestion(5)}>
                <div className='flex flex-row items-center gap-2 '>
                  <div className={p5 ? 'font-bold' : 'font-normal hover:text-orange-600'}>Do you provide additional support?</div>
                  <div> {p4 ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
                </div>
                </div>
                {p5 && <div className="mt-2 w-400 sm:w-72 w-72 text-body text-grayish-dark">Chat and email support is available 24/7. Phone lines are open during normal business hours.</div>}
                <hr className='mt-4' />
              </div>

           </div>    
        </div>
    </div>
  </div>
  </div>
  );
}

export default Faq;
