import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skill from "./component/Skill";
import Project from "./component/Project";
/*import Testimonial from "./components/Testimonial";
import GetApp from "./components/GetApp";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";*/

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project/>
    </>
  );
};

export default App;