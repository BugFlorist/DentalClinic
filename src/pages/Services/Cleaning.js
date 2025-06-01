// src/pages/Services/Cleaning.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Cleaning() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Cleaning</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Teeth Cleaning</h2>
      <p>This is the teeth cleaning service page.</p>
    </div>
  );
}

export default Cleaning;
