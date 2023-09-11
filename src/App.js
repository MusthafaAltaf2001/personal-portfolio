import About from './Components/About';
import Home from './Components/Home';
import React from 'react';
import { Nav } from './Components/Nav';
import Projects from './Components/Projects';
import Footer from './Components/Footer';


function App() {


  return (
    <div className="App">
      <Home />
      <Nav />
      <div>
        <About />
        <Projects />
        {/* <Footer /> */}
      </div>
    </div >
  );
}

export default App;
