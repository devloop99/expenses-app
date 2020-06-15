import { ExpenseDashboardPage } from "../../components/ExpenseDashboardPage";
import { shallow } from "enzyme";
import React from "react";
import configureStore from "redux-mock-store";

test("should dashboard render ", () => {
  // const store = configureStore();

  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
