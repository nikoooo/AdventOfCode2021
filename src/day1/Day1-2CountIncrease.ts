import { day1DepthIncreases } from "./Day1CountIncrease";

export const day1Step2DepthIncreases = (input: number[]) => {
  const groupedScans = input.reduce((acc, _current, i, array) => {
    if (i + 3 <= (array.length - 1)) {
      acc.push(array.slice(i, i + 3));
    }
    return acc;
  }, [] as number[][]);

  const consolidatedGroupCount = groupedScans
    .reduce((acc, current) => {
      acc.push(current.reduce((acc, current) => acc + current, 0));
      return acc;
    }, []);

  return day1DepthIncreases(consolidatedGroupCount);
}
