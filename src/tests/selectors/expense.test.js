import getVisible from "../../selectors/expenses";
import expenses from "../fixtures/expenses";

test("shoulfilter by text", () => {
  const filters = {
    text: "e",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const result = getVisible(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});
test("shoulfilter by startDate", () => {
  const filters = {
    text: "",
    startDate: 0,
    endDate: undefined,
    sortBy: "date",
  };
  const result = getVisible(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});
test("shoul filter by endDate", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: 0,
    sortBy: "date",
  };
  const result = getVisible(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});
test("shoul filter by amount", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const result = getVisible(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
