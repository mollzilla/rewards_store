import React, { useState, useEffect } from 'react';


function Footer() {

  let pagination=true;

  return(
    <>
      <div>
        <h4>16 of 32 products</h4>
      </div>
      <button>&gt;</button>
      {pagination &&
        <button>&lt;</button>}
    </>
  )
}

export default Footer;
