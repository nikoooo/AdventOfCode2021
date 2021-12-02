import { convertRowToMultiplier, isVertical } from "./functions1";

export const day2Part2 = (input: string[]) => {
  let aim = 0;
  let depth = 0;
  let horizontal = 0;

  input.forEach(row => {
    const value = convertRowToMultiplier(row);
    if (isVertical(row)) {
      aim += value;
    } else {
      horizontal += value;
      depth += (value * aim);
    }
  });

  return depth * horizontal;
}