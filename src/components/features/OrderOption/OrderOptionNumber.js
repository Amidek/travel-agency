import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionNumber = ({ limits, currentValue, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input 
        type='number'
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event => setOptionValue(parseInt(event.currentTarget.value))}
        required
      >
      </input>
    </div>
  );
};

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
  limits: PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;