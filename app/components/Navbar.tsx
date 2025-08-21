'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { assets } from '../assets/assets'


const Navbar = () => {

  const sideMenu = useRef<HTMLUListElement>(null);

  const openMenu = () =>{
    if(sideMenu.current) {
        sideMenu.current.style.transform = 'translateX(-16rem)';
    }
  }

    const closeMenu = () =>{
    if(sideMenu.current) {
        sideMenu.current.style.transform = 'translateX(16rem)';
    }
  }

  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 bg-gradient-to-b from-moonlight-asteroid1 to-moonlight-asteroid2 shadow-2xl shadow-moonlight-asteroid2'>
        <a href="">
          <Image alt='' src={assets.e_letter} className='w-22 cursor-pointer mr-14'/>
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-14 px-8 py-4  font-share-tech-mono text-xl rounded-full'>
          <li><a href="#file" className='text-white'>File</a></li> 
          <li><a href="#open" className='text-white'>Open</a></li>
          <li><a href="../about/" className='text-white'>About</a></li>
          <li><a href="../contact" className='text-white'>Contact</a></li>
          <li><a href="#projects" className='text-white'>Projects</a></li>
        </ul>

        <div className='flex items-center gap-6'>
          <button className='cursor-pointer'>
            <Image src={assets.moon} alt='' className='w-8'/>
          </button>
          <a href="#github" className='hidden lg:flex items-center gap-2 px-8 py-2.5 text-white ml-4 text-xl font-share-tech-mono rounded-full'> 
            Github <Image alt='' src={assets.diagonal_arrow} className='w-4 text-white'/></a>
          <button className='block md:hidden cursor-pointer' onClick={openMenu}>
          <Image src={assets.menu} alt='' className='w-10'/>
          </button>
        </div>

        {/* MOBILE MENU */}

        <ul ref={sideMenu} className='flex md:hidden flex-col gap-2 py-20 px-1 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-moonlight-asteroid1 transition duration-500 font-share-tech-mono text-xl'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_white} alt='' className='cursor-pointer w-8'/>
          </div>
          
          <li className=' px-3' onClick={closeMenu}><a href="#file" className='text-white'>File</a></li> 
          <li className='px-3' onClick={closeMenu}><a href="#open" className='text-white'>Open</a></li>
          <li className=' px-3' onClick={closeMenu}><a href="../about/" className='text-white'>About</a></li>
          <li className=' px-3' onClick={closeMenu}><a href="../contact/" className='text-white'>Contact</a></li>
          <li className=' px-3' onClick={closeMenu}><a href="#projects" className='text-white'>Projects</a></li>
        </ul>
        
      </nav>
    </>
  )
}

export default Navbar
