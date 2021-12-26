import React, { useState, useEffect, useContext } from 'react';
import Overlay from './Overlay';
import buyIcon from '../assets/icons/buy-blue.svg';
import { AppContext } from '../ContextProvider';
import coin from '../assets/icons/coin.svg';

function ProductCard(props) {
  let variableHover;
  const { _id, category, cost, img, name } = props;

  const { userData, setUserData } = useContext(AppContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(userData);
  }, [userData, user]);

  return (
    <div className="product-card">
      {user.points > cost ? (
        <img src={buyIcon} alt="buy-icon" className="buy-icon" />
      ) : (
        <div className="te-faltan">
          <p>Te faltan {cost - user.points}</p>
          <img src={coin} alt="points-coin" />{' '}
        </div>
      )}
      <img src={img.url} alt="" />
      <div className="text-box">
        <h4>{category}</h4>
        <h3>{name}</h3>
      </div>

      {variableHover && <Overlay />}
    </div>
  );
}

export default ProductCard;
