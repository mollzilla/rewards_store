// TODO;

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam, faFrownOpen } from '@fortawesome/free-solid-svg-icons';

export default function TransactionResultModal({ success }) {
  console.log(success);
  return (
    <div className="transaction-result-modal">
      {success ? 'Transacción realizada con éxito!' : 'Lo sentimos, algo salió mal en la transacción'}
      <FontAwesomeIcon icon={success ? faSmileBeam : faFrownOpen} />
    </div>
  );
}
