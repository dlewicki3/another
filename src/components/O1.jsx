import React from 'react'
import './O1.css';
import { FaArrowRight } from "react-icons/fa6";
import Komp1 from './Komp1.png';

const O1 = () => {
  return (
   <div className="o1">
    <div className="k1">


      <div className="top1">
<p className='big-txt1'>Your
<span className='span-edit'>AI</span> 
knowledge assistant</p>
<p className='small-txt1'>Get ready-to-use answers from all your knowledge<br></br> and quit manual organization for good.</p>
<button className='btn1'>JOIN TO THE WAITLIST <FaArrowRight />
</button>
</div>
<div className="komp">
  <img className='icon' src = {Komp1}></img>
</div>

    </div>
    <div className="absolute1">efwefew</div>
   </div>
   
  )
}

export default O1