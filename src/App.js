import Header from "./components/header/Header";
import css from "./App.css";
import Intro from "./components/intro/intro";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
    </div>
  );
}

export default App;
