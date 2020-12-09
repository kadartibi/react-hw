import React from "react";
import {Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

//Datepicker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function App() {
  return (
    <div className="App">
      <Router>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Route exact path="/" component={Home}/>
        </MuiPickersUtilsProvider>
      </Router>
    </div>
  );
}

