import React from "react";
import { shallow } from "enzyme";
import { ExpenseFilterInput } from "../../components/ExpenseFilterInput";
import moment from "moment";
import { filters, altFilters } from "../fixtures/filters";

test("should filterInput render correctly", () => {
  const wrapper = shallow(<ExpenseFilterInput filters={filters} />);
  expect(wrapper).toMatchSnapshot();
});

test("should filterInput set sort by text", () => {
  const setTextSpy = jest.fn();
  const value = "hey";
  const wrapper = shallow(
    <ExpenseFilterInput setText={setTextSpy} filters={altFilters} />
  );
  wrapper.find("input").at(0).simulate("change", {
    target: {
      value,
    },
  });
  expect(setTextSpy).toHaveBeenLastCalledWith(value);
});

test("should select sorted by date", () => {
  const setSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseFilterInput sortByDate={setSpy} filters={altFilters} />
  );
  wrapper.find("select").simulate("change", {
    target: {
      value: "date",
    },
  });
  expect(setSpy).toHaveBeenCalled();
});

test("should select sorted by amount", () => {
  const setSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseFilterInput sortByAmount={setSpy} filters={altFilters} />
  );
  wrapper.find("select").simulate("change", {
    target: {
      value: "amount",
    },
  });
  expect(setSpy).toHaveBeenCalled();
});

test("should datespicker set endDate and startDate correctly", () => {
  const endDate = moment().add(4, "years");
  const startDate = moment().subtract(2, "years");
  const setSpy1 = jest.fn();
  const setSpy2 = jest.fn();
  const wrapper = shallow(
    <ExpenseFilterInput
      setStartDate={setSpy1}
      setEndDate={setSpy2}
      filters={altFilters}
    />
  );
  wrapper.find("DateRangePicker").props().onDatesChange({ endDate, startDate });
  expect(setSpy1).toHaveBeenLastCalledWith(startDate.valueOf());
  expect(setSpy2).toHaveBeenLastCalledWith(endDate.valueOf());
});

test("should set focus correctly", () => {
  const calendarFocused = "endDate";
  const setSpy1 = jest.fn();
  const setSpy2 = jest.fn();
  const wrapper = shallow(
    <ExpenseFilterInput
      setStartDate={setSpy1}
      setEndDate={setSpy2}
      filters={filters}
    />
  );
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("isFocused")).toBe(calendarFocused);
});
