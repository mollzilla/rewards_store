import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gotoNextPage, gotoPrevPage, PRODS_PER_PAGE } from '../store/actions/functions';
import { ProductsState } from '../store/reducers/products';

export default function Footer() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: { products: ProductsState }) => state.products.currentPage);
  const totalProducts = useSelector((state: { products: ProductsState }) => state.products.total);

  const onNext = useCallback(() => {
    dispatch(gotoNextPage());
  }, [dispatch]);

  const onPrev = useCallback(() => {
    dispatch(gotoPrevPage());
  }, [dispatch]);

  const footerLegend = useMemo(() => {
    const firstElement = (currentPage - 1) * PRODS_PER_PAGE;

    return `${firstElement + 1} - ${firstElement + 16} of ${totalProducts} products`;
  }, [currentPage, totalProducts]);

  return (
    <div className="footer">
      <div>
        <h4>{footerLegend}</h4>
      </div>

      <button onClick={onPrev}>&lt;</button>
      <button onClick={onNext}>&gt;</button>
    </div>
  );
}
