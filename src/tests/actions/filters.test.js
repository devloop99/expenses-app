import {
  setText,
  setStartDate,
  setEndDate,
  SortByAmount,
  SortByDate,
} from "../../actions/filter";

test("should set text filter with value", () => {
  const text = setText("test");
  expect(text).toEqual({
    type: "SET_TEXT",
    text: "test",
  });
});

test("should set text filter without value", () => {
  const text = setText();
  expect(text).toEqual({
    type: "SET_TEXT",
    text: "",
  });
});
