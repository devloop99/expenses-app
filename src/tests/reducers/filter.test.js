import filterReducer from "../../reducers/filter";

test("should set up reducer default ", () => {
  const result = filterReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual({
    text: "",
    startDate: 0,
    endDate: undefined,
    sortBy: "amount",
  });
});
test("should set up reducer sort by date ", () => {
  const result = filterReducer(undefined, { type: "SORT_BY_DATE" });
  expect(result.sortBy).toEqual("date");
});
test("should set up reducer sort by amount", () => {
  const state = {
    text: "",
    startDate: 0,
    endDate: undefined,
    sortBy: "date",
  };
  const result = filterReducer(state, { type: "SORT_BY_AMOUNT" });
  expect(result.sortBy).toEqual("amount");
});

test("should set up reducer startDate ", () => {
  const result = filterReducer(undefined, {
    type: "START_DATE",
    startDate: 5555,
  });
  expect(result.startDate).toBe(5555);
});
test("should set up reducer endDate ", () => {
  const result = filterReducer(undefined, {
    type: "END_DATE",
    endDate: 7777,
  });
  expect(result.endDate).toBe(7777);
});
test("should set up reducer TEXT ", () => {
  const result = filterReducer(undefined, {
    type: "SET_TEXT",
    text: "medi",
  });
  expect(result.text).toBe("medi");
});
