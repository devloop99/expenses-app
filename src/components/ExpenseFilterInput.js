import React from "react";
import { connect } from "react-redux";
import { setText, sortByAmount, sortByDate } from "../actions/filter";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { setEndDate, setStartDate } from "../actions/filter";

export class ExpenseFilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "date",
      isFocused: undefined,
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    };
  }
  selectChange = (e) => {
    const option = e.target.value;
    this.setState(() => ({ option }));
    if (option === "date") {
      this.props.sortByDate();
    } else if (option === "amount") {
      this.props.sortByAmount();
    }
  };
  dateChange = (focusedInput) => {
    this.setState({ isFocused: focusedInput });
  };
  textChange = (e) => {
    this.props.setText(e.target.value);
  };
  onDateChange = ({ startDate, endDate }) => {
    this.setState(() => ({ startDate }));
    this.setState(() => ({ endDate }));
    this.props.setStartDate(startDate ? startDate.valueOf() : 0);
    this.props.setEndDate(endDate ? endDate.valueOf() : undefined);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.textChange}
        />
        <select value={this.state.option} onChange={this.selectChange}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
          focusedInput={this.state.isFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.dateChange} // PropTypes.func.isRequired,
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setText: (value) => dispatch(setText(value)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

const ExpenseFilterInputConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseFilterInput);

export default ExpenseFilterInputConnected;
