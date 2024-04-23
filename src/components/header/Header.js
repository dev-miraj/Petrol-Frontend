import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaPhoneAlt, FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import {BsTwitter, BsInstagram} from 'react-icons/bs';

const Header = () => {
  return (
    <div className='bg-headerbg py-3.5 border-b-2 border-yellowborder'>
        <div className='max-w-container mx-auto px-2.5 md:px-0'>
        <div className='sml:flex'>
            <div className='sml:w-9/12 sml:flex'>
                <p className='font-pops font-normal text-white relative pl-6
                after:absolute after:top-0 after:right-[-28px] after:w-px after:h-full after:content-[" "]
                after:bg-yellowborder after:hidden sml:after:block'>
                <AiOutlineMail className='absolute left-0 top-1 text-lg'/>
                mail@yourcompany.com
                </p>
                <p className='font-pops font-normal text-white relative pl-6 sml:ml-14 my-2.5 sml:my-0'>
                <FaPhoneAlt className='absolute left-0 top-0 text-lg'/>
                +896 120 5889 (Toll free)
                </p>
            </div>
            <div className='sml:w-3/12 flex sml:justify-end'>
              <FaFacebookF className='text-white text-lg sml:ml-5'/>
              <BsTwitter className='text-white text-lg ml-5'/>
              <FaLinkedinIn className='text-white text-lg ml-5'/>
              <BsInstagram className='text-white text-lg ml-5'/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header;