import React from 'react';
import "./Contact.css";
import bg from "../images/contact_1.png";
import mainBg from "../images/main-bg.png";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";

import gmail from "../images/gmail.png";
import phone from "../images/phone.png";

import twitter from "../images/contact_icons/twitter.png";
import insta from "../images/contact_icons/inst.png";
import linkedin from "../images/contact_icons/linkedIn.png";


function Contact(props) {
    return (
        <div className='contact'>

            <div className='contact-us-main-box'>

                <div className='contact-box-1'>

                    <div className='contact-trans'>

                        <div className='transparent-div'>
                            <h1 className='contact-us-heading'>Contact Us</h1>

                            <div className='gmail-phone-div'>
                                <div className='contact-gmail'><span className='gmail-image'><img src={gmail} className='' /></span>info.intellied@gmail.com</div>
                                <div className='contact-phone'><span className='gmail-image'><img src={phone} className='' /></span>+91123456789</div>
                            </div>

                            <div className='contact-icons'>

                                <div> <img src={twitter} /> </div>
                                <div> <img src={insta} /> </div>
                                <div> <img src={linkedin} /> </div>


                            </div>

                        </div>


                    </div>


                </div>

                <div className='contact-box-2'>


                    <div className='Details'>


                        <div className='contact-right-side'>
                            <span className='bold-border'></span>
                            <h1 className='contact-heading'>Get in Touch</h1>
                            <span className='bold-border'></span>

                        </div>

                        <div className='contact-details'>

                            <InputGroup className="mb-3">
                                <FormControl aria-label="Text input with checkbox" placeholder="Name" />
                            </InputGroup>

                        </div>

                        <div className='contact-details'>
                            <InputGroup className="mb-3">

                                <FormControl aria-label="Text input with checkbox" placeholder="Email Id" />
                            </InputGroup>

                        </div>

                        <div className='contact-details'>

                            <Form.Control as="textarea" rows={3} placeholder="How can we help you?" />
                            

                        </div>

                        <Button className='contact-button' size="lg">
                            SEND
                        </Button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Contact;