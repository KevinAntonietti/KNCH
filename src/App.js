import React from "react";
import { Element } from "react-scroll";

import Skills from "./components/Skills/Skills";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import HeaderAnimation from "./components/HeaderAnimation/HeaderAnimation";

function App() {
  return (
    <div className="App container">
      <Element name="Menu">
        <Menu />
      </Element>
      <HeaderAnimation />
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Skills">
        <Skills/>
      </Element>
    </div>
  );
}

export default App;
