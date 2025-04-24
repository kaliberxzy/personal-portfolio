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
          {/* <div class="hidden sm:block fixed top-0 z-[-2] h-screen w-screen bg-[#050505] bg-[radial-gradient(ellipse_50%_40%_at_50%_-10%,rgb(30,30,30),rgba(240,240,240,0))]"></div> */}
          <Element name="Home">
            <Navbar />
          </Element>
          <div>
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
        </div>
      )}
    </>
  );
}

export default App;
