export const calculator = (a: number, b: number, type: "plus" | "minus") => {
  if (type === "plus") {
    return a + b;
  }
  if (type === "minus") {
    return a - b;
  }
};
