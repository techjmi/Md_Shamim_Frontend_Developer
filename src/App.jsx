import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeatureSection'
import AboutSection from './components/AboutSection'
import TokeSection from './components/TokeSection'
import RoadMap from './components/RoadMap'
import FAQ from './components/FAQ'
import AppDownload from './components/AppDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <HeroSection />
  <FeaturesSection />
  {/* <Dashboard /> */}
  <AboutSection />
  {/* <Toke /> */}
  <TokeSection />
  <RoadMap />
  <FAQ />
  <AppDownload />
    </>
  )
}

export default App
