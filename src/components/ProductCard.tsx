import { useState, useEffect, useContext } from 'react';
import Overlay from './Overlay';
import buyIcon from '../assets/icons/buy-blue.svg';
import { AppContext, UserData } from '../ContextProvider';
import coin from '../assets/icons/coin.svg';

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

  const { userData } = useContext(AppContext);
  const [user, setUser] = useState<UserData>({});
  useEffect(() => {
    setUser(userData);
  }, [userData, user]);

  if (user?.points === undefined) {
    return;
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
