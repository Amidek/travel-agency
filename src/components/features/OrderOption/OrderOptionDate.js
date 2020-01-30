import React from 'react';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {

    state = {
      startDate: new Date(),
    };

    static propTypes = {
      setOptionValue: PropTypes.func,
    };

    handleChange = date => {
      const { setOptionValue } = this.props;

      this.setState({
        startDate: date,
      },
      () => {
        setOptionValue(date);
      },
      );
    };

    render() {
      return (
        <DatePicker className={styles.datepicker}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
}

export default OrderOptionDate;