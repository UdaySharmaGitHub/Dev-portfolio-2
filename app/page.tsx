"use client"
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollBasedVelocityDemo } from "@/components/TextAnimation";
import { MyExperience } from "@/components/MyExperience";
import { LampDemo } from "@/components/ui/Lamp";
// import { MyProjects } from "@/components/MyProjects";

export default function Home() {
  return (
  <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
    <Navbar/>
    {/* Hero */}
    <Hero/>
    {/* Text Animation */}
    <ScrollBasedVelocityDemo/>
    {/* Services */}

    {/*Experience  */}
      <MyExperience/>
  </div>
  );
}
