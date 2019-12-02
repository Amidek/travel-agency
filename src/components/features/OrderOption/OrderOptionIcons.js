import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => {
  return (
    <div className={styles.icon}>
      {required ? '' : (
        <div key='null' value=''><Icon name='times-circle'/>None</div>
      )}
      {values.map(value => (
        <div
          className={styles.icon, styles.iconActive}
          key={value.id}
          value={currentValue}
          onClick={event => setOptionValue(event.currentTarget.value)}

        >
          <Icon name={value.icon}/>
          {value.name} ({formatPrice(value.price)}))
        </div>
      ))}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;