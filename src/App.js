import NavBar from "./components/header/navbar"
import FirstSection from "./components/page/FirstSection/FirstSection"
import './App.css'
import AboutSection from "./components/page/AboutSection/AboutSection"
import WorkSection from "./components/page/WorkSection/WorkSection"

function App() {
  return (
    <>
      <NavBar />
      <FirstSection />
      <AboutSection />
      <WorkSection />
    </>
  )
}

export default App
