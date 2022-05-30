import { UserState } from '../store/reducers/user';
import { useDispatch, useSelector } from 'react-redux';

import coin from '../assets/icons/coin.svg';
import { useCallback } from 'react';
import { superGetpoints } from '../store/actions/functions';

// import buyIcon from "../assets/icons/buy-blue.svg";

export default function UserHeader() {
  const { name, points } = useSelector((state: { user: UserState }) => state.user.user);
  const dispatch = useDispatch();

  const handleGetPoints = useCallback(async (points: 1000 | 5000 | 7500) => {
    void dispatch(superGetpoints(points));
  }, []);
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
        <a onClick={hanldeGetPoints}>Mas monedas xfa</a>
      </div>
    </div>
  );
}
