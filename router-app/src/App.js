import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Routing/Home";
import About from "./Routing/About";
import Contact from "./Routing/Contact";
import Error from "./Routing/Error";
import Navigation from "./Routing/Navigation";




class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <Navigation/>
      <Switch>
      <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
      </BrowserRouter>
    )
  }
}


export default App;
