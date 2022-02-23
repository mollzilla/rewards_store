// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { UserState } from './store/reducers/user';
import { useSelector } from 'react-redux';

import coin from '../assets/icons/coin.svg';

// import buyIcon from "../assets/icons/buy-blue.svg";

export default function UserHeader() {
  const { name, points } = useSelector((state: { user: UserState }) => state.user.user);

  // let variableHover;
  return (
    <div className="user-header">
      <div className="kite">
        <img src={coin} alt="" />
      </div>

      <div className="right">
        <p>{name}</p>
        <div className="points-tag">
          <p>{points}</p>
          <div className="coin">
            <img src={coin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
