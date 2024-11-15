"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai'
const navlinks = [
    {title:'About',path:'#about'},
    {title:'Portfolio',path:'#portfolio'},
    {title:'Stack',path:'#stack'},
    {title:'Contact',path:'#contact'},
]
export const Navbar = ()=>{
    const [nav,setNav] = useState(false);
    const toggleNav = ()=>{
        setNav(!nav)
    }
    const closeNav =()=>{
        setNav(false);
    }
    return (
        <div className='z-50 fixed flex justify-center w-full text-white font-bold'>
            {/* Desktop View Navbar */}
            <div className='border border-white/20 mt-8 backdrop-blur-[2px] rounded-3xl
            hidden md:flex justify-center items-center p-2 max-w-[400px] mx-auto'>
                <ul className='flex flex-row p-2 space-x-8'>
                    {navlinks.map((link,index)=>(
                        <li key={index}>
                            <Link href={link.path} className='duration-300 text-lg ease-in-out hover:text-white/20 transform transition-transform'>
                            {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Mobile View Navbar */}
            <div onClick={toggleNav} className='md:hidden absolute transition-all duration-400 top-10 border-2 z-50 right-10 rounded  text-white/70 border-white/70 p-2'>
                {!nav?<AiOutlineMenu size={30}/>:<AiOutlineClose size={30}/>}
            </div>
            {/* Mobile View Navigation */}
            <div className={`${nav?"translate-x-0":"-translate-x-full"} z-40 fixed backdrop-blur-[8px] top-0 left-0 h-full w-full bg-black/50 transform transition-transform duration-300`}>
                    <ul className=' flex flex-col items-center justify-center space-y-8 h-full'>
                    {navlinks.map((link,index)=>(
                        <li key={index}>
                        <Link href={link.path} onClick={closeNav} className='duration-300 ease-in-out hover:text-white/20 text-5xl transform transition-transform'>
                        {link.title}
                        </Link>
                    </li>
                    ))}    
                    </ul>
            </div>
                        
        </div>
    )
}