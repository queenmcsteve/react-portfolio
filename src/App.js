import "./App.css";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="flex-col">
      <Navbar />
      <Portfolio />
    </div>
  );
}

export default App;
