import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="flex-col">
      <Navbar />
      <Portfolio />
      <AboutMe />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
