'use client'
import React from 'react'
// import { MagnifyingGlassCircleIcon , UserCircleIcon } from '@heroicons/react/24/solid'
// import Avatar from "react-avatar"

function Header() {
  return (
    <div className=' '>
        <div className='flex flex-col md:flex-row items-center p-5  rounded-b-2xl  border-b-2 border-gray-300  bg-gradient-to-r from-gray-100 to-gray-300 '>
        
        <h1 className='text-3xl  bg-gradient-to-r from-indigo-900 to-fuchsia-900 bg-clip-text text-transparent font-bold'>QUADB TECH</h1>

        <div className='flex items-center space-x-5 flex-1 justify-end w-full text-black'>
            <form action="" className='flex items-center space-x-5 rounded-md  shadow-md bg-white flex-1 md:flex-initial'>
                {/* <MagnifyingGlassCircleIcon className='h-6 w-6 text-gray-400'/> */}
                {/* <input type="text" placeholder='Search' className='flex-1 outline-none  p-2 text-gray-900' /> */}
                {/* <button className='bg-gray-900 text-gray-100 rounded-md p-2' type="submit " >Search</button> */}
                <h1 className='py-3 px-5 font-bold bg-gray-100 rounded-md flex-1 gap-2'>QuadB Task Hub</h1>
            </form>

            {/* <Avatar className='border-2 border-white' name="prashuk" round size='50' color='gray'  /> */}
            {/* <div className='p-3 px-3 rounded-3xl border-white border-2 font-bold text-white bg-black'>PJ</div> */}
        </div>
        </div>

        
  
    </div>

    
  )
}

export default Header