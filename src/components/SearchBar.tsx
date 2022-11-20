import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  gotoNextPage,
  gotoPrevPage,
  PRODS_PER_PAGE,
  PRODUCT_ORDER_CRITERIA,
  sortProducts,
} from '../store/actions/functions';
import { ProductsState } from '../store/reducers/products';

function SearchBar() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: { products: ProductsState }) => state.products.currentPage);
  const totalProducts = useSelector((state: { products: ProductsState }) => state.products.total);

  const handleGetProductsLow = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.LOWEST));
  }, [dispatch]);

  const handleGetProductsHigh = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.HIGHEST));
  }, [dispatch]);

  const handleGetProductsNew = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.NEWEST));
  }, [dispatch]);

  const onNext = useCallback(() => {
    dispatch(gotoNextPage());
  }, [dispatch]);

  const onPrev = useCallback(() => {
    dispatch(gotoPrevPage());
  }, [dispatch]);

  const legend = useMemo(() => {
    const firstElement = (currentPage - 1) * PRODS_PER_PAGE;

    return `${firstElement + 1} - ${firstElement + 16} of ${totalProducts} products`;
  }, [currentPage, totalProducts]);

  return (
    <div className="search-bar">
      <div className="products-count">
        <h4>{legend}</h4>
      </div>
      <div className="sort">Sort by:</div>
      <div className="buttons">
        <button value={'recent'} onClick={handleGetProductsNew}>
          Most recent
        </button>
        <button value={'lowest'} onClick={handleGetProductsLow}>
          Lowest Price
        </button>
        <button value={'highest'} onClick={handleGetProductsHigh}>
          Highest Price
        </button>
      </div>
      <button className="next-page" onClick={onPrev}>
        &lt;
      </button>
      <button className="next-page" onClick={onNext}>
        &gt;
      </button>
    </div>
  );
}

export default SearchBar;
