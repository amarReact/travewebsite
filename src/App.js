import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Privacy from "./components/Privacy";

import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";



const App = () =>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/privacy" component={Privacy} />
    </Switch>
    </>
  )
}

export default App;
