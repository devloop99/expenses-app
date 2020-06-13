const getVisible = (expense, { text, sortBy, startDate, endDate }) => {
  const visible = expense
    .filter((el) => {
      const startMatch =
        typeof startDate !== "number" || el.createdAt >= startDate;

      const endMatch = typeof endDate !== "number" || el.createdAt <= endDate;
      const textMatch =
        el.description.toLowerCase().includes(text) || el.note.includes(text);

      return startMatch && endMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return -(a.createdAt - b.createdAt);
      } else if (sortBy === "amount") {
        return b.amount - a.amount;
      }
    });

  return visible;
};

export default getVisible;
