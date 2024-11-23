"use client"
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import { DockDemo } from "@/components/DockDemo";
import Meteors from "@/components/ui/meteors";

export default function Home() {
  return (
  <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
        <Meteors number={50} />
    <Navbar/>
    <Hero/>
    <Stack/>
    <DockDemo/>
  </div>
  );
}
