/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import {GoThreeBars} from 'react-icons/go'
const Navbar = () => {
  const[open,setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  useEffect(()=>{
    if(window.innerWidth >= 768){
      setOpen(true)
    }
    function screenResize(){
      console.log(window.innerWidth)
      if(window.innerWidth >= 768){
        setOpen(true)
      }else{
        setOpen(false)
      }
    }
    window.addEventListener("resize", screenResize)
  },[])
  return (
    <div className='bg-primary py-7 relative'>
       <div className='max-w-container mx-auto px-2.5 md:px-0'>
           <div className="md:flex">
            <div className='md:w-1/5'>
                <picture>
                  <img src="images/logo.png" alt="" />
                </picture>
            </div>
            <button onClick={handleOpen} className='block md:hidden absolute top-9 right-2.5 text-2xl text-white'>
              <GoThreeBars/>
            </button>
            {
              open &&
              <div className='md:w-4/5  md:flex justify-end items-center '>
                <ul className='font-pops font-semibold text-base text-white flex flex-col md:flex-row md:gap-x-12 gap-y-1.5 md:gap-y-0 py-1.5 md:py-0'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Gallery</a></li>
                  <li><a href="#">Blogs</a></li>
                </ul>
                <a href="#" className='inline-block font-pops font-semibold text-base text-white border-2 border-solid border-white py-3 px-8 md:ml-20'>CONTACT</a>
            </div>
            }
            
           </div>
       </div>
    </div>
  )
}

export default Navbar;