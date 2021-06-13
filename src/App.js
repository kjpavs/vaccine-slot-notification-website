import logo from './logo.svg';
import './App.css';
import React , { Component } from 'react'
import About from './About'
import Information from './Information'
import Certificate from './Certificate'
import Home from './Home'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        {/* <div className="comp">
          <Link to="/">Home</Link>
        </div> */}
        <div className="header-links">
          <Link to="/" className="Home">   Home   </Link>
          <Link to="/about" className="About">   About   </Link>
          <Link to="/info" className="Information">   Information   </Link>
          <Link to="/certificate" className="Certificate">   Certificate   </Link>
        </div>
      </header>
      <main className="main">
      <Route path="/" exact={true} component={Home} />
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Route path="/about" component={About} />
        <Route path="/info" component={Information} />
        <Route path="/certificate" component={Certificate} />

        </div>
      </div>
      </main>
      <footer className="footer">
        By Agasthya and Pavithra
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;