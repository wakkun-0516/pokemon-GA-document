import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './App.css';
import About from './component/About';
import Top from './component/Top';

import Page0 from './component/Page0';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import Page3 from './component/Page3';
import { useState } from "react";
import Page4 from "./component/Page4";

function App() {

    const [open, setOpen] = useState(false);
    const toggleFunction = () => {
      setOpen((prevState) => !prevState);
    };



    return (
      <BrowserRouter>
        <div className="body">
          <div className='header'>
            <HashLink to="/" className="link-1">Pokémon-GA</HashLink>
            <ul>
              <HashLink to="/about-this-website#content" className="link-2">About this website</HashLink>
              <HashLink to="/agent-based-model#content" className="link-3">Agent Based Model</HashLink>
              <HashLink to="/rust-vs-python#content" className="link-4">Rust vs python</HashLink>
            </ul>
          </div>
          <button onClick={toggleFunction} aria-expanded={open} className="toggle_btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav aria-expanded={open}>
            <div className="inner">
              <ul>
                <li><HashLink to="/about-this-website#content" onClick={toggleFunction}>About this website</HashLink></li>
                <li><HashLink to="/agent-based-model#content" onClick={toggleFunction}>Agent Based Model</HashLink></li>
                <li><HashLink to="/rust-vs-python#content" onClick={toggleFunction}>Rust vs python</HashLink></li>
              </ul>
            </div>
          </nav>
          <div className="mask" aria-expanded={open}></div>

          <Top />
          <About />

          <Routes>
            <Route path="/" element={<Page0 />} />
            <Route path="/about-this-website" element={<Page1 />} />
            <Route path="/agent-based-model" element={<Page2 />} />
            <Route path="/rust-vs-python" element={<Page3 />} />
            <Route path="/app" element={<Page4 />} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }

export default App;
