import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_TYPE } from '../store/actions';
import { PRODS_PER_PAGE } from '../store/actions/functions';
import { ProductsState } from '../store/reducers/products';

export default function Footer() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: { products: ProductsState }) => state.products.currentPage);
  const totalProducts = useSelector((state: { products: ProductsState }) => state.products.total);

  const lastPage = useMemo(() => totalProducts / currentPage <= PRODS_PER_PAGE, [totalProducts, currentPage]);

  const onNext = useCallback(() => {
    dispatch({ type: ACTION_TYPE.SET_PAGINATION, payload: currentPage + 1 });
  }, [dispatch, currentPage]);

  const onPrev = useCallback(() => {
    dispatch({ type: ACTION_TYPE.SET_PAGINATION, payload: currentPage - 1 });
  }, [dispatch, currentPage]);

  const footerLegend = useMemo(() => {
    const firstElement = (currentPage - 1) * PRODS_PER_PAGE;

    return `${firstElement + 1} - ${firstElement + 16} of ${totalProducts} products`;
  }, [currentPage, totalProducts]);

  return (
    <div className="footer">
      <div>
        <h4>{footerLegend}</h4>
      </div>

      {currentPage > 1 && <button onClick={onPrev}>&lt;</button>}
      {!lastPage && <button onClick={onNext}>&gt;</button>}
    </div>
  );
}
