import { useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { ProductsState } from '../store/reducers/products';
import { useDispatch } from 'react-redux';
import { superFetchProductsData, superFetchUserData } from '../store/actions/functions';
import { PRODS_PER_PAGE } from '../store/actions/functions';

function CardContainer() {
  const dispatch = useDispatch();

  const getStuff = useCallback(() => {
    return async () => {
      await dispatch(superFetchUserData());
      await dispatch(superFetchProductsData());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getStuff());
  }, [dispatch, getStuff]);

  const currentPage = useSelector((state: { products: ProductsState }) => state.products.currentPage);

  const products = useSelector((state: { products: ProductsState }) => {
    const firstElement = (currentPage - 1) * PRODS_PER_PAGE;

    const paginatedProducts = state.products.products.slice(firstElement, firstElement + 16);
    return paginatedProducts;
  });

  return (
    <div className="card-container">
      {products.length && products.map((product) => <ProductCard {...product} key={product._id} />)}
    </div>
  );
}

export default CardContainer;
