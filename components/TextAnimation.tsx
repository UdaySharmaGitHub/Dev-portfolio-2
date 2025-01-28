import { VelocityScroll } from "./ui/VelocityScroll";
import {Iceberg} from 'next/font/google'
import {motion} from 'framer-motion'
import { Resumedata } from "@/data/Resume";
import { FollowerPointerCard,TitleComponent } from './ui/FollowingPointer';
const iceBerg = Iceberg({
  subsets:['latin'],
  weight:['400']
})

export function ScrollBasedVelocityDemo() {
  return (
    <FollowerPointerCard
        title={
          <TitleComponent
            title="Work ?"
          />
        }
      >
    <div className={iceBerg.className}>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{
      duration:1,
      delay:0.1,
      ease: "easeInOut",
    }}
    >
    <VelocityScroll
      text1={Resumedata.TextAnimationLine1}
      text2={Resumedata.TextAnimationLine2}
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    </motion.div>
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
      text1={Resumedata.TextAnimationLine3}
      text2={Resumedata.TextAnimationLine4}
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    </motion.div>
    </div>
    </FollowerPointerCard>
  );
}
