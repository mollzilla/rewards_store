// TODO;
import Overlay from './Overlay';
import ProductCard from './ProductCard';
import TransactionResultModal from './TransactionResultModal';
import { useSelector } from 'react-redux';
import { ProductsState } from '../store/reducers/products';

function CardContainer() {
  const success = true;
  const products = useSelector((state: { products: ProductsState }) => state.products.products);

  return (
    <div className="card-container">
      <Overlay />
      <TransactionResultModal success={success} />
      {products.length && products.map((product) => <ProductCard {...product} key={product._id} />)}
    </div>
  );
}

export default CardContainer;
