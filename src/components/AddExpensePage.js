import React from "react";
import ExpenseForme from "./ExpenseForme";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expense";

class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(startAddExpense(expense));
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

const AddExpensePageConnected = connect()(AddExpensePage);

export default AddExpensePageConnected;
