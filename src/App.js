import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import {Container, Nav, Navbar, Breadcrumb, NavDropdown} from 'react-bootstrap';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Experts from './pages/Experts';
import Confirmation from './pages/Confirmation';
import Cleaning from './pages/Services/Cleaning';
import Checkup from './pages/Services/Checkup';
import Orthodontics from './pages/Services/Orthodontics';
import Whitening from './pages/Services/Whitening';
import Implants from './pages/Services/Implants';
import Crowns from './pages/Services/Crowns';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href='/'>Dental Clinic</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to = "/">Home</Nav.Link>
              
               <NavDropdown
                title={
                  <Link to= '/services' style={{ color:"inherit", cursor: 'pointer' }}>
                    Services
                  </Link>
                }
                id="services-dropdown"
              >
              <NavDropdown.Header>General Dentistry</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services/cleaning">Cleaning</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/checkup">Checkup</NavDropdown.Item>
              <NavDropdown.Divider />
              
              <NavDropdown.Header>Cosmetic Dentistry</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services/orthodontics">Orthodontics</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/whitening">Whitening</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Header>Restorative Dentistry</NavDropdown.Header>
              <NavDropdown.Item as={Link} to="/services/implants">Implants</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/crowns">Crowns</NavDropdown.Item>
             
            
            
            </NavDropdown>
              

              {/* <Nav.Link href="/services">Services</Nav.Link> */}
              <Nav.Link as = {Link} to = "/experts">Experts</Nav.Link>
              <Nav.Link as = {Link} to="/appointment">Book Appointment</Nav.Link>
              <Nav.Link as = {Link} to="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} /> 
          {/* when the url matches /services this route is activated. it renders Services comporent */}
          <Route path="/services/cleaning" element={<Cleaning />} />
          <Route path="/services/checkup" element={<Checkup />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/whitening" element={<Whitening />} />
          <Route path="/services/implants" element={<Implants />} />
          <Route path="/services/crowns" element={<Crowns />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />

        </Routes>
      </Container>
    </Router>
  );
}

export default App;
