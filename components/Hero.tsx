'use client'
import Image from 'next/image';
import { animate, useMotionTemplate,motion } from 'framer-motion';
import React, { useEffect } from 'react'
import profilepic from '../assets/profilepic.png'
import object from '../assets/obj1.png'
import { FiArrowRight } from 'react-icons/fi';

const COLORS_TOP = ["#13ffaa","#1e67c6","#ce84cf","#DD335c"]
export const Hero = () => {
  const color = useMotionTemplate(COLORS_TOP[0]);
  useEffect(()=>{
    animate(color,COLORS_TOP,{
      ease:"easeInOut",
      duration:10,
      repeat:Infinity,
      repeatType:"mirror",
    })
  },[])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%,#000 50%,${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return (
    <motion.section style={{backgroundImage}}
    className='relative min-h-screen grid place-items-center overflow-hidden px-4 md:pt-24 pt-12 text-gray-50'>
      <div className='z-10 flex flex-col  items-center mt-4'>
        <span className='mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
        Open to Work</span>
        <h1 className='text-white/40 text-5xl md:text-7xl font-black'>Hi, I am</h1>
        <h1 className='max-w-3xl text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl'>Vatsalya Tripathi</h1>
        <Image 
        src={profilepic}
         alt="profile Pic"
         width={230}
         />
         <div className='flex justify-center items-center space-x-2 p-2 mb-4 shadow-xl backdrop-blur-lg filter bg-white/10 rounded-3xl'>
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <Image
          src={object} 
          alt='Object Image'
          width={30}
          className='rounded-2xl mx-auto'
          />
          <p className='font-medium md:text-lg text-md'>Developing apps like a boss</p>
         </div>
         <p className=' max-w-lg text-center mb-2'>Frontend | Backend | MERN Stack Developer🖥️| Full Stack Developer🖥️| Gen AI🤖 | LLM🤖 </p>
      
      <motion.button
       style={{border,boxShadow}}
       whileHover={{
        scale:1.015
       }}
       whileTap={{
        scale:0.985
       }}
       className='flex justify-center items-center px-4 py-2 w-fit mx-auto rounded-2xl'
       >
        Download CV<FiArrowRight/>
        </motion.button>
      </div>
     
        <div className='bg-circle-container'>
          <div className='bg-circle-background'></div>
          <div className='bg-circle'></div>
        </div>
    </motion.section>
  )
}
