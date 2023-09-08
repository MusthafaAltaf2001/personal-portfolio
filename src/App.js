import About from './Components/About';
import Body from './Components/Body';
import React from 'react';
import { Nav } from './Components/Nav';
import Projects from './Components/Projects';
import Resume from './Components/Resume';


function App() {


  return (
    <div className="App">
      <Body />
      <div>
        <Nav />
        <div className="relative items-center">
          <About />
          <Projects />
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
