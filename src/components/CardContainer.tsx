// TODO;
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { ProductsState } from '../store/reducers/products';

function CardContainer() {
  const products = useSelector((state: { products: ProductsState }) => state.products.products);
  console.log(products[0]);
  return (
    <div className="card-container">
      {products.length && products.map((product) => <ProductCard {...product} key={product._id} />)}
    </div>
  );
}

export default CardContainer;
