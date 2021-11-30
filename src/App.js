import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Curriculum from "./Curriculum.js"
import Navbar from "./Navbar.js"

// IMPORTANT 1 - paste this at the start of EVERY ELEMENT to make space for the navbar at the top (except App.js ofc): <div className="break" style={{ "--break-height": "65px"}}></div>

function App() {
  return (
    <div className="App">
      {/* react-router allows you to create new routes for your pages*/}
      <Router>
        <Navbar />
        <Routes>
          {/* curriculum route */}
          <Route exact path="/curriculum" element={<Curriculum />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;