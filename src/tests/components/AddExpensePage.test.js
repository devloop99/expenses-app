import React from "react";
import { AddExpensePage } from "../../components/AddExpensePage";
import { shallow } from "enzyme";
import { startAddExpense } from "../../actions/expense";
import expenses from "../fixtures/expenses";

test("should add expense page render correctly", () => {
  const addExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage history={history} addExpense={addExpense} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should handle submit", () => {
  const addExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage history={history} addExpense={addExpense} />
  );
  wrapper.find("ExpenseForme").prop("onSubmit")(expenses[1]);
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
