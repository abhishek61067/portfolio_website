import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

import React from "react";
import Particle from "./components/Particle";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="ts-particles-section">
        <Header />
        {/* make positonrel for ts-particles-section and absolute for particle and header so it starts from header */}
      <Particle />
      </div>

      <About/>
      
    </div>
  );
}

export default App;
