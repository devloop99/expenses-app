import React from "react";
import { connect } from "react-redux";
import getVisible from "../selectors/expenses";
import { getTotal } from "../selectors/expenses";
import { formatNum } from "./expenseListItem";

const ExpenseTotal = ({ expenses }) => (
  <div>
    <h2>
      You have {getTotal(expenses).length}{" "}
      {getTotal(expenses).length ? "expenses" : "expense"} totalling :
      {formatNum(getTotal(expenses).total)}
    </h2>
  </div>
);

const mapStateToProps = (state) => ({
  expenses: getVisible(state.expenses, state.filters),
});
const ExpenseTotalConnected = connect(mapStateToProps)(ExpenseTotal);
export default ExpenseTotalConnected;
