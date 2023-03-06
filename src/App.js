import React from "react";
import { Element } from "react-scroll";

import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App container">
      <Element name="Menu">
        <Menu />
      </Element>
      <Header/>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
