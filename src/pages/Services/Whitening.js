// src/pages/Services/Whitening.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function Whitening() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/services">Services</Breadcrumb.Item>
        <Breadcrumb.Item active>Teeth Whitening</Breadcrumb.Item>
      </Breadcrumb>
      <h2>Teeth Whitening</h2>
      <p>This is the teeth Whitening service page.</p>
    </div>
  );
}

export default Whitening;
