import PropTypes from 'prop-types';
import { TransactionRow, TransactionCell } from './OneTransactionInfo.styled';

export const OneTransactionInfo = ({ id, type, amount, currency }) => {
  return (
    <TransactionRow>
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </TransactionRow>
  );
};

OneTransactionInfo.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
