import { UserState } from '../store/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import coin from '../assets/icons/coin.svg';
import { useCallback, useState } from 'react';
import { superGetpoints } from '../store/actions/functions';

// import buyIcon from "../assets/icons/buy-blue.svg";

export default function UserHeader() {
  const [pointsLoading, setPointsLoading] = useState(false);
  const { name, points } = useSelector((state: { user: UserState }) => state.user.user);
  const dispatch = useDispatch();

  const handleGetPoints = useCallback(
    async (requestedPoints: 1000 | 5000 | 7500) => {
      setPointsLoading(true);
      await dispatch(superGetpoints(requestedPoints));
      setPointsLoading(false);
    },
    [dispatch]
  );

  return (
    <div className="user-header">
      <div className="kite">
        <img src={coin} alt="" />
      </div>

      <div className="right">
        <p>{name}</p>
        <div className="header-button">
          <p>{pointsLoading ? 'Actualizando...' : points}</p>
          <div className="coin">
            <img src={coin} alt="" />
          </div>
        </div>
        <div className="header-button more">
          <a onClick={() => void handleGetPoints(5000)}>Mas monedas xfa</a>
        </div>
      </div>
    </div>
  );
}
