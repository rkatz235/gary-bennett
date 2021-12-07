import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  NavLink,
} from "react-router-dom";
import $ from 'jquery';

import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Profile from './components/Profile'
import './styles/app.css';
import './styles/nav.css';
import './styles/mobile.css';
// import { disableBodyScroll } from 'body-scroll-lock';



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu(){
    $("#nav-list").css("transition", "visibility 0.5s, opacity 0.5s linear");
    $("#nav-list").toggleClass('is-active');
  }
  closeMenu(){
    $("#nav-list").css("transition", "none");
    $("#nav-list").removeClass('is-active');
  }

  render(){
    return (
      <BrowserRouter>
        <div className="page-container">
          <nav>
  
            <button id="hamburger-menu" className="hamburger hamburger--squeeze" onClick={this.toggleMenu} type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button> 
            <button id="arrow-menu" className="hamburger hamburger--squeeze" type="button" style={{display: "none"}}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button> 
  
            <ul id="nav-list" >
              <li>
                <NavLink exact to="/" activeClassName="active" onClick={this.closeMenu} activeStyle={{display: "none"}} >Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact"  activeClassName="active" onClick={this.closeMenu} activeStyle={{display: "none"}}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/profile" activeClassName="active" onClick={this.closeMenu} activeStyle={{display: "none"}} >Profile</NavLink>
              </li>
              <li>
                <NavLink to="/work" activeClassName="active" onClick={this.closeMenu} activeStyle={{display: "none"}}>Work</NavLink>
              </li>
              <li>
                <a target="__blank" href="https://www.instagram.com/garybennettarchitecture/?hl=en">Instagram</a>
              </li>
            </ul>
            
          </nav>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/work">
              <Work/>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
  
          <footer>
            <div>
              <p>&copy; 2020 Gary Bennett Architecture PLLC - All Rights Reserved</p>
              <a href="https://www.instagram.com/garybennettarchitecture/?hl=en" target="__blank"><img alt="instagram link" src={require("./img/IG/IG.png")} /></a>
            </div>
          </footer>
        </div>

      </BrowserRouter>
    );
  }
  
}

