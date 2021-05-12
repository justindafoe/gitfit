import React from "react";
import './App.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Programs from './components/Programs.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Merch from './components/Merch.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/programs" exact component={() => <Programs />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/merch" exact component={() => <Merch />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
