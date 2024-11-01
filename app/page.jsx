import Image from "next/image";
import Hero from "../components/Hero.jsx";
import Facilities from "../components/Facilities.jsx";
import Classes from "../components/Classes.jsx";
import Team from "../components/Team.jsx";
import TestimonialSlider from "../components/TestimonialSlider.jsx";
// import HeroSection from "/src/components/HeroSection.jsx";
// import Form from "/src/components/Form.tsx"
// import Highlights from "/src/components/FeaturedHighlights.jsx";

export default function Home() {
  return (
    <>
    <Hero/>
    <Facilities/>
    <Classes/>
    <Team/>
    <TestimonialSlider/>
    {/* <HeroSection/> */}
    {/* <Highlights/> */}
    {/* <Form/> */}
    </>
  );
}