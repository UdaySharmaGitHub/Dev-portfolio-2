import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {motion} from 'framer-motion'

interface stackItems{
  id:number,
  name:string,
  icon:JSX.Element,
  color:string
}
const stackItems =  [
  {id:1,name:"HTML" ,icon:FaHtml5,color:"#F16A30"},
  {id:2,name:"CSS" ,icon:FaCss3Alt,color:"#2D53E5"},
  {id:3,name:"JavaScript" ,icon:FaJs,color:"yellow"},
  {id:4,name:"React" ,icon:FaReact,color:"#61dafb"},
  {id:5,name:"TailWind CSS" ,icon:RiTailwindCssFill,color:"#61dafb"},
  {id:6,name:"Next.js" ,icon:TbBrandNextjs,color:"#ffffff"},
  {id:7,name:"Typescript" ,icon:SiTypescript,color:"#3178c6"},
  {id:8,name:"Node.js" ,icon:IoLogoNodejs,color:"#339333"},
  {id:9,name:"MongoDB" ,icon:SiMongodb,color:"#47a248"},
  {id:10,name:"Java" ,icon:FaJava,color:"#ED272C"},
  {id:11,name:"Python" ,icon:FaPython,color:"#ffffff"},
  {id:12,name:"Go" ,icon:FaGolang,color:"#61dafb"},
]
export const Stack = () => {
  return (
    <section className='py-16'>
      <motion.div
        initial={{ opacity: 0.1, y: 100,scale:0.5 }}
        whileInView={{ opacity: 1, y: 0,scale:1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }} className='max-w-[1200px] mx-auto px-4 text-center'>
      <h1 className='text-7xl text-gray-200 font-bold mb-4'>My Stack</h1>
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-6 mt-8 p-4'>
        {
          stackItems.map((item)=>(
            <div key={item.id} className='flex items-center justify-center flex-col rounded-xl'>
                <div>
                {React.createElement(item.icon, {className:"w-16 h-16",style:{color:item.color}})}
                </div>
                <p className='text-white text-lg font-semibold mt-2'>{item.name}</p>
          </div>
          ))
        }
      </div>
    </motion.div>
  </section>
  )
}
