import { useState, useEffect } from 'react';
import Overlay from './Overlay';
import buyIcon from '../assets/icons/buy-blue.svg';
import coin from '../assets/icons/coin.svg';
import { UserData, UserState } from '../store/reducers/user';
import { useSelector } from 'react-redux';

export type ProductCardProps = {
  _id: string;
  category: string; // TODO
  cost: number;
  img: {
    url: string;
    hdurl: string;
  };
  name: string;
};

function ProductCard({ _id, category, cost, img, name }: ProductCardProps) {
  let variableHover;
  const userData = useSelector((state: { user: UserState }) => state.user.user);

  const [user, setUser] = useState<UserData>({});
  useEffect(() => {
    setUser(userData);
  }, [userData, user]);

  if (user?.points === undefined) {
    return <></>;
  }

  return (
    <div className="product-card" key={_id}>
      {user.points > cost ? (
        <img src={buyIcon} alt="buy-icon" className="buy-icon" />
      ) : (
        <div className="te-faltan">
          <p>Te faltan {cost - user.points}</p>
          <img src={coin} alt="points-coin" />{' '}
        </div>
      )}
      <img src={img?.url} alt="" />
      <div className="text-box">
        <h4>{category}</h4>
        <h3>{name}</h3>
      </div>

      {variableHover && <Overlay />}
    </div>
  );
}

export default ProductCard;
