import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, onClick, onChange, setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = state => ({
  setOrderOption: setOrderOption(state),
  onClick: onClick(state),
  onChange: onChange(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);