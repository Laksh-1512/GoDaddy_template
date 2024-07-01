import React from 'react'

const Body = () => {
  return (
    <div className='flex flex-col ml-56 mr-56 '>
      <div className='shadow-md flex flex-col items-center'>
        <h1 className='text-5xl font-bold mt-7'>Success in </h1>
        <h1 className='text-5xl font-bold mb-10'>3 easy steps </h1>
      </div>
      <div className='flex justify-between'>
        <div className='shadow-md p-5 flex flex-col '>
          <img className="w-[25rem] h-[30rem] rounded-lg" src="https://images.pexels.com/photos/7034717/pexels-photo-7034717.jpeg" alt="" />
          <h6 className='text-[10px] mt-3 mb-3'>Q2</h6>
          <h1 className='font-semibold text-lg mb-3'>Save with the lowest fees</h1>
          <h1 className='text-[10px]'>2.3% + Oc per in-person transaction</h1>
          <h1 className='text-[10px]'>2.3% + 20¢ per online transaction.</h1>
          <h1 className='text-[10px]'>Enjoy the lowest transaction fees compared to other leading</h1>
          <h1 className='text-[10px] mb-3'>Providers</h1>
          <div className='flex'>
            <button className='text-white bg-black p-3 rounded-lg mt-3'>Start Getting Paid</button>
            <h3 className='underline mt-5 ml-3'>Learn more</h3>
          </div>
        </div>
        <div className='shadow-md p-5 flex flex-col '>
          <img className="w-[25rem] h-[30rem] rounded-lg" src="https://images.pexels.com/photos/12662854/pexels-photo-12662854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h6 className='text-[10px] mt-3 mb-3'>Q1</h6>
          <h1 className='font-semibold text-lg mb-3'>Sell online with a website</h1>
          <h1 className='text-[10px]'>Sell anything, from physical products to downloads and services, </h1>
          <h1 className='text-[10px]'>and manage it all in one Place.</h1>
          <div className='flex mt-11'>
            <button className='text-white bg-black p-3 rounded-lg mt-3'>Get Started</button>
            <h3 className='underline mt-5 ml-3'>Learn more</h3>
          </div>
        </div>
        <div className='shadow-md p-5 flex flex-col '>
          <img className="w-[25rem] h-[30rem] rounded-lg" src="https://images.pexels.com/photos/16129700/pexels-photo-16129700/free-photo-of-man-in-glasses-working-on-pc-at-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h6 className='text-[10px] mt-3 mb-3'>Q2</h6>
          <h1 className='font-semibold text-lg mb-3'>Save with the lowest fees</h1>
          <h1 className='text-[10px]'>2.3% + Oc per in-person transaction</h1>
          <h1 className='text-[10px]'>2.3% + 20¢ per online transaction.</h1>
          <h1 className='text-[10px]'>Enjoy the lowest transaction fees compared to other leading</h1>
          <h1 className='text-[10px] mb-3'>Providers</h1>
          <div className='flex'>
            <button className='text-white bg-black p-3 rounded-lg mt-3'>Start Getting Paid</button>
            <h3 className='underline mt-5 ml-3'>Learn more</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
