'use client'
import Image from 'next/image';
import { animate, useMotionTemplate,motion, useMotionValue } from 'framer-motion';
import React, { useEffect } from 'react'
import profilepic from '../assets/ProfilePic.jpg'
import object from '../assets/obj1.png'
import { FiArrowRight } from 'react-icons/fi';
import { RainbowButton } from './ui/RainbowButton';
import { BackgroundLines } from './ui/Backgroundlines';
import { FollowerPointerCard,TitleComponent } from './ui/FollowingPointer';
import { Resumedata } from '@/data/Resume';
const COLORS_TOP = ["#13ffaa","#1e67c6","#ce84cf","#DD335c"]
export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
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
   
    <FollowerPointerCard
    title={
      <TitleComponent
        title="Home"
      />
    }
  >
    <motion.section style={{backgroundImage}}
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:0.3}}
     viewport={{once:true}}
    className='relative min-h-screen grid place-items-center overflow-hidden px-4 text-gray-50'>
      <BackgroundLines className='z-10 flex flex-col items-center md:mt-[15dvh] mt-[0dvh] md:gap-2 gap-4'>
        <motion.div
        initial={{ opacity: 0.1}}
        whileInView={{ opacity: 1}}
        viewport={
          {
            once:true,
          }}
        transition={{
          duration: 0.8,
          delay:0.2,
          ease: "easeInOut",
        }}
        >
        <span className='z-20 mb-1.5 absolute md:translate-y-40  translate-y-36 translate-x-20 md:translate-x-24 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm'>
        Open to Work</span>
        </motion.div>
        <motion.div
        initial={{ opacity: 0,x:-50}}
        whileInView={{ opacity: 1,x:0}}
        viewport={
          {
            once:true,
          }}
        transition={{
          duration: 0.6,
          ease: "anticipate",
        }}
        className='text-white/40 text-5xl font-black'>Hi, I am</motion.div>
        <motion.div
        initial={{ opacity: 0,x:50}}
        whileInView={{ opacity: 1,x:0}}
        viewport={
          {
            once:true,
          }}
        transition={{
          duration: 0.6,
          delay:0.1,
          ease: "anticipate",
        }}
        className='max-w-3xl text-4xl text-center bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent sm:text-5xl md:text-7xl'>{Resumedata.name}</motion.div>
        <motion.div
        initial={{ opacity: 0,x:-50}}
        whileInView={{ opacity: 1,x:0}}
        viewport={
          {
            once:true,
          }}
        transition={{
          duration: 0.8,
          delay:0.3,
          ease: "anticipate",
        }}
        >
        <Image 
        src={profilepic}
         alt="profile Pic"
         width={230}
         className='z-10'
         />
        </motion.div>
         <motion.div
         initial={{ opacity: 0.1, y: 20,scale:0.5 }}
         whileInView={{ opacity: 1, y: 0,scale:1 }}
         viewport={
          {
            once:true,
          }}
         transition={{
           duration: 0.5,
           delay:0.3,
           ease: "anticipate",
         }}
         >
         <RainbowButton className='z-10 flex justify-center items-center space-x-2 p-2 mb-4 shadow-xl backdrop-blur-lg filter bg-white/10 rounded-3xl'>
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
          <p className='font-medium md:text-xl text-md'>{Resumedata.punchLine}</p>
         </RainbowButton>
         </motion.div>
         <motion.p
         initial={{ opacity: 0,y:50}}
         whileInView={{ opacity: 1,y:0}}
         viewport={
          {
            once:true,
          }}
         transition={{
           duration: 0.5,
           delay:0.4,
           ease: "anticipate",
         }}
         className='z-10 max-w-lg text-xl md:text-2xl font-semibold text-center mb-2'>{Resumedata.WorkField}</motion.p>
      
      <motion.button
      initial={{ opacity: 0,y:50}}
      whileInView={{ opacity: 1,y:0}}
      viewport={
        {
          once:true,
        }}
      transition={{
        duration: 0.8,
        delay:0.5,
        ease: "anticipate",
      }}
       style={{border,boxShadow}}
       whileHover={{
        scale:1.015
       }}
       whileTap={{
        scale:0.985
       }}
       className='flex justify-center items-center px-4 py-2 w-fit mx-auto rounded-2xl font-semibold text-xl'
       >
        Download CV<FiArrowRight/>
        </motion.button>
      </BackgroundLines>
     
        <div className='bg-circle-container'>
          <div className='bg-circle-background'></div>
          <div className='bg-circle'></div>
        </div>
    </motion.section>
  </FollowerPointerCard>
  )
}

