import Header from "./components/header/Header";
import css from "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useRef, useState } from "react";
import MobileMenu from "./components/header/MobileMenu";

function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleRef = (location) => {
    const pageLocations = {
      projects: projectsRef,
      about: aboutRef,
      contact: contactRef,
    };
    pageLocations[location].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    isMobileOpen ? setIsMobileOpen(false) : setIsMobileOpen(true);
  };

  return (
    <div className="App">
      <MobileMenu open={isMobileOpen} click={handleClick} handle={handleRef} />
      <div className="main-content-container">
        <Header handle={handleRef} click={handleClick} open={isMobileOpen} />
        <Intro />
        <Projects page={projectsRef} />
        <About page={aboutRef} />
        <Contact page={contactRef} />
      </div>
    </div>
  );
}

export default App;
