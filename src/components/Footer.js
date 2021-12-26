import React, { useState, useEffect } from 'react';

function Footer() {
  let pagination = true;

  return (
    <div className="footer">
      <div>
        <h4>16 of 32 products</h4>
      </div>
      <button>&gt;</button>
      {pagination && <button>&lt;</button>}
    </div>
  );
}

export default Footer;
