import { VelocityScroll } from "./ui/VelocityScroll";
import {Iceberg} from 'next/font/google'
import {motion} from 'framer-motion'

const iceBerg = Iceberg({
  subsets:['latin'],
  weight:['400']
})

export function ScrollBasedVelocityDemo() {
  return (
    <div className={iceBerg.className}>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
      duration:1,
      ease: "easeInOut",
    }}
    >
    <VelocityScroll
      text1="Design & Develope &"
      text2="Think + Code + Create +"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
      duration:1,
      delay:0.3,
      ease: "easeInOut",
    }}
    >
    <VelocityScroll
      text1="FrontEnd & BackEnd &"
      text2="Full Stack & MERN Stack &"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    </motion.div>
    </motion.div>
    </div>
  );
}
