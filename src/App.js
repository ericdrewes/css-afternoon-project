import React, { Component } from "react";
import Header from "./header.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="intro-text">
          <div className="intro-one">Welcome To Our Studio!</div>
          <div className="intro-two">IT IS NICE TO MEET YOU</div>
          <div className="intro-button">TELL ME MORE</div>
        </div>
        // {/*Page 1 */}
        <div className="page1"
          <div className="services">SERVICES</div>
          <div className="servicesmotto">
            Lorem ipsum dolar sit amet consectetur
          </div>
        </div>
        {/*Page1 Info*/}
        <div className="page1info">
          {/* commerce */}
          <div className="commerce">
            <div className="yellow-circle">
              <div className="cart-img" />
            </div>
            <div className="title-text">E-Commerce</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>

          {/* responsive */}
          <div className="commerce">
            <div className="yellow-circle">
              <div className="cart-img" />
            </div>
            <div className="title-text">Responsive Design</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>
          {/*web security*/}
          <div className="commerce">
            <div className="yellow-circle">
              <div className="cart-img" />
            </div>
            <div className="title-text">Web Security</div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </div>
          </div>
        </div>
        {/* Page 2 */}
        <div className="page-two">
          <div className="portfolio">PORTFOLIO</div>
          <div className="servicesmotto">
    pv className="row-pics">
          <div className="img-cont">
            <div className="photo1">
              <div className="image" />
              <div className="title-text">Threads</div>
              <div className="text">Illustration</div>
            </div>
          </div>
          <div className="photo2"> </div>
          <div className="imag2">
            <div />
            <div className="photo3">
              <div className="image" />
            </div>
            <div className="photo2">
              <div className="image" />
            </div>
            <div className="photo5">
              <div className="image" />
            </div>
            <div className="photo6">
              <div className="image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
