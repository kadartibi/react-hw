import React from "react";
import {Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

