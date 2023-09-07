import About from './Components/About';
import Body from './Components/Body';
import React from 'react';
import { Nav } from './Components/Nav';


function App() {


  return (
    <div className="App">
      <Body />
      <div>
        <Nav />
        <div>
          <About />
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
