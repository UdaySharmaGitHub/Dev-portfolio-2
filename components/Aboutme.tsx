import React from "react";
import { motion,Variant } from "framer-motion";
import { FcAbout } from "react-icons/fc";
import { Spotlight } from "./ui/SpotLight";
import { Resumedata } from "@/data/Resume";
import splitStringUsingRegex from "@/assets/util/splitStringIntoRegex";
import { FollowerPointerCard, TitleComponent } from "./ui/FollowingPointer";

export function Aboutme() {

  // Text Reveals Text Animation
  const aboutMeText = splitStringUsingRegex(Resumedata.aboutme);
  const charvariants = {
    hidden:{opacity:0},
    reveal:{opacity:1}

  }
  return (
    <FollowerPointerCard
        title={
          <TitleComponent
            title="About Me"
          />
        }
      >
    <div className="min-h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <motion.div
      initial ={{opacity:0.5}}
      whileInView={{opacity:1}}
      transition={{
        duration:1,
        delay:0.2,
        ease:"easeInOut"
      }}
      // viewport={{once:true}}
      >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      </motion.div>
      <div className="p-4 max-w-7xl  mx-auto relative z-10  w-full">
        <motion.h1
        initial={{opacity:0,y:-50}}
        whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
        transition={{duration:0.5,
          ease:"easeIn"
        }} 
        className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
         About ME !! <br /> <FcAbout className="inline" /> Hi, There 
        </motion.h1>
        <motion.p 
        initial="hidden"
        whileInView={"reveal"}
      viewport={{once:true}}
      transition={{staggerChildren:0.008}}
        className="scroll_text_reveal mt-4 md:text-3xl text-2xl lg:text-4xl font-medium text-neutral-300 w-full text-center mx-auto">
          {aboutMeText.map((char,index)=>(
            <motion.span
            key={index}
            transition={{duration:0.35,}}
      viewport={{once:true}}
            variants={charvariants}
            >{char}</motion.span>
          ))}
        </motion.p>
      </div>
    </div>
    </FollowerPointerCard>
  );
}
