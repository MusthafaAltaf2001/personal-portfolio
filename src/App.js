import About from './Components/About';
import Home from './Components/Home';
import React from 'react';
import { Nav } from './Components/Nav';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Footer from './Components/Footer';


function App() {


  return (
    <div className="App">
      <Home />
      <Nav />
      <div>
        <About />
        <Projects />
        {/* <Resume /> */}
        {/* <Footer /> */}
      </div>
    </div >
  );
}

export default App;
