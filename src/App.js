import Header from "./components/header/Header";
import css from "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Icons from "./components/sticky/Icons";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
