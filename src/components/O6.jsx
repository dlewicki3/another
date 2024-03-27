import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import "./O6.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const O6 = () => {
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
    <div className="o6">
      <div className="k6">
        <div className="kwa6">
          <FaStar />
        </div>
        <p className='big-txt6'>Start scooping out<br></br>gems today.</p>
        <button className='btn6' onClick={handleClick}>GET STARTED FOR FREE <MdOutlineArrowRightAlt size={25} /></button>
      </div>
      <div className="cienki"></div>
      {showDiv && (
        <div className="wrapper-bg">
          <motion.div className="show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="close" onClick={handleClose}>
              <IoMdClose />
            </div>
            <div className="show-kwa6">
              <FaStar />
            </div>
            <p className='bigger-txt6'>If you're ...</p>
            <p className='small-txt6'>
              a beautiful girl with brown hair,<br></br> enter your number here, I will<br></br> call you tommorow
            </p>
            <input
              ref={inputRef}
              className='input-holder'
              placeholder='Enter your number :)'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btn66' onClick={handleSend}>Sent</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default O6;
