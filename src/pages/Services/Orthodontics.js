// src/pages/Services/Orthodontics.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Orthodontics() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Orthodontics</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Teeth Orthodontics</h2>
      <p>This is the Orthodontics service page.</p>
    </div>
  );
}

export default Orthodontics;
