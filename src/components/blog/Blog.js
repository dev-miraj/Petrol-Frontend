/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Blog = () => {
  return (
    <section className="bg-[#F0F0F0] py-24">
        <div className='max-w-container mx-auto md:flex md:justify-between'>
            <div className='w-full md:w-[339px] group' style={{background: 'url(images/blog1.png)', backgroundSize: 'cover'}}>
            <div className='w-full h-full bg-darklight px-2.5 md:px-11 pt-[75px] pb-14'>
                <h4 className='font-pops font-bold text-2xl text-white group-hover:text-primary ease-linear duration-300'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-[#878381] bg-[#878381] py-3 px-8 mt-[52px] hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
            </div>
            <div className='w-full md:w-[339px] group' style={{background: 'url(images/blog2.png)', backgroundSize: 'cover'}}>
            <div className='w-full h-full bg-darklight px-2.5 md:px-11 pt-[75px] pb-14'>
                <h4 className='font-pops font-bold text-2xl text-white group-hover:text-primary ease-linear duration-300'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-[#878381] bg-[#878381] py-3 px-8 mt-[52px] hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
            </div>
            <div className='w-full md:w-[339px] group' style={{background: 'url(images/blog3.png)', backgroundSize: 'cover'}}>
            <div className='w-full h-full bg-darklight px-2.5 md:px-11 pt-[75px] pb-14'>
                <h4 className='font-pops font-bold text-2xl text-white group-hover:text-primary ease-linear duration-300'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h4>
                <a href="#" className='inline-block font-pops font-semibold text-normal text-white border-2 border-solid border-[#878381] bg-[#878381] py-3 px-8 mt-[52px] hover:bg-transparent hover:border-white ease-linear duration-300'>Learn More</a>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Blog;
