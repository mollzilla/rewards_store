// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState, useEffect } from 'react';

function Footer() {
  let pagination = true;

  return (
    <div className="footer">
      <div>
        <h4>16 of 32 products</h4>
      </div>

      {pagination && (
        <>
          <button>&lt;</button>
          <button>&gt;</button>
        </>
      )}
    </div>
  );
}

export default Footer;
