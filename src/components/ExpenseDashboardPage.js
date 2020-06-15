import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilterInput from "./ExpenseFilterInput";
import ExpenseTotal from "./ExpenseTotal";

export const ExpenseDashboardPage = () => (
  <div>
    <ExpenseTotal />
    <ExpenseFilterInput />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
