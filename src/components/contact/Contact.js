/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Contact = () => {
  return (
    <div className='bg-primary py-7 border-b-4 border-yellowborder'>
       <div className='max-w-container mx-auto'>
           <div className="md:flex px-2.5 md:px-0">
            <div className='md:w-4/5'>
               <h4 className='font-pops font-bold text-white text-2xl md:text-3xl'>Want to join as member branch in your area?</h4>
            </div>
            <div className='md:w-1/5 md:flex md:justify-end md:items-center pt-5 md:pt-0'>
                <a href="#" className='inline-block font-pops font-semibold text-base text-white border-2 border-solid border-white py-3 px-8 md:ml-20'>CONTACT</a>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Contact;