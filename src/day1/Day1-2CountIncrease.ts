import { day1DepthIncreases } from "./Day1CountIncrease";

export const day1Step2DepthIncreases = (input: number[]) => {
  const groupedInputSum = input.reduce((acc, _current, i, array) => {
    if (i + 2 <= (array.length - 1)) {
      acc.push(
        array
          .slice(i, i + 3)
          .reduce((acc, current) => acc + current, 0)
      );
    }
    return acc;
  }, [] as number[]);

  return day1DepthIncreases(groupedInputSum);
}
