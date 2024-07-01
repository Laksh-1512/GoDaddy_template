import React from 'react'
const data=["https://www.hubspot.com/hs-fs/hubfs/lemon%20(1).jpg?width=650&height=425&name=lemon%20(1).jpg","https://www.sliderrevolution.com/wp-content/uploads/2021/09/onehd.png","https://my.mobirise.com/data/upload/thumbs/solutionm4/projects/websolution/cover.jpg","https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"]
const Templates = () => {
  return (
    <div className='bg-gray-300 h-[30rem] w-full ml-10 w-[87rem] mt-20 '>
      <div className='justify-center text-center '>
        <h1 className='text-4xl font-bold pt-10 pb-3'>Templates designed to sell</h1>
        <h1 >Choose from 100s of design from any industry</h1>
      </div>
      <div className='flex items-center justify-center'>
        {data.map((e)=>(<img  className="h-[15rem] w-[25rem] mt-10 rounded-lg m-2 cursor-pointer hover:m-3 " src={e} alt="" />))}
      </div>
      <div className='justify-center text-center '>
        <button className='text-white bg-black rounded-lg p-4 mt-3'>Browse all templates</button>
      </div>
    </div>
  )
}

export default Templates
