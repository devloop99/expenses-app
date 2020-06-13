import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./expenseListItem";
import getVisible from "../selectors/expenses";

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length > 0 ? (
      props.expenses.map((el) => <ExpenseListItem key={el.id} {...el} />)
    ) : (
      <p>No expense yet ...</p>
    )}
  </div>
);
const mapStateToProps = (state) => ({
  expenses: getVisible(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
