import Hero from "../components/sections/landing/Hero.jsx";
import Dernierprofils from "../components/sections/landing/Dernierprofils.jsx";
import NotreMission from "../components/sections/landing/NotreMission.jsx";
import ChiffresCles from "../components/sections/landing/ChiffresCles.jsx";
import Features from "../components/sections/landing/Features.jsx";
import CTA from "../components/sections/landing/CTA.jsx";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Dernierprofils />
      <ChiffresCles />
      <NotreMission />
      <Features />
      <CTA />
    </>
  );
}
