import React from 'react'
import {Silkscreen} from 'next/font/google'
import { Resumedata } from '@/data/Resume';
import {motion} from 'framer-motion'
import { FollowerPointerCard,TitleComponent } from './ui/FollowingPointer';

interface stackItems{
  name:string,
  icon:string,
}
const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight:['400']
})

export const Stack = () => {
  return (
    <div className="min-h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
      <FollowerPointerCard
              title={
                <TitleComponent
                  title="Tech Stack"
                />
              }
            >
    <div className="absolute inset-0 w-full h-full  z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
    <section className='py-8'>
      <div className='max-w-[1200px] mx-auto px-4 text-center'>
      <motion.h1 
      initial={{ opacity: 0.1, y: 100,scale:0.5 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{
        duration: 0.8,
        type:"spring",
        ease: "easeInOut",
      }} 
      className='text-7xl text-gray-200 font-bold my-8'>My Stack</motion.h1>
    <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-y-6 gap-x-4 mt-8 p-4'>
        {
          Resumedata.stackItems.map((item,index)=>(
            <motion.div
            initial={{ opacity: 0.1, y: 100,scale:0.5 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      whileHover={{scale:1.1}}
      transition={{
        duration: 0.3,
        delay:0.05*index,
        type:"spring",
        ease: "easeInOut",
      }} 
             key={index} className='z-20 flex items-center justify-center flex-col rounded-xl'>
                <div>
                {React.createElement(item.icon, {className:"w-20 h-20 text-white"})}
                </div>
                <p className={`text-white text-lg font-semibold mt-2  ${silkscreen.className}`}>{item.name}</p>
          </motion.div>
          ))
        }
      </div>
    </div>
  </section>  
  </FollowerPointerCard>
  </div>
  )
}
