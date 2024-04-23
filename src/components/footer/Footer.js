import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { GrMap } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer >
        <div className="bg-[#1F1F1F] py-36">
        <div className='max-w-container mx-auto'>
            <div className='flex flex-col md:flex-row md:justify-between m-auto'>
                <div>
                    <picture>
                        <img className='pb-8 m-auto md:m-0' src="images/footLogo.png" loading='lazy' alt="footLogo" />
                    </picture>  
                    <div>
                        <p className='font-pops font-normal text-white text-center md:text-left relative pl-6'>
                            <AiOutlineMail className='absolute left-[18%] md:left-0 top-1 text-lg'/>
                            mail@yourcompany.com
                        </p>
                    </div>
                    <div className='py-4 '>
                        <p className='font-pops font-normal text-center md:text-left text-white relative pl-6'>
                            <FaPhoneAlt className='absolute left-[18%] md:left-0 top-1 text-lg'/>
                            +896 120 5889 (Toll free)
                        </p>
                    </div>
                    <div>
                        <p className='font-pops font-normal text-white text-center md:text-left relative pl-6'>
                            <FaMapMarkerAlt className='absolute font-white left-[6%] md:left-0 top-1 text-lg'/>
                            101 Baker Street, New York, USA, 12345
                        </p>
                    </div>
                    <div className='w-[60%] md:w-2/4 flex pt-9 mx-auto md:mx-0'>
                        <div className='border-2 border-primary bg-primary rounded-full px-2 py-2 mr-5'>
                        <FaFacebookF className='text-white text-xl'/>
                        </div>
                        <div className='border-2 border-primary bg-primary rounded-full px-2 py-2 mr-5'>
                        <BsTwitter className='text-white text-lg'/>
                        </div>
                        <div className='border-2 border-primary bg-primary rounded-full px-2 py-2 mr-5'>
                        <FaLinkedinIn className='text-white text-lg'/>
                        </div>
                        <div className='border-2 border-primary bg-primary rounded-full px-2 py-2'>
                        <BsInstagram className='text-white text-lg'/>
                        </div>
                    </div>
                </div>
                <div className='text-center md:text-left'>
                    <h4 className='font-pops font-bold text-normal text-white mt-8 md:mt-0 pb-8 md:pb-12'>Company</h4>
                    <ul className='font-pops text-white text-sm '>
                        <li className='pb-4'>Home</li>
                        <li className='pb-4'>About</li>
                        <li className='pb-4'>Services</li>
                        <li className='pb-4'>Gallery</li>
                    </ul>
                </div>
                <div className='text-center md:text-left'>
                    <h4 className='font-pops font-bold text-normal text-white mt-8 md:mt-0 pb-8 md:pb-12'>Others</h4>
                    <ul className='font-pops text-white text-sm'>
                        <li className='pb-4'>Blog</li>
                        <li className='pb-4'>Contact</li>
                        <li className='pb-4'>Terms & Conditions</li>
                        <li className='pb-4'>Privacy Policy</li>
                    </ul>
                </div>
                <div className='text-center md:text-left'>
                    <h4 className='font-pops font-bold text-normal text-white pb-12'>Certificate</h4>
                    <div className='flex justify-center'>
                        <picture><img className='mr-1.5' src="images/Cert1.png" loading='lazy' alt="Cert1" /></picture>
                        <picture><img src="images/Cert2.png" loading='lazy' alt="Cert1" /></picture>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='bg-headerbg py-10'>
           <p className='font-pops font-medium text-secondary text-normal text-center'>© Copyright 2024 by Md Mirajul Islam All right reserved.</p>
        </div>
    </footer>
  )
}

export default Footer;
