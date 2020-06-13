import React from "react";
import { connect } from "react-redux";
import { setText, SortByAmount, SortByDate } from "../actions/filter";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import { setEndDate, setStartDate } from "../actions/filter";

class ExpenseFilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: "date",
      isFocused: undefined,
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month"),
    };
  }
  changeHandler = (e) => {
    const option = e.target.value;
    this.setState(() => ({ option }));
    if (option === "date") {
      this.props.dispatch(SortByDate());
    } else if (option === "amount") {
      this.props.dispatch(SortByAmount());
    }
  };
  dateChange = (focusedInput) => {
    this.setState({ isFocused: focusedInput });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setText(e.target.value));
          }}
        />
        <select value={this.state.option} onChange={this.changeHandler}>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => {
            this.setState(() => ({ startDate }));
            this.setState(() => ({ endDate }));
            this.props.dispatch(
              setStartDate(startDate ? startDate.valueOf() : 0)
            );
            this.props.dispatch(
              setEndDate(endDate ? endDate.valueOf() : undefined)
            );
          }} // PropTypes.func.isRequired,
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

const ExpenseFilterInputConnected = connect(mapStateToProps)(
  ExpenseFilterInput
);

export default ExpenseFilterInputConnected;
