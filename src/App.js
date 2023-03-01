import React from 'react';
import Menu from './components/Menu/Menu';
import { Element} from 'react-scroll'

import Portfolio from './components/Portfolio/Portfolio';
import HeaderAnimation from './components/HeaderAnimation/HeaderAnimation';
import HeaderText from './components/HeaderText/HeaderText';


function App() {

  return (
    <div className="App container">
      {/* <Menu/> */}
      <HeaderText/>
      <HeaderAnimation />
      <Element name="Portfolio" >
      <Portfolio />
      </Element>
    </div>
  );
}

export default App;
