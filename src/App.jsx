import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import TokeSection from "./components/TokeSection";
import RoadMap from "./components/RoadMap";
import FAQ from "./components/FAQ";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NavBar /> */}
      <div id="features">
        <HeroSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="tokenomics">
        <TokeSection />
      </div>
      <div id="roadmap">
        <RoadMap />
      </div>
      <div id="why-us">
        <FAQ />
      </div>
      <div id="download">
        <AppDownload />
      </div>
      <Footer />
    </>
  );
}

export default App;
