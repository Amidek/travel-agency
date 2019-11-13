import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing';

const OrderForm = ({tripCost, options}) => (
  <Row>
    {pricing.map(option => ( 
      <Col md={4} key={option.id}>
        <OrderOption key={option.id} {...option} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary {...tripCost} {...options}/>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
  pricing: PropTypes.array,
};

export default OrderForm;