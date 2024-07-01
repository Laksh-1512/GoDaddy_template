import React from 'react'

const Header = () => {
  return (
    <div className='  grid grid-cols-3 h-[5rem] '>
        <div className=' flex col-start-1 col-span-2 p-2 mt-5 text-sm text-gray-400 space-x-3'>
        <img className='h-[3.8rem] w-28 ml-10 -mt-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNZqC_SINfD1ybfexpeC-0Mm6C3aPIMeC4Ww&s" alt="" />
        <h3> Domain Names </h3>
        <h3> Websites & Hosting </h3>
        <h3> Commerce </h3>
        <h3> Email & Marketing </h3>
        <h3> Expert Services </h3>
        <h3> More </h3>
        </div>
      <div className=' flex col-span-1 p-2 mt-5 text-sm text-gray-400 space-x-3 ml-64'>
        <h1>Help Center</h1>
        <h1 className='cursor-pointer'>Sign In</h1>
        <h1 className='cursor-pointer'>🛒</h1>
      </div>
      
    </div>
  )
}

export default Header
