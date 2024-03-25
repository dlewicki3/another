import React from 'react'
import "./O3.css";
import { RiSaveLine } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import Foto1 from "./Foto1.png"
import Foto2 from "./Foto2.png"
import Foto3 from "./Foto3.png"
const O3 = () => {
  return (
<div className="o3">
    <div className="k3">
        <div className="na-txt3">
<p className='big-txt3'>Lorem ipsum dolor sit<br></br> amet consectetur.</p>
<p className='small-txt3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Laboriosam iusto nobis unde molestias </p>
</div>
<div className="main3">
    <div className="top3">
    
     
        <div className="left33">
            <p className="big-txt333">Lorem, ipsum dolor.</p>
            <p className='small-txt333'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquam.</p>
        </div>
        <div className="right33">
            <img className='foto3' src= {Foto1}></img>
        </div>
    </div>
    <div className="middle3">
        <div className="left3">
            <div className="top33">
            <p className="big-txt333">Ask in your own words...
</p>
            <p className='small-txt333'>Ask Gems like how you’d ask a friend. It’s fast and feels truly effortless.</p>
            </div>
            <img className='foto33' src = {Foto2}></img>
        </div>
        <div className="right3">
        <div className="top33">
        <p className="big-txt333">...or  in somebody else’s</p>
            <p className='small-txt333'>Clip any text to provide context for what you ask Gems.</p>
        </div>
        <img className='foto33' src = {Foto3}></img>
        </div>
    </div>
    <div className="bottom3">
        <div className="kwa3">
        <RiSaveLine size={35} />
     <p className='small-txt33'>   <span className='span-edit3'>Remember anything. </span>Instantly. And without the cognitive overload.</p>
        </div>
        <div className="kwa3">
        <FaRegSmile size={35} />
        <p className='small-txt33'><span className='span-edit3'>Simple to use.</span> Having the perfect answer is just a question away.</p>
        </div>
        <div className="kwa3">
        <BsLightning size={35} />
<p className='small-txt33'><span className='span-edit3'>Easy to set up.</span> Connect your tools in seconds. It’s zero upkeep form here.</p>
        </div>
    </div>
</div>

    </div>
</div>
  )
}

export default O3