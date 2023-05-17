import PropTypes from 'prop-types';
import {TableCSS, TheadCSS, TrCSS, ThCSS} from 'components/Transactions/Trnsactions.styled'

export const Transactions = ({ items  }) => {
  return (
    <TableCSS>
      <TheadCSS>
        <tr>
          <ThCSS>Type</ThCSS>
          <ThCSS>Amount</ThCSS>
          <ThCSS>Currency</ThCSS>
        </tr>
      </TheadCSS>

      <tbody>
        {items.map(item => (
            <TrCSS key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </TrCSS>
        ))}
        
      </tbody>
    </TableCSS>
  );
};

Transactions.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };