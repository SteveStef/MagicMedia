import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'
import { Link } from "react-router-dom";
import logo from './Logo (2).png'

class FAQ extends React.Component {
  render() {
    return (
        <div>
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
                  <li className="scroll-to-section"><Link to="/">Home</Link></li>
                  <li className="scroll-to-section"><Link to="/#services">Services</Link></li>
                  <li className="scroll-to-section"><Link to="/#infos">Infos</Link></li>
                  <li className="scroll-to-section"><Link to="/#contact">Contact</Link></li>
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
            
            <div className="page-heading">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 align-self-center">
        <div className="caption  header-text">
          <h6>SMMA AGENCY</h6>
          <div className="line-dec"></div>
          <h4>Most Frequently Asked <em>Questions</em> Here <em>?</em></h4>
        </div>
      </div>
      <div className="col-lg-5">
        <img src="assets/images/faqs-image.jpg" alt="" />
      </div>
    </div>
  </div>
</div>



<div className="happy-steps">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Our 4 Steps To Success & Happy Clients</h2>
      </div>
      <div className="col-lg-12">
        <div className="steps">
          <div className="row">
            <div className="col-lg-3">
              <div className="item">
                <img src="assets/images/services-01.jpg" alt="" style={{maxWidth: '66px', borderRadius: '50%', margin: '0 auto'}} />
                <h4>Project Introduction</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <img src="assets/images/services-02.jpg" alt="" style={{maxWidth: '66px', borderRadius: '50%', margin: '0 auto'}} />
                <h4>Work Development</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item">
                <img src="assets/images/services-03.jpg" alt="" style={{maxWidth: '66px', borderRadius: '50%', margin: '0 auto'}} />
                <h4>Data Analysis</h4>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="item last-item">
                <img src="assets/images/services-04.jpg" alt="" style={{maxWidth: '66px', borderRadius: '50%', margin: '0 auto'}} />
                <h4>Project Finishing</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="most-asked section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-heading">
            <h2>Most <em>Frequently</em> Asked <span>Questions</span></h2>
            <div className="line-dec"></div>

          </div>
        </div>
      </div>
      <div className="row">
      <Cards/>
        <div className="col-lg-6">
          <div className="accordions is-first-expanded">
          
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="cta section">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <h4>Are You Ready To Work & Develop With Us ?<br></br>Don't Hesitate & Contact Us !</h4>
      </div>
      <div className="col-lg-4">
        <div className="main-button">
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
        </div>
    );
  }
}

export default FAQ;