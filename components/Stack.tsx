import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiMongodb, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
interface stackItems{
  id:number,
  name:string,
  icon:JSX.Element,
  color:string
}
const stackItems =  [
  {id:1,name:"React" ,icon:FaReact,color:"#61dafb"},
  {id:2,name:"Node.js" ,icon:IoLogoNodejs,color:"#339333"},
  {id:3,name:"Typescript" ,icon:SiTypescript,color:"#3178c6"},
  {id:4,name:"MongoDB" ,icon:SiMongodb,color:"#47a248"},
  {id:5,name:"Next.js" ,icon:TbBrandNextjs,color:"#ffffff"},
]
export const Stack = () => {
  return (
    <section className='py-16'>
    <div className='max-w-[1200px] mx-auto px-4 text-center'>
      <h1 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h1>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4 p-4'>
        {
          stackItems.map((item)=>(
            <div key={item.id} className='flex items-center justify-center flex-col rounded-xl'>
                <div>
                {React.createElement(item.icon, {className:"w-32 h-32",style:{color:item.color}})}
                </div>
                <p className=''>{item.name}</p>
          </div>
          ))
        }
      </div>
    </div>
  </section>
  )
}
