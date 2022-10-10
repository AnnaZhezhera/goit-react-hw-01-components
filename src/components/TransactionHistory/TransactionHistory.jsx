import PropTypes from 'prop-types';
import { OneTransactionInfo } from './OneTransactionInfo';
import {
  TransactionTable,
  TransactionTableHeading,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable class="transaction-history">
      <thead>
        <tr>
          <TransactionTableHeading>Type</TransactionTableHeading>
          <TransactionTableHeading>Amount</TransactionTableHeading>
          <TransactionTableHeading>Currency</TransactionTableHeading>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <OneTransactionInfo
            id={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
