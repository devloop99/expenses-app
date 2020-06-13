const defaultFilter = {
  text: "",
  startDate: 0,
  endDate: undefined,
  sortBy: "amount",
};

const filterReducer = (state = defaultFilter, action) => {
  switch (action.type) {
    case "SET_TEXT":
      const text = action.text;
      return {
        ...state,
        text,
      };

    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "START_DATE":
      return { ...state, startDate: action.startDate };
    case "END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filterReducer;
