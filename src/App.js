import React, { Component } from "react";
import Header from "./header.js";
import "./App.css";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLaptop from "@fortawesome/fontawesome-free-solid/faLaptop";
import faLock from "@fortawesome/fontawesome-free-solid/faLock";
import faShoppingCart from "@fortawesome/fontawesome-free-solid/faShoppingCart";

import picture2 from "./photos/02-thumbnail.jpg";
import picture3 from "./photos/03-thumbnail.jpg";
import picture4 from "./photos/04-thumbnail.jpg";
import picture5 from "./photos/05-thumbnail.jpg";
import picture6 from "./photos/06-thumbnail.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Header />
          <div className="intro-text">
            <div className="intro-one">Welcome To Our Studio!</div>
            <div className="intro-two">IT IS NICE TO MEET YOU</div>
            <button className="intro-button">TELL ME MORE</button>
          </div>
        </div>
        {/*Page 1 */}

        <div className="page1">
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
              <FontAwesomeIcon className="icon" icon={faShoppingCart} />
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
              <FontAwesomeIcon className="icon" icon={faLaptop} />
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
              <FontAwesomeIcon className="icon" icon={faLock} />
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
          <div className="portfolio-intro">
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="images">
            <div className="row-pics">
              <div className="img-cont">

              <div className="photo1">
                <div className="image" />
                <div className="title-text">Threads</div>
                <div className="text">Illustration</div>
              </div>
              </div>

              <div className="photo2">
                <img className="image" src={picture2} />
                <div className="title-text">Explore</div>
                  <div className="text">Graphic Design</div>
                </div>
                <div className="photo3">
                  <img className="image" src={picture3} />
                  <div className="title-text">Finish</div>
                  <div className="text">Identity</div>
                </div>

                <div className="photo4">
                  <img className="image" src={picture4} />
                  <div className="title-text">Lines</div>
                  <div className="text">Branding</div>
                </div>

                <div className="photo5">
                  <img className="image" src={picture5} />
                  <div className="title-text">Southwest</div>
                  <div className="text">Website Design</div>
                </div>

                <div className="photo6">
                  <img className="image" src={picture6} />
                  <div className="title-text">Window</div>
                  <div className="text">Photography</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default App;
