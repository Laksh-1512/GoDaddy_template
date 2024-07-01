import React from 'react'
import First_page_box from './First_page_box'

const First_page = () => {
  return (
    <div>
      <div className='relative flex h-[20rem] mt-3'>
        <div className='relative'>
            <img className='w-[63rem] h-[20rem] ml-12 rounded-md' src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className='absolute top-[3rem] left-[5rem] z-10 text-white'>
                <h2 className='text-sm'>Websites & Commerce</h2>
                <h1 className='mt-2 font-bold text-3xl'>Tools for all your</h1>
                <h1 className=' mb-2 font-bold text-3xl'>business firsts.</h1>
                <h1 className='text-md mt-4'>Website and store solutions for any small business.</h1>
                <div className='flex'>
                  <button className='bg-blue-500 text-white px-6 py-2 rounded-md mt-4 '>Get Started</button>
                <h1 className=' ml-3 mt-5 underline cursor-pointer'>Learn More</h1>
                </div>
                
            </div>
        </div>
        <div className='bg-[#D8EFEF] text-gray-400 rounded-md w-[23rem] ml-2 p-7'>
            <h3 className='text-black'>Domains Name</h3>
            <h1 className='font-semibold text-black text-2xl'>Grab a .com for just</h1>
            <h1 className='font-semibold text-black text-2xl'>$0.01*/1st yr</h1>
            <h3 className='mt-2'>2-year purchase required</h3>
            <button className='bg-black text-white h-12 w-56 p-3 rounded-lg mt-2 mb-2'> Find Your Domain</button>
            <h3>Transfer Your Domains</h3>
            <h5 className='text-sm'>mains include tree privacy protection forever ©</h5>
        </div>
      </div>
      <First_page_box></First_page_box>
    </div>
  )
}

export default First_page
