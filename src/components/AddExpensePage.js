import React from "react";
import ExpenseForme from "./ExpenseForme";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expense";

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>CREATE EXPENSE :</h2>
        <ExpenseForme onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapDispatchToProp = (dispatch) => ({
  addExpense: (expense) => dispatch(startAddExpense(expense)),
});
const AddExpensePageConnected = connect(
  undefined,
  mapDispatchToProp
)(AddExpensePage);

export default AddExpensePageConnected;
