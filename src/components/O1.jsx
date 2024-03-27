import React, { useState } from 'react';
import './O1.css';
import { motion } from 'framer-motion'; // Assuming you're using Framer Motion for animations
import { FaArrowRight } from "react-icons/fa6";
import Komp1 from './Komp1.png';
import { IoMdClose } from "react-icons/io";

const O1 = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };

  const handleClose = () => {
    setShowDiv(false);
  };

  return (
    <div className="o1">
      <div className="k1">
        <div className="top1">
          <p className='big-txt1'>
            Your <span className='span-edit'>AI</span> knowledge<br></br> 
            {/* <ReactTyped strings={['Friend', 'Specialist', 'Teacher']} 
              typeSpeed={80} backSpeed={100} loop className='type' /> */}
          </p>
          <p className='small-txt1'>
            Get ready-to-use answers from all your knowledge<br></br> 
            and quit manual organization for good.
          </p>
          <button className='btn1' onClick={handleClick}>JOIN TO THE WAITLIST <FaArrowRight /></button>
        </div>
        <div className="komp">
          <img className='icon' src={Komp1} alt="icon" />
        </div>
      </div>
      {showDiv && (
        <div className="wrapper-bg">
          <motion.div className="show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
            <div className="close" onClick={handleClose}>
              <IoMdClose />
            </div>
          </motion.div>
        </div>
      )}
      <div className="absolute1">efwefew</div>
    </div>
  );
}

export default O1;
