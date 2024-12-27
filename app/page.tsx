"use client"
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScrollBasedVelocityDemo } from "@/components/TextAnimation";
import { MyExperience } from "@/components/MyExperience";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
  <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
    <Navbar/>
    {/* Hero */}
    <Hero/>
    {/* Text Animation */}
    <ScrollBasedVelocityDemo/>
    {/* Tech Stack */}
    <Stack/>
    {/* Services */}
    {/*Experience  */}
      <MyExperience/>
  </div>
  );
}
