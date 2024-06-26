import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './O1.css';
import { FaArrowRight } from "react-icons/fa6";
import Komp1 from './Komp1.png';
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const O1 = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setShowDiv(true);
  };

  const handleClose = () => {
    setShowDiv(false);
  };

  const handleSend = () => {
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <div className="o1">
      <div className="k1">
        <div className="top1">
          <p className='big-txt1'>
            Your <span className='span-edit'>AI</span> knowledge
        
            <ReactTyped strings={['Friend', 'Specialist', 'Teacher']} 
              typeSpeed={80} backSpeed={100} loop className='type' style ={{marginLeft:"5px"}}/>
          </p>
          <p className='small-txt1'>
            Get ready-to-use answers from all your knowledge<br></br> 
            and quit manual organization for good.
          </p>
          <button className='btn1' onClick={handleClick}>JOIN THE WAITLIST <FaArrowRight /></button>
        </div>
        <div className="komp">
          <img className='icon' src={Komp1} alt="icon" />
        </div>
      </div>
      {showDiv && (
        <div className="wrapper-bg">
          <motion.div className="show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="close" onClick={handleClose}>
              <IoMdClose />
            </div>
            <div className="show-kwa6">
              <FaStar />
            </div>
            <p className='bigger-txt6'>Join the waitlist</p>
            <p className='small-txt6'>
            We are currently in private beta.<br></br> Leave your email to get notified<br></br> once we launch publicly.
            </p>
            <input
              ref={inputRef}
              className='input-holder'
              placeholder='Enter your email :)'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btn66' onClick={handleSend}>Sent</button>
          </motion.div>
        </div>
      )}
      <div className="absolute1">efwefew</div>
    </div>
  );
}

export default O1;
