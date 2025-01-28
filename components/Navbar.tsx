"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { AiOutlineMenu , AiOutlineClose } from 'react-icons/ai'
import { ShineBorder } from './ui/ShineBorderProps'
import{motion} from 'framer-motion'
const navlinks = [
    {title:'Portfolio',path:'/'},
    {title:'About',path:'about'},
    {title:'Services',path:'services'},
    {title:'Contact',path:'contact'},
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
        <>
        <motion.div
        initial={{ opacity: 0.1, y: -10,scale:0.5 }}
        whileInView={{ opacity: 1, y: 0,scale:1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className='z-50 fixed flex justify-center w-full text-white font-bold'>
            {/* Desktop View Navbar */}
            <ShineBorder className='border border-white/20 mt-8 backdrop-blur-[2px] rounded-3xl
            hidden md:flex justify-center items-center p-2 max-w-[400px] mx-auto'
            color={["#13ffaa","#1e67c6","#ce84cf","#DD335c"]}>
                <ul className='flex flex-row p-2 space-x-8'>
                    {navlinks.map((link,index)=>(
                        <li key={index}>
                            <Link href={link.path} className='duration-300 text-lg ease-in-out hover:text-white/20 transform transition-transform'>
                            {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </ShineBorder>
        </motion.div>
         {/* Mobile View Navbar */}
            <motion.div
            initial={{scale:0.2,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            viewport={{once:true}}
            transition={{
                duration:0.5,
                ease: "easeInOut",
            }}
            onClick={toggleNav} className='md:hidden absolute transition-all duration-400 top-10 border-2 z-50 right-10 rounded  text-white/70 border-white/70 p-2'>
                {!nav?<AiOutlineMenu size={30}/>:<AiOutlineClose size={30}/>}
            </motion.div> 

         {/* Mobile View Navigation */}
         <div className={`${nav?"translate-x-0":"-translate-x-full"} z-40 fixed text-white backdrop-blur-[8px] top-0 left-0 h-full w-full bg-black/50 transform transition-transform duration-300`}>
         <ul className=' flex flex-col items-center justify-center space-y-8 h-full'>
         {navlinks.map((link,index)=>(
             <motion.li
             initial={{y:50,opacity:0,scale:0.9}}
             whileInView={{y:0,opacity:1,scale:1}}
             transition={{duration:0.5,
                delay:0.1*index,
                type:"spring",
                ease:"easeInOut"
             }}
             key={index}>
             <Link href={link.path} onClick={closeNav} className='duration-300 ease-in-out hover:text-white/20 text-5xl transform transition-transform'>
             {link.title}
             </Link>
         </motion.li>
         ))}    
         </ul>
 </div>
        </>
    )
}