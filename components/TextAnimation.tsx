import { VelocityScroll } from "./ui/VelocityScroll";

export function ScrollBasedVelocityDemo() {
  return (
    <>
    <VelocityScroll
      text="Design & Develope &"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] leading-[10dvw]"
    />
    <VelocityScroll
      text="Think + Code + Create +"
      default_velocity={5}
      className="text-center pt-4 font-bold tracking-[-0.02em] drop-shadow-sm text-white text-[10dvw] leading-[10dvw]"
    />
    </>
  );
}
