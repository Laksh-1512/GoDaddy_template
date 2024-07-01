import React from 'react'
const data=[{
    title:"About GoDaddy",
    children:["About Us","Newsroom","Ievestor Relations","Careers","Corporate Responsibiliy","Trust Center"],
},{
    title:"Help Center",
    children:["Help Center","Community","Venture Forward: Microbu","GoDaddy Blog","Contact Us","Report Abuse","Resources"],
},{
    title:"Shopping",
    children:["Buy a Domain Web ","WordPress" ,"Hosting", "Web Security", "Email & Office" ,"Phone Numbers", "Promos"],
},{
    title:"Partner Programs",
    children:[ "Affiliates ","seller Program" ,"GoDaddy Pro"],
},{
    title:"Resources",
    children:[  "Webmail WHOIS", "GoDaddy Mobile App ICANN", "Confirmation Designers & Develo", "Corporate Domains" ,"Redeem Code ","Product ","Catalog Videos" ,"Business","Name Generator"],
}
]
const Contact_us = () => {
  return (
    <div className='h-[30rem] w-[87rem] ml-10 bg-black text-white mt-10'>
      <div className='flex pt-10 pl-10 border border-b-gray-600 pb-6'>
        <div className='flex flex-col'>
            <h1 className='font-semibond text-lg mb-7'>Sign up for news and special offers</h1>
        <form action="" onSubmit={(e)=>e.preventDefault()} >
            <input className="bg-gray-700 w-[40rem] h-10 p-4"type="email" placeholder='Email Address'></input>
            <button className='bg-white rounded-r-sm h-10 w-[6rem] text-black font-bold'>Sign up</button>
        </form>
        </div>
        <div className='flex flex-col ml-20 '>
            {/* <h1>We love taking your call.</h1> */}
            <img className="w-[12rem] h-[6rem] mt-2 ml-20"src="https://static.startuptalky.com/2021/05/godaddy-startuptalky.jpg" alt="" />
        </div>
      </div>
      <div className='flex justify-between ml-10 mt-10 pr-10'>
        {data.map((e)=>(<div>
            <h1 className='font-bold text-md mb-2'>{e.title}</h1>
            {e.children.map((t)=>(
                <ul className='text-sm text-gray-500'>{t}</ul>))}
        </div>))}
      </div>
      <h1 className='ml-12'>Made with 💖 by Laksh</h1>
    </div>
  )
}

export default Contact_us
