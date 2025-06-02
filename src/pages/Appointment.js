import React from "react";
import { Form, Button, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
function Appointment(){
  return (
    <div>
        <div>
            <Breadcrumb>
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Book Appointment</Breadcrumb.Item>
            </Breadcrumb>
        </div>


        <div className="container mt-4">
        
            <div
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                backgroundImage: "url('https://oconnors.ca/wp-content/uploads/2016/05/UX-Banner-Book-Appointment-Page.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px"
                }}
            >
                <h1>Book an Appointment</h1>
            </div>
        
        </div>

        <div className="container my-4">

            

            <div className="row mb-4">
                <div className="col-md-8">
                    <Alert variant="warning">
                        Please note that our office is exceptionally closed on Monday June 2nd.
                    </Alert>
                    
                    <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>Service</Form.Label>
                        <Form.Select>
                            <optgroup label="General Dentistry">
                            <option>Cleaning</option>
                            <option>Check-up</option>
                            </optgroup>
                            <optgroup label="Cosmetic Dentistry">
                            <option>Orthodontics</option>
                            <option>Whitening</option>
                            </optgroup>
                            <optgroup label="Restorative Dentistry">
                            <option>Implants</option>
                            <option>Crowns</option>
                            </optgroup>
                        </Form.Select>
                    </Form.Group>


                    
                    {/*                     
                    <Form.Group className="mb-3">
                        <Form.Label>Service</Form.Label>
                        <Form.Select>
                        <option>Cleaning</option>
                        <option>Whitening</option>
                        <option>Braces</option>
                        </Form.Select>
                    </Form.Group> */}
                    <Form.Group className="mb-3">
                        <Form.Label>Preferred Date</Form.Label>
                        <Form.Control type="date" />
                    </Form.Group>
                    <Form.Check type="radio" label="Morning" name="time" />
                    <Form.Check type="radio" label="Afternoon" name="time" />
                    <Form.Check type="radio" label="Evening" name="time" className="mb-3" />
                    <Form.Check type="checkbox" label="I agree to the terms and conditions." className="mb-3" />
                    
                    <Button variant="primary" as={Link} to="/confirmation">Submit</Button>
                    </Form>
                </div>
            </div>
        </div>

    </div>
  
);
}

export default Appointment;