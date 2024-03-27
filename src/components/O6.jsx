import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./O6.css";
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const O6 = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(true);
  };

  const handleClose = () => {
    setShowDiv(false);
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
        <motion.div className="show" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="close" onClick={handleClose}>
          <IoMdClose />
          </div>
        </motion.div>
        </div>
      )}
    </div>
  );
};

export default O6;
