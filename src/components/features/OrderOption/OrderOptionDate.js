import React from 'react';
import styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

class OrderOptionDate extends React.Component {
    state = {
      startDate: new Date(),
    };

    handleChange = date => {
      this.setState({
        startDate: date,
      });
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