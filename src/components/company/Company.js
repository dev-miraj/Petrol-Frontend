/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Company = () => {
  return (
    <section className="bg-[#C4C4C4] py-16 md:py-28">
        <div className='max-w-container mx-auto'>
            <div className='md:flex'>
                <div className='md:w-2/5 md:bg-primary px-2.5 md:px-0'>
                <h2 className='font-pops font-bold text-white text-3xl md:text-4xl md:leading-[54px] md:pt-24 md:py-24 md:pl-16 md:w-[280px]'>Learn more about our company</h2>
                </div>
                <div className='w-full py-28 md:w-3/5 md:flex justify-center items-center mt-5 md:mt-0' style={{
                    background: 'url(images/company.png)'
                    }}>
                    <a href="#" className='inline-block font-pops font-semibold text-normal text-primary border-2 border-solid border-white bg-white mx-2.5 md:mx-0 py-3 px-8 hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Company;
