import React from "react";
import { Card, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Services(){
  return (
    <div>
        
        <div>
        <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Services</Breadcrumb.Item>
        </Breadcrumb>   
        </div>
        
        <div className="container mt-4">
        
            <div
                className="text-center text-white d-flex align-items-center justify-content-center"
                style={{
                backgroundImage: "url('https://images.stockcake.com/public/6/6/3/663b1d91-6b40-438c-8809-8cff5593ebd8_large/dentist-s-office-interior-stockcake.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "300px"
                }}
            >
                <h1>Our Dental Services</h1>
            </div>
        
        </div>
        
        
        
        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>General Dentistry</h2>
            </div>
            <div className="row align-items-center">
                {["Cleaning", "Checkup"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/services/" + service.toLowerCase()}>Learn More</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div>


        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>Cosmetic Dentistry</h2>
            </div>
            <div className="row align-items-center">
                {["Orthodontics", "Whitening"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/services/" + service.toLowerCase()}>Learn More</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div> 


        <div className="container my-4">
            <div className="row text-center mb-4">
                <h2>Restorative Dentistry</h2>
            </div>
            <div className="row align-items-center">
                {["Implants", "Crowns"].map((service, i) => (
                    <div className="col-md-6">
                    <Card>
                        <Card.Body>
                        <Card.Title>{service}</Card.Title>
                        <Card.Text>Learn more about our {service.toLowerCase()} services.</Card.Text>
                        <Button variant="primary" as = {Link} to={"/services/" + service.toLowerCase()}>Learn More</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </div>
        </div>       



    </div>
  
);
}

export default Services;