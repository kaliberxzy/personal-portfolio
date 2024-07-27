import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/toolbars/Navbar";
import Interests from "./components/sections/Interests";
import Projects from "./components/sections/Projects";
import Work from "./components/sections/Work";
import Footer from "./components/toolbars/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="Home">
        <Navbar />
      </Element>

      <Hero />
      <Element name="About">
        <About />
      </Element>
      <Element name="Interests">
        <Interests />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Work">
        <Work />
      </Element>

      <Footer />
    </>
  );
}

export default App;
