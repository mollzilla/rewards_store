import Overlay from './Overlay';
import buyIcon from '../assets/icons/buy-blue.svg';
import coin from '../assets/icons/coin.svg';
import { UserState } from '../store/reducers/user';
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

  if (!userData?.points) {
    return <></>;
  }

  return (
    <div className="product-card" key={_id}>
      {userData?.points > cost ? (
        <button onClick={() => console.log('click' + name)}>
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

      {variableHover && <Overlay />}
    </div>
  );
}

export default ProductCard;

{
  /* <div style={{ height: '40px' }}>
  <p
    style={{
      background: 'linear-gradient(to top, white 55%, transparent 50%)',
      padding: '0 4px',
      top: '-8px',
      left: '9px',
      fontSize: '12px',
      color: 'rgba(0,0,0,0.6)',
    }}
  >
    label
  </p>
  <div style={{ border: '1px solid black' }}></div>
</div>; */
}
