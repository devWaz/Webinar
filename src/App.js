import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Speakers from "./components/Speakers";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Hero/>
      <Speakers/>
      <Events/>
    </div>
  );
}

export default App;
