import Header from "../../components/Header";
import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";

test("should Header render correctly ", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
