import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

const getMainComponent = (currPage) => {
  if (currPage === "Portfolio") {
    return <Portfolio />;
  } else if (currPage === "Resume") {
    return <Resume />;
  } else if (currPage === "Contact") {
    return <Contact />;
  }
  return <AboutMe />;
};

function App() {
  const [currPage, setCurrentPage] = useState("AboutMe");

  return (
    <div className="flex justify-center">
      <div>
        <Navbar setCurrentPage={setCurrentPage} />
        <div className="w-50">{getMainComponent(currPage)}</div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
