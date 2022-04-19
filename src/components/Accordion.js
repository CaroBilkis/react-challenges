import React, { useState } from 'react';
import { IoChevronUp,IoChevronDown } from "react-icons/io5";

const Accordion = ({ title, content, state }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mt-6   h-18 w-400">
      <div className="text-grayish-verydark text-body" onClick={() => setIsActive(!isActive)}>
      <div className='flex flex-row items-center gap-2 '>
        <div className={isActive ? 'font-bold' : 'font-normal hover:text-orange-600'}>{title} </div>
        <div> {isActive ? <IoChevronUp color={"DB917D"}/> : <IoChevronDown color={"DB917D"}/>} </div>
      </div>
      </div>
      {isActive && <div className="mt-2 w-400 text-body text-grayish-dark">{content}</div>}
      <hr className='mt-4' />
    </div>
  );
};

export default Accordion;