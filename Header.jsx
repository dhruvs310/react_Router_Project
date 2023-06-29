import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
  <div>
  {/* header section start */}
  <div className="header_section">
    <div className="header_main">
      <div className="mobile_menu">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo_mobile"><a href="index.html"><img src="images/logo.png" /></a></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="=/men">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">Contact</NavLink>
              </li>
         
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid">
        <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
        <div className="menu_main">
          <ul>
            <li className="active"><NavLink to="/men">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact us</NavLink></li>

          </ul>
        </div>
      </div>
    </div>
    {/* banner section start */}
    <div className="banner_section layout_padding">
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <h1 className="banner_taital">Adventure</h1>
              <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
              <div className="read_bt"><a href="#">Get A Quote</a></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Adventure</h1>
              <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
              <div className="read_bt"><a href="#">Get A Quote</a></div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <h1 className="banner_taital">Adventure</h1>
              <p className="banner_text">There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
              <div className="read_bt"><a href="#">Get A Quote</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* banner section end */}
  </div>
  {/* header section end */}
</div>

  )
}

export default Header