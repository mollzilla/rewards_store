import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearRedeemResult } from '../store/actions/functions';
import { ProductsState } from '../store/reducers/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faFrownOpen } from '@fortawesome/free-solid-svg-icons';

function Overlay() {
  const redeemResult = useSelector((state: { products: ProductsState }) => state.products.redeemResult);
  const dispatch = useDispatch();

  const statusMessage = useMemo(
    () => (redeemResult?.status === 'success' ? 'Yay, genial' : 'Aww snap'),
    [redeemResult]
  );

  const onOk = useCallback(() => {
    dispatch(clearRedeemResult());
    console.log(redeemResult);
  }, [redeemResult, dispatch]);

  return redeemResult ? (
    <div className="overlay">
      <div
        className="modal"
        style={{
          backgroundColor: redeemResult.status === 'success' ? 'rgb(139, 221, 135)' : 'rgb(239, 163, 135)',
        }}
      >
        <h2>{statusMessage}</h2>
        <span>{redeemResult.message}</span>
        <FontAwesomeIcon
          style={{ fontSize: '3rem' }}
          icon={redeemResult.status === 'success' ? faSmileBeam : faFrownOpen}
        />

        <button className="overlay-ok" onClick={onOk}>
          Ok, dale
        </button>
      </div>
    </div>
  ) : null;
}

export default Overlay;
