"use client"
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Stack } from "@/components/Stack";
import Meteors from "@/components/ui/meteors";
import { DockDemo } from "@/components/DockDemo";

export default function Home() {
  return (
  <div className="overflow-hidden">
    <Meteors number={75} />
    <Navbar/>
    <Hero/>
    <Stack/>
    <DockDemo/>
  </div>
  );
}
