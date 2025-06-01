// src/pages/Services/Checkup.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Checkup() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Checkup</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Checkup</h2>
      <p>This is the chekcup service page.</p>
    </div>
  );
}

export default Checkup;
