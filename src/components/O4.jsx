import React from 'react'
import "./O4.css";
import Foto1 from "./Foto1.png"
import Foto4 from "./Foto4.png"
import Foto5 from "./Foto5.png"
import { TbPlugConnected } from "react-icons/tb";
import { FaRegCopy } from "react-icons/fa";
import { LuTag } from "react-icons/lu";


const O4 = () => {
  return (
    <div className="o4">
        <div className="na-txt4">
            <p className='big-txt3'>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing </p>
            <p className='small-txt3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, <br></br>necessitatibus laborum eius beatae sint saepe!</p>
        </div>
        <div className="k4">
<div className="top4">
  <div className="left4">
    <p className='bigger-txt4'>Get instant answears</p>
    <p className='small-txt4'>Lorem ipsum dolor sit amet <br></br>consectetur adipisicing.</p>
  </div>
  <div className="right4">
    <img className='foto4' src = {Foto1}></img>
  </div>
</div>
<div className="middle4">
  <div className="left44">
    <div className="top44"><p className='bigger-txt4'>Get instant answears</p>
    <p className='small-txt4'>Lorem ipsum dolor sit amet <br></br>consectetur adipisicing.</p></div>
    <div className="bottom44">
      <img className='foto44' src = {Foto4}></img>
    </div>
  </div>
  <div className="right44">
  <div className="top44"><p className='bigger-txt4'>Never lose sources</p>
    <p className='small-txt4'>Gems provides sources with any answer, so you can go back to prove things any time.</p></div>
    <div className="bottom44">
      <img className='foto44' src = {Foto5}></img>
    </div>
  </div>
</div>
<div className="bottom4">
  <div className="kwa4">
    <TbPlugConnected  size = {35}/>
    <p className='small-txt33'><span className='span-edit3'>All knowledge centalized</span>  Get it all into one place without any work</p>
</div>
  <div className="kwa4">
  <FaRegCopy size={35}/>

  <p className='small-txt33'><span className='span-edit3'>Easy to set up.</span> Connect your tools in seconds. It’s zero upkeep form here.</p>
  </div>
  <div className="kwa4">
  <LuTag size={35} />
  <p className='small-txt33'><span className='span-edit3'>No manual organization.</span> Be perfectly organized with zero effort.</p>
  </div>
</div>
        </div>
    </div>
  )
}

export default O4