import React from "react";
import { shallow } from "enzyme";
import ExpenseForme from "../../components/ExpenseForme";
import expenses from "../fixtures/expenses";

test("should render expenseForme correctly ", () => {
  const wrapper = shallow(<ExpenseForme />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expenseForme  with expense correctly ", () => {
  const wrapper = shallow(<ExpenseForme expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});
test("should submit expenseForme  with valid submit infi ", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForme expense={expenses[1]} onSubmit={onSubmitSpy} />
  );
  wrapper.find("button").simulate("click");

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    note: expenses[1].note,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt,
  });
});
