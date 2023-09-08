import About from './Components/About';
import Body from './Components/Body';
import React from 'react';
import { Nav } from './Components/Nav';
import Projects from './Components/Projects';


function App() {


  return (
    <div className="App">
      <Body />
      <div>
        <Nav />
        <div>
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
