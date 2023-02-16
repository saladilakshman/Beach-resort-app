import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { FaUser, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Zoom from 'react-reveal/Zoom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { FaAngleUp } from 'react-icons/fa';
//import Home from "./components/home";
import Activity from './components/activity';
import Contact from './components/contact';
import Dining from './components/dining';
import Event from './components/event';
import Gallery from './components/gallery';
import Offer from './components/offer';
import Room from './components/room';
function Params() {
  const [visible, setVisible] = useState(false);
  const elem = document.body;
  elem.style.backgroundColor = '#DCDCDC';
  const confirmBox = () => {
    window.confirm(
      'https://www.bambolimbeachresort.com wants to open this application.'
    );
  };
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (document.documentElement.scrollTop > 25) {
      setVisible(true);
    } else if (document.body.scrollTop === 0) {
      setVisible(false);
    }
  };

  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-sm navbar-dark ">
          <div className="container-fluid">
          <img src="https://www.bambolimbeachresort.com/wp-content/uploads/2019/07/image.png"alt=""className="navbar-brand"/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-2">
                <li className="nav-item ms-5 g">
                  <NavLink to="/" className="nav-link mt-3"id="navi">
                    WEDDINGS&EVENTS
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="room" className="nav-link mt-3"id="navi">
                    ROOMS
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="dining" className="nav-link mt-3"id="navi">
                    DINING
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="offer" className="nav-link mt-3"id="navi">
                    OFFERS
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="gallery" className="nav-link mt-3"id="navi">
                    GALLERY
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="activity" className="nav-link mt-3"id="navi">
                    ACTIVITIES
                  </NavLink>
                </li>
                <li className="nav-item ms-5">
                  <NavLink to="contact" className="nav-link mt-3"id="navi">
                    CONTACT
                  </NavLink>
                </li>
                </ul>
            </div>
          </div>
        </nav>

        {visible && (
          <Zoom>
            <div
              className="arrow"
              onClick={() => window.scrollTo({ behavoiur: 'smooth', top: 0 })}
            >
              <FaAngleUp id="farrow" />
            </div>
          </Zoom>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Event />} />
        <Route path="room" element={<Room />} />
        <Route path="dining" element={<Dining />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="offer" element={<Offer />} />
        <Route path="activity" element={<Activity />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <div className="container-fluid bg-secondary">
        <div className="container pt-5">
          <div className="row gap-5">
            <div className="col-sm-2">
              <img
                src="https://www.bambolimbeachresort.com/wp-content/uploads/2020/02/BBR-WHITE-LOGO-2048x638.png"
                alt=""
                className="w-75"
              />
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">ADDRESS</p>
              <p className="pt-3 text-white">
                Bambolim Beach Resort Goa University Road Bambolim Beach
                Bambolim, Goa – 403206
              </p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">PHONE</p>
              <p className="pt-3 text-white">
                Mobile / Whatsapp (9:00 am – 7:00 pm) +91 9823020999
              </p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">SALES</p>
              <p className="pt-3 text-white">
                Reservation & Sales Team (9:00 am – 7:00 pm) 0832 – 6748000 / 01
                / 02 OR 0832 – 2459925 sales@bambolimbeachresort.com
              </p>
            </div>
            <div className="col-sm-2">
              <p className="main-footer-text">FOLLOW US</p>
              <div
                className="d-flex justify-content-center align-items-center gap-3"
                id="icons"
              >
                <FaFacebook
                  onClick={() =>
                    (location.href =
                      'https://www.facebook.com/bambolimbeachresort')
                  }
                />
                <FaInstagram
                  onClick={() =>
                    (location.href =
                      'https://www.instagram.com/bambolimbeachresort')
                  }
                />
                <FaYoutube
                  onClick={() =>
                    (location.href =
                      'https://www.youtube.com/bambolimbeachresort')
                  }
                />
              </div>
            </div>
            <p id="line"></p>
            <p className="text-center text-white">
              Copyright © Bambolim Beach Resort 2021.
            </p>
          </div>
        </div>
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Params />);
