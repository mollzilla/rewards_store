import React, { useState, useEffect } from 'react';
import { User } from '../utils/user';

function Overlay(props) {
  return (
    <>
      <h1>Hola mundo!</h1>
      <div>icon</div>
      <div>
        <h4>12.000</h4>
        <span>icon</span>
        <button onClick={() => User.getCoins()}>Redeem now</button>
      </div>
    </>
  );
}

export default Overlay;
