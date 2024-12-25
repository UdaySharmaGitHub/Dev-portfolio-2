"use client"
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import { DockDemo } from "@/components/DockDemo";
import { ScrollBasedVelocityDemo } from "@/components/TextAnimation";

export default function Home() {
  return (
  <div className="overflow-hidden" style={{scrollBehavior:"smooth"}}>
    <Navbar/>
    <Hero/>
    <ScrollBasedVelocityDemo/>
    <Stack/>
    <DockDemo/>
  </div>
  );
}
