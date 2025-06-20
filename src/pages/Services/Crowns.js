// src/pages/Services/Crowns.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Crowns() {
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
          Crowns
        </Breadcrumb.Item>
      </Breadcrumb>
      <h2>Crowns</h2>
      <p>This is the Crowns service page.</p>
    </div>
  );
}

export default Crowns;
