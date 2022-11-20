import buyIcon from '../assets/icons/buy-blue.svg';
import coin from '../assets/icons/coin.svg';
import { UserState } from '../store/reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { redeem } from '../store/actions/functions';
import { useCallback } from 'react';

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

export default function ProductCard({ _id, category, cost, img, name }: ProductCardProps) {
  const userData = useSelector((state: { user: UserState }) => state.user.user);
  const dispatch = useDispatch();

  const handleRedeemClick = useCallback(() => {
    void dispatch(redeem(_id));
  }, [dispatch, _id]);

  if (userData.points === undefined) {
    return null;
  }

  return (
    <div className="product-card" key={_id}>
      {userData?.points >= cost ? (
        <button onClick={handleRedeemClick}>
          <img src={buyIcon} alt="buy-icon" className="buy-icon" />
        </button>
      ) : (
        <div className="te-faltan">
          <p>Te faltan {cost - userData.points}</p>
          <img src={coin} alt="points-coin" />{' '}
        </div>
      )}
      <img src={img?.url} alt="" />
      <div className="text-box">
        <h4>{category}</h4>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
