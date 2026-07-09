import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;