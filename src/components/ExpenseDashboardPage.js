import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilterInput from "./ExpenseFilterInput";

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseFilterInput />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
