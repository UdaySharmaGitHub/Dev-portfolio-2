import { VelocityScroll } from "./ui/VelocityScroll";
import {Iceberg} from 'next/font/google'

const iceBerg = Iceberg({
  subsets:['latin'],
  weight:['400']
})

export function ScrollBasedVelocityDemo() {
  return (
    <div className={iceBerg.className}>
    <VelocityScroll
      text="Design & Develope &"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    <VelocityScroll
      text="Think + Code + Create +"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] font-iceBerg leading-[10dvw]"
    />
    </div>
  );
}
