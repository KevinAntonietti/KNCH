import React from 'react';
import { Element } from 'react-scroll';

import { useDispatch } from 'react-redux';
import Menu from './components/Menu/Menu';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import {
  toggleOpenMenu,
  toggleConstactSelect,
} from './features/menu.slice';

function App() {
  const dispatch = useDispatch();
  const handleContactSelect = () => {
    if (window.innerWidth <= 650) {
      dispatch(toggleOpenMenu());
      dispatch(toggleConstactSelect());
    } else {
      dispatch(toggleConstactSelect());
    }
  };

  return (
    <div className="App container">
      <Menu />
      <Element name="Header">
        <Header />
      </Element>
      <Element name="Portfolio">
        <Portfolio />
      </Element>
      <Element
        onSetActive={handleContactSelect}
        name="Contact"
      >
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
