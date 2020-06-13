import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

export default class ExpenseForme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: !!this.props.expense ? this.props.expense.description : "",
      amount: !!this.props.expense ? this.props.expense.amount : "",
      note: !!this.props.expense ? this.props.expense.note : "",
      createdAt: !!this.props.expense
        ? moment(this.props.expense.createdAt)
        : moment(),
      isFocused: false,
    };
  }
  focusChange = ({ focused }) => {
    this.setState(() => ({ isFocused: focused }));
  };
  descriptionChange = (e) => {
    let description = e.target.value;

    this.setState(() => ({ description }));
  };
  noteChange = (e) => {
    const note = e.target.value;

    this.setState(() => ({ note }));
  };
  amountChange = (e) => {
    let amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      amount = e.target.value;
      this.setState(() => ({ amount }));
    }
  };
  onSubmit = () => {
    if (this.state.description)
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount)
          ? parseFloat(this.state.amount)
          : 0,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(),
      });
  };
  render() {
    return (
      <from>
        <input
          type="text"
          placeholder="Description"
          value={this.state.description}
          onChange={this.descriptionChange}
          autoFocus
        />
        <input
          type="text"
          onChange={this.amountChange}
          value={this.state.amount}
          placeholder="Amount"
        />
        <textarea
          placeholder="your note"
          value={this.state.note}
          onChange={this.noteChange}
        ></textarea>
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={(createdAt) => this.setState({ createdAt })} // PropTypes.func.isRequired
          focused={this.state.isFocused} // PropTypes.bool
          numberOfMonths={1}
          isOutsideRange={() => false}
          onFocusChange={this.focusChange} // PropTypes.func.isRequired
        />
        <button onClick={this.onSubmit}>Add expense</button>
      </from>
    );
  }
}
