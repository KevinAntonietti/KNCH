import React from "react";
import { Element } from "react-scroll";


import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App container">
      <Element name="Menu">
        <Menu />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Contact">
      <Contact />
      </Element>
    </div>
  );
}

export default App;
