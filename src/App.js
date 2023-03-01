import React from 'react';
import Menu from './components/Menu/Menu';
import { Element} from 'react-scroll'

import Portfolio from './components/Portfolio/Portfolio';
import HeaderAnimation from './components/HeaderAnimation/HeaderAnimation';


function App() {

  return (
    <div className="App container">
      <Menu/>
      <HeaderAnimation />
      <Element name="Portfolio" >
      <Portfolio />
      </Element>
    </div>
  );
}

export default App;
