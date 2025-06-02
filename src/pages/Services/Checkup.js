// src/pages/Services/Checkup.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Checkup() {
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
          Checkup
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Checkup</h2>
      <p>This is the checkup service page.</p>
    </div>
  );
}

export default Checkup;
