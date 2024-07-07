"use client";
import Hero from "./Hero";
import WhyWalktru from "./Whywalktru";
import LearnFaster from "./LearnFaster";
import Testimonial from "./Testimonial";
import Monetise from "./Monetise";
import Anyone from "./Anyone";
import Unlock from "./Unlock";
import { link } from "fs";
import Peoplesay from "./Peoplesay";
import Howto from "./Howto";
import Footer from "./Footer";
import Getstarted from "./Getstarted";
import Blog from "./Blog";
import Patners from "./Patners";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyWalktru />
      <LearnFaster />
      <Testimonial />
      <Monetise />
      <Anyone />
      <Unlock />
      <Peoplesay />
      <Howto />
      <Getstarted />
      <Blog />
      <Patners />
      <Footer />
    </main>
  );
}
