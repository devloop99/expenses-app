export const setText = (text = "") => ({
  type: "SET_TEXT",
  text,
});
export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});

export const setStartDate = (stamps = undefined) => ({
  type: "START_DATE",
  startDate: stamps,
});

export const setEndDate = (stamps = undefined) => ({
  type: "END_DATE",
  startDate: stamps,
});
