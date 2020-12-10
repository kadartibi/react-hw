import React from "react";
import {Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import {ProductProvider} from "./components/context/ProductsContext";

//Datepicker
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ProductProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Route exact path="/" component={Home}/>
          </MuiPickersUtilsProvider>
        </ProductProvider>
      </Router>
    </div>
  );
}

