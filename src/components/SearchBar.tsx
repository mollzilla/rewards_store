import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { PRODUCT_ORDER_CRITERIA, sortProducts } from '../store/actions/functions';

function SearchBar() {
  const dispatch = useDispatch();
  const pagination = true;

  const handleGetProductsLow = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.LOWEST));
  }, [dispatch]);

  const handleGetProductsHigh = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.HIGHEST));
  }, [dispatch]);

  const handleGetProductsNew = useCallback(() => {
    dispatch(sortProducts(PRODUCT_ORDER_CRITERIA.NEWEST));
  }, [dispatch]);

  return (
    <div className="search-bar">
      <div className="products-count">
        <h4>16 of 32 products</h4>
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
      <button className="next-page">&gt;</button>
      {pagination && <button className="next-page">&lt;</button>}
    </div>
  );
}

export default SearchBar;
