import React from 'react'
import "./O5.css";
import Foto6 from "./Foto6.png"
import Foto7 from "./Foto7.png"
import { FaRegStar } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";


const O5 = () => {
  return (
 <div className="o5">
    <div className="na-txt5">
    <p className='big-txt3'>Share and document.<br></br>
Zero writing required.</p>
<p className='small-txt3'>Sharing knowledge has never been easier. Paste <br></br>Gems anywhere with zero friction.</p>
</div>
    <div className="k5">
<div className="left5">
    <div className="top55">
    <p className='bigger-txt4'>Get instant answears</p>
    <p className='small-txt4'>Lorem ipsum dolor sit amet <br></br>consectetur adipisicing.</p>
    </div>
    <div className="bottom55">
<img className='foto5' src = {Foto6}></img>
    </div>
</div>
<div className="right5">
<div className="top55">
<p className='bigger-txt4'>Get instant answears</p>
    <p className='small-txt4'>Lorem ipsum dolor sit amet <br></br>consectetur adipisicing.</p>
</div>
    <div className="bottom55">
    <img className='foto5' src = {Foto7}></img>
    </div>
</div>

    </div>
    <div className="bottom5">
        <div className="kwa5">
        <FaRegStar size={35}/>

        <p className='small-txt33'><span className='span-edit3'>All knowledge centalized</span>  Get it all into one place without any work</p>
        </div>
        <div className="kwa5">
        <FaRegFolder size={35} />

        <p className='small-txt33'><span className='span-edit3'>All knowledge centalized</span>  Get it all into one place without any work</p>
        </div>
        <div className="kwa5">
        <RiComputerLine size={35} />

        <p className='small-txt33'><span className='span-edit3'>All knowledge centalized</span>  Get it all into one place without any work</p>
        </div>
    </div>
 </div>
  )
}

export default O5