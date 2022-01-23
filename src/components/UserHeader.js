// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React, { useState, useEffect, useContext } from 'react';
import AppProvider from '../ContextProvider';
import { AppContext } from '../ContextProvider';
import coin from '../assets/icons/coin.svg';

// import buyIcon from "../assets/icons/buy-blue.svg";

function UserHeader(props) {
  // let variableHover;
  const { userData, setUserData } = useContext(AppContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(userData);
  }, [userData, user]);

  return (
    <div className="user-header">
      <div className="kite">
        <img src={coin} alt="" />
      </div>

      <div className="right">
        <p>{user.name}</p>
        <div className="points-tag">
          <p>{user.points}</p>
          <div className="coin">
            <img src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
