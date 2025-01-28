import React from 'react'
import {Silkscreen} from 'next/font/google'
import { CgFigma } from "react-icons/cg";
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiAppwrite } from "react-icons/si";
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiDocker } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa6";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { SiCloudinary } from "react-icons/si";
import {motion} from 'framer-motion'

interface stackItems{
  name:string,
  icon:string,
}
const silkscreen = Silkscreen({
  subsets: ['latin'],
  weight:['400']
})
const stackItems =  [
  {name:"" ,icon:FaJs},
  {name:"" ,icon:SiTypescript},
  {name:"React" ,icon:FaReact},
  {name:"Next.js" ,icon:TbBrandNextjs},
  {name:"TailWind CSS" ,icon:RiTailwindCssFill},
  {name:"Framer Motion" ,icon:TbBrandFramerMotion},
  {name:"Figma" ,icon:CgFigma},
  {name:"Node.js" ,icon:IoLogoNodejs},
  {name:"MongoDB" ,icon:SiMongodb},
  {name:"Postgresql" ,icon:BiLogoPostgresql},
  {name:"Docker" ,icon:SiDocker},
  {name:"Prisma" ,icon:SiPrisma},
  {name:"AppWrite" ,icon:SiAppwrite},
  {name:"Firebase" ,icon:IoLogoFirebase},
  {name:"Cloudinary" ,icon:SiCloudinary },
  {name:"Mysql" ,icon:SiMysql},
  {name:"Java" ,icon:FaJava},
  {name:"Python" ,icon:FaPython},
  {name:"WordPress" ,icon:FaWordpress },
  {name:"Go" ,icon:FaGolang},
]
export const Stack = () => {
  return (
    <div className="min-h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg">
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
          stackItems.map((item,index)=>(
            <motion.div
            initial={{ opacity: 0.1, y: 100,scale:0.5 }}
      whileInView={{ opacity: 1, y: 0,scale:1 }}
      transition={{
        duration: 0.5,
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
  </div>
  )
}
