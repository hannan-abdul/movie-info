import React from 'react';
import { Link } from 'react-router-dom';
import reduxlogo from './react-redux.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Hollywood
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <img className="react-redux" src={reduxlogo} alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
