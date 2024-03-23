import React from 'react'

const Navbar = () => {
  return (
   <div className='w-full  h-20  max-w-[1100px] mx-auto flex items-center justify-center 
   
   '>
<div className='w-full   h-[50%] flex justify-between items-center 

max-[1100px]:w-[95%]'  >

  <div className='w-full max-w-[13%] m-auto border-r-[1px] border-[#9b9996] h-full text-[17px] flex justify-start items-center tracking-[-1.5px] font-[500] text-[#eeeeee] 
 max-[880px]:max-w-[20%] max-[585px]:max-w-[40%]

 max-[585px]:pr-[10px]
 
  
  '>Dominik Lewicki</div>
  <ul className='w-[90%]  h-full flex justify-start items-center m-auto max-[880px]:max-w-[80%] max-[585px]:max-w-[50%] '
  >
    <li className='p-[15px] text-[#9b9996] font-[500] text-[14px]'>Features</li>
    <li className='p-[15px] text-[#9b9996] font-[500] text-[14px]'>Blog</li>
    <div className='p-[5px] text-[#9b9996] font-[500] text-[13px]  border-opacity-100 border border-gray-400 rounded-lg max-[585px]:hidden	'>Beta</div>
  </ul>


</div>


   </div>
  )
}

export default Navbar