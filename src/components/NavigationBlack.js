import React from "react";
import { NavLink } from "react-router-dom";
import {IoChevronBackOutline} from 'react-icons/io5';

function NavigationBlack(color) {
  return (
    <div className="mt-8  flex flex-row items-center ">
     <NavLink className="nav-link " to="/react-challenges/"> <IoChevronBackOutline color="black" size={30}  /></NavLink>
     <h1 className="font-semibold text-xl text-black">Back</h1>
    </div>
  );
}

export default NavigationBlack;