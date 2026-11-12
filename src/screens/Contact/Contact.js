import React, { useState } from 'react'
import './Contact.css'
import MyFooter from '../../components/Footer/MyFooter';
import MyCopyright from '../../components/Copyright/MyCopyright';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className='contactBody'>
            <section className='contactPage' style={{
                backgroundSize: 'cover'
            }}>
                <div className='content'>
                    <h2 className='contact-us-hd'>Contact Willow Retreat</h2>
                    <p className='contact-us-para'>
                        We are here to assist with your suite reservations, bespoke requests, and private event bookings.
                        Reach out to our concierge team through any of our primary or alternative contact channels below.
                    </p>
                </div>

                <div className='mycontainer'>
                    <div className='contactInfo'>
                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-map-marker' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Address</h3>
                                <p>
                                    Willow Retreat Resort & Spa<br />
                                    100 Willow Valley Way, Suite 200<br />
                                    Aspen, Colorado, 81611, USA
                                </p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-phone' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Phone Numbers</h3>
                                <p>
                                    <strong>Primary:</strong> +1 (800) 555-0199<br />
                                    <strong>Alternative / Front Desk:</strong> +1 (970) 555-0142
                                </p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-envelope-o' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Email Addresses</h3>
                                <p>
                                    <strong>General:</strong> info@willowretreat.com<br />
                                    <strong>Alternative / Reservations:</strong> reservations@willowretreat.com
                                </p>
                            </div>
                        </div>

                        <div className='box'>
                            <div className='icon'>
                                <i className='fa fa-clock-o' aria-hidden="true"></i>
                            </div>
                            <div className='text'>
                                <h3>Service Hours</h3>
                                <p>
                                    <strong>Front Desk:</strong> 24/7 Available<br />
                                    <strong>Concierge & Reservations:</strong> Daily, 7:00 AM - 11:00 PM EST
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='contactForm'>
                        {submitted ? (
                            <div className="alert alert-success p-4 text-center" style={{ borderRadius: '10px' }}>
                                <h3 style={{ color: '#1f5156', marginBottom: '15px' }}>Message Received</h3>
                                <p>Thank you for reaching out to <strong>Willow Retreat</strong>. Our concierge team has received your inquiry and will contact you shortly.</p>
                                <button
                                    className="btn btn-outline-success mt-2"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormValues({ name: '', email: '', message: '' });
                                    }}
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h2>Send Message</h2>
                                <div className='inputBox'>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formValues.name}
                                        onChange={handleChange}
                                        required="required"
                                        className="contact-input"
                                    />
                                    <span>Full Name</span>
                                </div>
                                <div className='inputBox'>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                        required="required"
                                        className="contact-input"
                                    />
                                    <span>Email</span>
                                </div>
                                <div className='inputBox'>
                                    <textarea
                                        name="message"
                                        value={formValues.message}
                                        onChange={handleChange}
                                        required="required"
                                        className="contact-input"
                                        rows="4"
                                    ></textarea>
                                    <span>Type your message ...</span>
                                </div>
                                <div className='inputBox'>
                                    <input type="submit" value="Send" className="contact-input" />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
            <MyFooter />
            <MyCopyright />
        </div>
    )
}

export default Contact
