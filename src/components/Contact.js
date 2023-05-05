import React, { Component, createRef } from 'react';

import '../App.css';
import emailjs from 'emailjs-com';

class Contact extends React.Component {
    form = createRef();
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            companyName: "",
            industry: "",
            goals: "",
            buttonMSG: "Send Message Now",
            errorText: ""
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const content = [this.state.name, this.state.email, this.state.companyName, this.state.industry, this.state.goals];

        if (content.some(string => string.trim() === "")) {
            this.setState({ errorText: "All fields must be completed to submit" })
            return
        }
        
        emailjs.sendForm(
            "service_f7xqstc", 
            "template_j3phvhl", 
            this.form.current,
            "yuFQzLCKpHCW0qkdK"
            ).then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        this.setState({
            name: "",
            email: "",
            companyName: "",
            industry: "",
            goals: "",
            buttonMSG: "Message Sent, (Click to send another)"
        });
        this.setState({ errorText: "" })
      };
    
      handleChange = (event) => {
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value,
        });
      };

    render() {
        return (
            <div className="contact-us section" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="contact-us-content">
                    <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <form ref={this.form} id="contact-form" action="" method="post">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="section-heading">
                                <h2><em>Contact Us</em> &amp; Get In <span>Touch</span></h2>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <input onChange={this.handleChange} value={this.state.name} name="name" id="name" placeholder="Your Name..." autoComplete="on" required />
                              </fieldset>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <input onChange={this.handleChange} value={this.state.companyName}  name="companyName" placeholder="Company Name..." autoComplete="on" required />
                              </fieldset>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <input onChange={this.handleChange} value={this.state.email}  name="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required />
                              </fieldset>
                            </div>
                            <div className="col-lg-6">
                              <fieldset>
                                <input onChange={this.handleChange} value={this.state.industry} name="industry"  placeholder="Industry..." autoComplete="on" />
                              </fieldset>
                              </div>
                              <div className="col-lg-12">
                                <fieldset>
                                  <textarea onChange={this.handleChange} value={this.state.goals} name="goals" id="message" placeholder="What do you hope to achieve by working with us?"></textarea>
                                </fieldset>
                              </div>
                              <div className="col-lg-12">
                                <fieldset>
                                  <button type="submit" id="form-submit" className="orange-button" onClick={this.handleSubmit}>{this.state.buttonMSG}</button>
                                </fieldset>
                              </div>
                            </div>
                            <span id="error">{this.state.errorText}</span>
                          </form>
                          <div className="more-info">
                            <div className="row">
                              <div className="col-lg-4">
                                <div className="info-item">
                                  <i className="fa fa-phone"></i>
                                  <h4><a href="#">610-781-7003</a></h4>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="info-item">
                                  <i className="fa fa-envelope"></i>
                                  <h4><a href="#">info@magicmediaagent.com</a></h4>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="info-item">
                                  <i className="fa fa-map-marker"></i>
                                  <h4><a href="#">Pennsylvania, United States</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Contact;