import React from 'react';

const Supplier = () => {
  return (
    <section className='mt-10 md:mt-[78px]'>
        <div className='max-w-container mx-auto px-2.5 md:px-0'> 
           <div className='md:flex justify-between'>
            <div className='md:max-w-[289px]'>
                <h1 className='font-pops font-bold text-3xl md:text-5xl md:leading-[72px]'>The biggest supplier on the country</h1>
            </div>
            <div className='md:max-w-[651px] flex items-center mt-5 md:mt-0'>
                <p className='font-pops font-medium text-sm md:text-secondary'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
            </div>
           </div>
        </div>
        <div className='flex flex-col gap-y-5 md-gap-y-0 sml:flex-row flex-wrap md:flex-nowrap md:justify-between mt-10 md:mt-24 px-2.5 md:px-0'>
           <div className='sml:w-2/4 md:w-auto'>
            <picture>
                <img className= 'w-full' src="images/supplier1.jpg" loading='lazy' alt='supplier' />
            </picture> 
           </div>
           <div className='sml:w-2/4 md:w-auto'>
            <picture>
                <img className= 'w-full' src="images/supplier2.jpg" loading='lazy' alt='supplier'/>
            </picture> 
           </div>
           <div className='sml:w-2/4 md:w-auto'>
            <picture>
                <img className= 'w-full' src="images/supplier3.jpg" loading='lazy' alt='supplier'/>
            </picture> 
           </div>
           <div className='sml:w-2/4 md:w-auto'>
            <picture>
                <img className= 'w-full' src="images/supplier4.jpg" loading='lazy' alt='supplier'/>
            </picture> 
           </div>
        </div>
    </section>
  )
}

export default Supplier;