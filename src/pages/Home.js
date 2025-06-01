import React from "react";
import { Breadcrumb, Carousel, Card, Button } from "react-bootstrap";

function Home() {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://3dsmile.imgix.net/ds-dental-hygiene-cleaning.jpg?ar=2%3A1&auto=format&fit=crop&fm=jpg&w=900"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://3dsmile.imgix.net/ds-oral-surgery.jpg?ar=2%3A1&auto=format&fit=crop&fm=jpg&w=900"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.glowdentalcare.in/wp-content/uploads/2024/06/2-1-900x450-1.webp"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container my-4">
                <h1 style={{ textAlign: "center" }}>Welcome to Our Dental Clinic</h1>
                <h4 style={{ textAlign: "center" }}>Your smile is our top priority!</h4>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <a href="/appointment" className="btn btn-primary">Request an Appointment</a>
                </div>
            </div>

            <div className="container pt-4"></div>

            <div className = "container my-4">

                <div className="row align-items-center">
                    <div className="col-md-4">
                        <img className="d-block w-100" src = "https://www.shutterstock.com/image-photo/dental-hygiene-oral-health-care-600nw-2523738153.jpg"></img>
                    </div>
                    <div className="col-md-5">
                        <h3>
                            About Our Dental Clinic
                        </h3>
                        <p>
                            At our dental clinic, we are committed to providing you with the highest quality of care in a comfortable and welcoming environment. Our team of experienced professionals is dedicated to ensuring that your dental experience is as pleasant and stress-free as possible.
                        </p>
                        <a href="/pages/Contact" className="btn btn-primary"> {/* two ways for a button */}
                            Find out more
                        </a>
                        
                    </div>
                </div>

            </div>
       

            <div className="container my-5" style={{ backgroundColor: "#d0f0fd", padding: "20px", borderRadius: "8px" }}>
                <div className="row pb-3">
                    <h2 style={{ textAlign: "center" }}>Our Services</h2>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://billingsbridgedental.ca/wp-content/uploads/2023/04/teeth-model-and-dental-equipment-on-table.jpg" style={{ height: "200px" }}/>
                        <Card.Body>
                            <Card.Title>General Dentistry</Card.Title>
                            <Card.Text>
                            We provide comprehensive general dentistry services to keep your teeth and gums healthy. From routine check-ups to fillings, our team is here to help you maintain your oral health.
                            </Card.Text>
                            <Button variant="primary" href="/">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img 
                            variant="top" 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDzB1aT8aAj-4Axidi3Wha6YwZ8RVYCAJ28g&s"
                            style={{ height: "200px" }}
                        />
                        <Card.Body>
                            <Card.Title>Cosmetic Dentistry</Card.Title>
                            <Card.Text>
                            We offer a range of cosmetic dentistry services to enhance the appearance of your smile. Whether you need teeth whitening, veneers, or orthodontics, we have the solutions for you.
                            </Card.Text>
                            <Button variant="primary" href="/">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-4">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://elshenawy-dentalclinics.com/wp-content/uploads/2025/04/Restorative-Dental-Procedures.png" style={{height: "200px"}}/>
                        <Card.Body>
                            <Card.Title>Restorative Dentistry</Card.Title>
                            <Card.Text>
                            We specialize in restorative dentistry to repair and restore damaged or missing teeth. Our services include crowns, bridges, and implants to help you regain your smile and confidence.
                            </Card.Text>
                            <Button variant="primary" href="/">Learn More</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </div>    

            </div>
        </div>
    );
}

export default Home;