import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/expenseListItem";
import expenses from "../fixtures/expenses";

test("should expensListItem render correctly", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
