import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../Assets/logo.png';


function NavBar(props) {
    return (
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:"#434f53", height:"90px"}}>
        <div class="container-fluid">
          <img class="navbar-brand" src={logo} style={{ height: "100px", width: 230}}/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="main" class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a id="home" class="nav-link" aria-current="page" href="#">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ABOUT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">SERVICES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">PROJECTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">OUR BLOGS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">CONTACTS</a>
              </li>
            </ul>
            <ul  class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><i class="fa-brands fa-facebook" ></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-brands fa-google-plus"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-brands fa-twitter"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-brands fa-pinterest"></i></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><i class="fa-brands fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;