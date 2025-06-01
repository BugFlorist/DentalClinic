import React from "react";
import { Accordion, Breadcrumb } from "react-bootstrap";

function Contact() {
    return (
        <div>
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="text-center mb-4">
                <h2>Contact Us</h2>
            </div>

            <div>
                <div className="mb-4">
                    <h4>Our Location</h4>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.1177607822623!2d-75.68045970461401!3d45.419906596785886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a74fac7013%3A0x347e8ee96695c601!2sSite%20-%20Faculty%20of%20Engineering!5e0!3m2!1sen!2sca!4v1748740912740!5m2!1sen!2sca" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <p>
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p>
                            <strong>Opening Hours:</strong> Monday to Friday, 9:00 AM to 5:00 PM
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="mb-3">Frequently Asked Questions</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What are your opening hours?</Accordion.Header>
                        <Accordion.Body>
                            We are open Monday to Friday, 9:00 AM to 5:00 PM.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Do you accept walk-in patients?</Accordion.Header>
                        <Accordion.Body>
                            Yes, we accept walk-in patients, but appointments are recommended.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What insurance plans do you accept?</Accordion.Header>
                        <Accordion.Body>
                            We accept most major insurance plans. Please contact us for more details.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}
export default Contact;