import Header from "./components/header/Header";
import css from "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { useRef } from "react";

function App() {
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  const handleRef = (location) => {
    const pageLocations = {
      projects: projectsRef,
      about: aboutRef,
      contact: contactRef,
    };
    pageLocations[location].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header handle={handleRef} />
      <Intro />
      <Projects page={projectsRef} />
      <About page={aboutRef} />
      <Contact page={contactRef} />
    </div>
  );
}

export default App;
