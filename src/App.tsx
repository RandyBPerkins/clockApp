import React from "react";
import Button from "react-bootstrap/Button";
import Display from "./Landingpage/Display";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Landingpage/LandingPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MapPage from "./MapPage/MapPage";

function App() {
  const [counter, updateCounter] = React.useState(0);

  const onClickFunction = () => {
    updateCounter(counter + 1);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/maryland" element={<MapPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
