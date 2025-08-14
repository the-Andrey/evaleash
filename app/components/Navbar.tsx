import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-lawrencium1'>
        <a href="">
          <Image alt='' src={assets.e_letter} className='w-22 cursor-pointer mr-14'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-14 rounded-full px-8 py-4 bg-lawrencium1 shadow-xl border border-white bg-opacity-50 font-share-tech-mono'>
          <li><a href="#file" className='text-white'>File</a></li> 
          <li><a href="#open" className='text-white'>Open</a></li>
          <li><a href="#about" className='text-white'>About</a></li>
          <li><a href="#contact" className='text-white'>Contact</a></li>
          <li><a href="#contact" className='text-white'>My projects</a></li>
        </ul>

        <div className='flex items-center gap-6'>
          <button>
            <Image src={assets.moon} alt='' className='w-6'/>
          </button>
          <a href="#github" className='hidden lg:flex items-center gap-1 px-8 py-2.5 border border-white bg-lawrencium1 text-white rounded-full ml-4'> Github<Image alt='' src={assets.diagonal_arrow} className='w-4 text-white'/></a>
          <button className='block md:hidden cursor-pointer'>
          <Image src={assets.menu} alt='' className='w-8'/>
          </button>
        </div>

        {/* MOBILE MENU */}

        <ul className='flex md:hidden flex-col gap-4 py-20 px-0 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-lawrencium3 transition duration-500'>
          <div className='absolute right-6 top-6'>
            <Image src={assets.close_white} alt='' className='cursor-pointer w-8'/>
          </div>
          
          <li className='mt-2 px-3 border border-b-1'><a href="#file" className='text-white'>File</a></li> 
          <li className='border border-b-1 px-3'><a href="#open" className='text-white'>Open</a></li>
          <li className='px-3 border border-b-1'><a href="#about" className='text-white'>About</a></li>
          <li className='px-3 border border-b-1'><a href="#contact" className='text-white'>Contact</a></li>
          <li className='px-3 border border-b-1'><a href="#contact" className='text-white'>My projects</a></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
