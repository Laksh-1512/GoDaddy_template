import React, { useRef } from 'react'

const Search = () => {
  const text=useRef(null);
  const Handleclick=(e)=>{
    e.preventDefault();
    console.log(text.current.value);
    text.current.value="";

  }
  return (
    <div className='flex'>
      <form onSubmit={Handleclick} >
        <input ref={text} className='w-[50rem] bg-gray-200 h-[3rem] ml-12 p-4 border border-black' type="text" placeholder='   Type the domain you want' />
        <button className='bg-[#00838C] text-white h-[3rem] p-3'>Search Domain</button>
    </form>
    <div className='flex space-x-6 text-sm text-gray-300 mt-3 ml-[13.2rem] font-semibold'>
        <h5 className=''>.online $0.99</h5>
        <h5>.net $14.99</h5>
        <h5>.inc $0.99</h5>
    </div>
        
    </div>
  )
}

export default Search
