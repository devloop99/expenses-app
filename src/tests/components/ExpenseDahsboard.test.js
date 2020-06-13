import ExpenseDashboardPage from "../../components/ExpenseDashboardPage";
import { shallow } from "enzyme";
import React from "react";

test("should dashboard render ", () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
