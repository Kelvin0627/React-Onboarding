import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import Innerpage from "./pages/Innerpage"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/inner-page/:id' element={<Innerpage/>}>
          <Innerpage/>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
