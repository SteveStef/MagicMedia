import React from 'react';
import logo from './Logo (2).png';
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
        <div>
      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-9">
              <div className="left-info">
                <ul>
                <li><a href="#contact"><i className="fa fa-phone"></i>610-781-7003</a></li>
                  <li><a href="#contact"><i className="fa fa-envelope" ></i>info@magicmediaagent.com</a></li>
                  <li><a href="#contact"><i className="fa fa-paper-plane"></i>Pennsylvania, United States</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-3">
              <div className="social-icons">
                <ul>
                    {/**<li><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="#"><i className="fab fa-google-plus"></i></a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="header-area header-sticky" style={{height: "95px"}}>
      <div className="container">
          <div className="row">
          <div className="col-12">
              <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/">
              <img src={logo} alt="" style={{maxWidth: '240px', marginTop: '-18%', marginLeft:'-30px'}} />
              </Link>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav" style={{marginTop: '-0.5%'}}>
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#infos">Infos</a></li>
                  <li className="scroll-to-section"><a href="#contact">Contact</a></li>
              </ul>

              {/*               <a className='menu-trigger'>
                  <span>Menu</span>
              </a> */}
              </nav>
          </div>
          </div>
      </div>

      </header>
        </div>

    )
  }
}
export default Header;