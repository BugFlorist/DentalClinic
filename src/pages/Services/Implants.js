// src/pages/Services/Implants.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Implants() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/services' }}>
          Services
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Implants
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Implants</h2>
      <p>This is the Implants service page.</p>
    </div>
  );
}

export default Implants;
