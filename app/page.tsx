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


export default function Home() {
  return (
  <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
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
    {/* Tech Stack */}
    <Stack/>
    {/* Services */}
    <OfferingServices/>
    {/*Experience  */}
      <MyExperience/>
      <Porjects/>
  </div>
  );
}
