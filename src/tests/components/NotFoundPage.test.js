import React from "react";
import NotFoundPage from "../../components/NotFoundPage";
import { shallow } from "enzyme";

test("should notfoundpage render correcttly ", () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
