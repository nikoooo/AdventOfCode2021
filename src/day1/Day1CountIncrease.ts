export const day1DepthIncreases = (input: number[]) => {
  return input.reduce((acc, current, i, array) => 
    (i > 0) && (current > array[i - 1]) ? (acc + 1) : acc
  , 0);
}
