import React from "react";
import ExpenseForme from "./ExpenseForme";
import { connect } from "react-redux";
import {
  startEditExpense as editExpense,
  startRemoveExpense as removeExpense,
} from "../actions/expense";

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: props.expenses.find((el) => el.id === props.match.params.id),
    };
  }
  onSubmit = (expense) => {
    const id = this.props.match.params.id;

    this.props.dispatch(editExpense(expense, id));
    this.props.history.push("/");
  };
  onRemove = () => {
    console.log("loading rm ....");
    console.log(this.props.match.params.id);

    this.props.dispatch(removeExpense({ id: this.props.match.params.id }));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h2>EDITTING EXPENSE :</h2>
        <ExpenseForme expense={this.state.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onRemove}>remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};
const EditExpensePageConnected = connect(mapStateToProps)(EditExpensePage);

export default EditExpensePageConnected;
