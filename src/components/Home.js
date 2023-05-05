import React from 'react';
import Header from './Header'
import Footer from './Footer'
import { Link } from "react-router-dom";
import multch from './socks.jpg';
import Contact from './Contact'

class Home extends React.Component {

  render() {
    return (
<div>
    <div>
        <Header/>
            <div className="main-banner" id="top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="caption header-text">
                      <h6>SMMA AGENCY</h6>
                      <div className="line-dec"></div>
                      <h4><em>Amplify </em>your <em>Brand's Voice </em> with<span>Magic Media</span></h4>
                      <p>At Magic Media, our mission is to empower businesses to achieve their full potential through the transformative power of social media marketing. We are dedicated to delivering customized campaigns that drive brand awareness, engagement, and measurable results for our clients. With a focus on data-driven strategy and continuous optimization, we strive to be the leading provider of social media marketing services in the industry. <Link to="/FAQ">FAQ</Link></p>
                      <div className="main-button scroll-to-section"><a href="#services">Discover More</a></div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="banner-image">
                      <img src="assets/images/header-image.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2><em>We  </em>can 
                    <span> Help you</span> achieve your goals
                  </h2>
                  <div className="line-dec"></div>
                  <p>
                    Our mission is to provide businesses with effective social media marketing strategies and tactics that drive real results.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-6 col-sm-6">
              <div className="service-item">
                <div className="icon">
                  <img src="assets/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                  <span style={{float: "right",fontSize:"20px"}}>
                    <i style={{color: "red"}}className="fab fa-google"></i> &nbsp;
                    <i style={{color: "#0052FF"}} className="fab fa-facebook"></i>&nbsp;
                    <i style={{color: "#00A3FF"}}className="fab fa-twitter"></i>&nbsp;
                    <i style={{color: "red"}} className="fab fa-youtube"></i>
                  </span>
                </div>
                <h4>Advertisement <span style={{color:"#c03afe"}}>Creation/Management</span> </h4>
              </div>
            </div>

              <div className="col-lg-6 col-sm-6">
                <div className="service-item">
                  <div className="icon">
                    <img src="assets/images/services-01.jpg" alt="discover SEO" className="templatemo-feature" />
                  </div>
                  <h4>Website <span style={{color:"#c03afe"}}>Development/Refining</span></h4>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="service-item">
                  <div className="icon">
                    <img src="assets/images/services-02.jpg" alt="data analysis" className="templatemo-feature" />
                  </div>
                  <h4>Social Media <span style={{color:"#c03afe"}}>Strategy Development</span></h4>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="service-item">
                  <div className="icon">
                    <img src="assets/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                  </div>
                  <h4> <span style={{color:"#c03afe"}}>Content & Ad Creation</span> (Picture & Video)</h4>
                </div>
              </div>

              <div className="col-lg-6 col-sm-6">
                <div className="service-item">
                  <div className="icon">
                    <img src="assets/images/services-03.jpg" alt="precise data" className="templatemo-feature" />
                  </div>
                  <h4><span style={{color:"#c03afe"}}>Identifying</span> & <span style={{color:"#c03afe"}}>Securing</span> <span style={{color:"rgb(85,0,227)"}}>Sponsorships</span></h4>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6">
                <div className="service-item">
                  <div className="icon">
                    <img src="assets/images/services-04.jpg" alt="SEO marketing" className="templatemo-feature" />
                  </div>
                  <h4>Social Media Account <span style={{color:"#c03afe"}}>Creation & Management</span></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="projects section" id="projects">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-heading">
          <h2>About   <em>Our Team</em> &amp; <span>Experience</span></h2>
          <div className="line-dec"></div>
          <p>
          At Magic Media, we have a team of highly skilled and experienced social media marketing professionals. Our team has a diverse range of expertise and has successfully executed campaigns for a variety of clients in different industries. We pride ourselves on staying up to date with the latest trends and techniques in social media marketing and are constantly finding new ways to help our clients achieve their marketing goals. We are a passionate and dedicated team, and our top priority is delivering exceptional results for our clients. Overall, our team at Magic Media is truly great and we have a wealth of experience in the field of social media marketing.
          </p>
        </div>
      </div>
      <img src={multch} style={{marginLeft: "5%", maxWidth: "500px", height: "auto"}} />
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="owl-features owl-carousel">
          <div className="item">
            <img src="assets/images/projects-01.jpg" alt=""/>
            <div className="down-content">
              <h4>Digital Agency HTML Templates</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/projects-02.jpg" alt=""/>
            <div className="down-content">
              <h4>Admin Dashboard CSS Templates</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/projects-03.jpg" alt=""/>
            <div className="down-content">
              <h4>Best Responsive Website Layouts</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/projects-04.jpg" alt=""/>
            <div className="down-content">
              <h4>HTML CSS Layouts for your websites</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/projects-02.jpg" alt=""/>
            <div className="down-content">
              <h4>Bootstrap 5 Themes for Free</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
          <div className="item">
            <img src="assets/images/projects-03.jpg" alt=""/>
            <div className="down-content">
              <h4>Mobile Friendly Website Layouts</h4>
              <a href="#"><i className="fa fa-link"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="infos section" id="infos">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-content">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src="assets/images/left-infos.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>More <em>About Us</em> &amp; What <span>We Offer</span></h2>
                <div className="line-dec" />
                <p>
                Whether you're looking to increase brand awareness, drive website traffic, or boost sales, we have the expertise and resources to help you achieve your goals. We offer a range of services, including social media strategy development, content creation, community management, and advertising campaign management.
We pride ourselves on being a results-driven agency and strive to exceed our clients' expectations on every project. We take the time to understand your business and tailor our approach to your specific needs and goals.
We look forward to the opportunity to work with you and help you succeed on social media. Thank you for considering Magic Media for all your social media marketing needs.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact/>

<Footer/>

      </div>
    )
  }
}

export default Home;