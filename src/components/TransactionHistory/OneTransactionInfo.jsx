import PropTypes from 'prop-types';
import { TransactionRow, TransactionCell } from './OneTransactionInfo.styled';

export const OneTransactionInfo = ({ id, type, amount, currency }) => {
  return (
    <TransactionRow key={id}>
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </TransactionRow>
  );
};

OneTransactionInfo.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

// export const OneTransactionInfo = ({ id, type, amount, currency }) => {
//   return (
//     <tr key={id}>
//       <td>{type}</td>
//       <td>{amount}</td>
//       <td>{currency}</td>
//     </tr>
//   );
// };
