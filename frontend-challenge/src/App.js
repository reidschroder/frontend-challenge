import React from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import {
  Home,
  Slider,
  Puzzle
} from "./pages";

// Create App JS to hold all of the site together through react

function App() {
  return (
   <Router>
     <div className="app">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/Slider" element={<Slider />} />
         <Route path="/Puzzle" element={<Puzzle />} />
       </Routes>
     </div>
   </Router>
  );
}

export default App;
