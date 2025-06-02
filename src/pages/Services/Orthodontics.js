// src/pages/Services/Orthodontics.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Orthodontics() {
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
          Orthodontics
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Teeth Orthodontics</h2>
      <p>This is the Orthodontics service page.</p>
    </div>
  );
}

export default Orthodontics;
