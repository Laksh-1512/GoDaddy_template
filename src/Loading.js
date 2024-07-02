import React from 'react'
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <div className='bg-black text-white h-[44rem] w-full flex relative'>
        <motion.div className='flex text-xl font-semibold justify-center items-center h-[44rem] w-full 'initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}  >
            <h1 className='m-3 cursor-pointer animate-pulse'>Passion</h1>
            <h1 className='m-3 cursor-pointer animate-pulse'>Trust</h1>
            <h1 className='m-3 cursor-pointer animate-pulse'>Dedication</h1>
            <img className="m-3 h-10 w-220 animate-spin"src="https://media.istockphoto.com/id/1403307007/video/simple-loading-animation-circle-loading-animation-in-high-resolution-4k.jpg?s=640x640&k=20&c=a0Y8nytmcZvP7NIt8W3pUForWzMLQdk1fZn2XdJpSUs=" alt="" />
        </motion.div>
        
        <div className='absolute bottom-0 right-0 m-4'>
            <h1 className='text-gray-300  animate-pulse'>Made with 💖Love by Laksh </h1>
        </div>
    </div>
  )
}

export default Loading;
