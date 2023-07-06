import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

export default function TransactionsHistory ({items})  {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.head_table}>Type</th>
          <th className={css.head_table}>Amount</th>
          <th className={css.head_table}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.table_body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.row_table} key={id}>
            <td className={css.table}>{type}</td>
            <td className={css.table}>{amount}</td>
            <td className={css.table}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionsHistory.propTypes = {
    items: PropTypes.array(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  };