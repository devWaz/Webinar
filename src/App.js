import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Speakers from "./components/Speakers";
import Events from "./components/Events";
import NewsLetter from "./components/NewsLetter";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Speakers/>
      <Events/>
      <NewsLetter/>
    </div>
  );
}

export default App;
