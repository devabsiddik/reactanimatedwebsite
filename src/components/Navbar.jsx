import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {NavLink} from "react-router-dom";
import "../index.scss";
const Navbar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
 
    <NavLink exact className="navbar-brand" to="/Home">AbuBakkar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact activeClassName="active"  to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  exact activeClassName="active"  to="/About" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink  exact activeClassName="active" to="/service" className="nav-link">Services</NavLink>   </li>
        <li className="nav-item">
        <NavLink exact activeClassName="active"  to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
  </div>
</nav>
</div>
</div>
</div>
    )
}

export default Navbar;
