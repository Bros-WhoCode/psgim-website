import React from 'react'
import NavLink from './NavLink';
import Logo from '../assets/psgim_logo.png'
import '../styles/Nav.css';
import psgLogo from '../assets/psglogo.png';

const Nav = () => {

  const psgimList = {
    'Who we are': '#',
    'Leadership': '#',
    'Rankings and Accreditations': '#',
    'Program Partners': '#',
    'Sustainability': '#',
    'Social Footprints': '#',
  }

  const programsList = {
    'MBA': '#',
    'MBA WM SE': '#',
    'PH.D': '#',
    '*PSGIAS Programs': '#',
  }

  const facultyAndResearchList = {
    'Core faculty': '#',
    'Visiting faculty': '#',
    'Research Publications': '#',
    'Collaborate': '#',
    'MDP/ FDP': '#',
  }

  const recruitersList = {
    'Our Talent Pool': '#',
    'Placement Process': '#',
    'Recruit our Talent': '#',
    'Top Recruiters': '#'
  }

  return (
    <>    
      <nav className="navbar-container navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={psgLogo} alt="Logo" />
            <div className="logo-text">
              <p className="logo-upper">PSG Institute of Management</p>
              <hr />
              <p className="logo-bottom">PSG College of Technology</p>
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-flex-fluid collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                <div className="social-nav">
                <i class="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-instagram"></i>
                </div>
                <input type="text" placeholder="Search here" className="search-text"/>
              </ul>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                <NavLink title={"Discover PSGIM"} isDropdown={true} content={psgimList} />
                <NavLink title={"Programs"} isDropdown={true} content={programsList} />
                <NavLink title={"Faculty and Research"} isDropdown={true} content={facultyAndResearchList} />
                <NavLink title={"Recruiters"} isDropdown={true} content={recruitersList} />

              </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;