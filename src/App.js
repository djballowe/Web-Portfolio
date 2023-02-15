import Header from "./components/header/Header";
import css from "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useRef, useState } from "react";
import MobileMenu from "./components/header/MobileMenu";
import SideBar from "./components/sidebar/Sidebar";
import Work from "./components/work/Work";

function App() {
  const { projectsRef, aboutRef, contactRef, workRef } = useRef();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleRef = (location) => {
    const pageLocations = {
      projects: projectsRef,
      about: aboutRef,
      contact: contactRef,
      work: workRef,
    };
    pageLocations[location].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    isMobileOpen ? setIsMobileOpen(false) : setIsMobileOpen(true);
  };

  return (
    <div className="App">
      <SideBar />
      <MobileMenu open={isMobileOpen} click={handleClick} handle={handleRef} />
      <Header handle={handleRef} click={handleClick} open={isMobileOpen} />
      <div className="main-content-container">
        <Intro />
        <About page={aboutRef} />
        <Work page={workRef} />
        <Projects page={projectsRef} />
        <Contact page={contactRef} />
      </div>
    </div>
  );
}

export default App;
