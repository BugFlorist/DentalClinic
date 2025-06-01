// src/pages/Services/Implants.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Implants() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Implants</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Implants</h2>
      <p>This is the Implants service page.</p>
    </div>
  );
}

export default Implants;
