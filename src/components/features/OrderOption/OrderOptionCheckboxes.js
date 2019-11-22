import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => {
  return (
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input
            type='checkbox'
            value={value.id}
            onChange={event => 
              setOptionValue(
                newValueSet(currentValue, value.id, event.currentTarget.checked))}
          >
          </input>
          {value.name} {value.price}
        </label>
      ))}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;