"use client"
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollBasedVelocityDemo } from "@/components/TextAnimation";
import { MyExperience } from "@/components/MyExperience";
import { Stack } from "@/components/Stack";
import { Porjects } from "@/components/Projects";
import { GridPattern } from "@/components/ui/GridUI";
import { cn } from "@/lib/utils";
import { OfferingServices } from "@/components/OfferingServices";
import { PT_Serif } from "next/font/google";
import { useLayoutEffect,useRef } from "react";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import {gsap} from 'gsap'
import { NumberTicker } from "@/components/ui/NumberTicker";
import { MorphingText } from "@/components/ui/MorphingText";
import { Aboutme } from "@/components/Aboutme";
const ptSerifg = PT_Serif({
  subsets: ['latin'],
  weight:['400']
})

const texts = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Ciao",
  "Bonjour",
  "こんにちは",
];

export default function Home() {
  const comp = useRef(null)

  useLayoutEffect(()=>{
    const ctx = gsap.context(()=>{
      const t1 = gsap.timeline();
      t1.from('#intro-slider',{
        xPercent:"-100",
        delay:4,
        duration:1,
      }).from(['#title-1','#title-2','#title-3'],{
        opacity:0,
        y:'+30',
        stagger:0.5
      }).to(['#title-1','#title-2','#title-3'],{
        opacity:0,
        y:'-30',
        stagger:0.5,
      }).to('#morphingAnimation',{
        yPercent:"-100",
      }).to('#intro-slider',{
        xPercent:"-100",
        delay:0.1,
        duration:0.5,
      })
    },comp)
    return ()=>ctx.revert();
  },[])
  return (
  <div className="relative overflow-hidden" ref={comp}>
    <div id='intro-slider' className={`${ptSerifg.className} justify-center text-white bg-black z-[150] w-full flex flex-col gap-5 tracking-wider h-screen p-4 absolute top-0 left-0"`}>
      <h1 className="lg:text-9xl text-7xl" id='title-1'>Software Developer</h1>
      <h1 className="lg:text-9xl text-7xl" id='title-2'>Designer</h1>
      <h1 className="lg:text-9xl text-7xl" id='title-3'>Freelancer</h1>
      <NumberTicker
      value={100}
      className="mt-10 whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white"
    />
      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] z-[2] fixed",
        )}
      />
    </div>
    <div id="morphingAnimation" className="absolute z-[100] bg-black top-0 w-full h-screen grid place-items-center">
    <MorphingText texts={texts} />
    </div>
    <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
    <ScrollProgress/>
    <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] z-[2] fixed",
        )}
      />
    <Navbar/>
    {/* Hero */}
    <Hero/>
    {/* Text Animation */}
    <ScrollBasedVelocityDemo/>
    {/* About us Page */}
    <Aboutme/>
    {/* Tech Stack */}
    <Stack/>
    {/* Services */}
    <OfferingServices/>
    {/*Experience  */}
      <MyExperience/>
      <Porjects/>
  </div>
  </div>
  );
}
