import React, { useState, useEffect } from "react";
import Loading from "./components/toolbars/Loading";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Navbar from "./components/toolbars/Navbar";
import Interests from "./components/sections/Interests";
import Projects from "./components/sections/Projects";
import Work from "./components/sections/Work";
import Footer from "./components/toolbars/Footer";
import { Element } from "react-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      // Set a delay of 2 seconds before disabling the loading state
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default App;
