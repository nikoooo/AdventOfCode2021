export const day1DepthIncreases = (input: number[]) => 
  input.reduce((acc, current, i) => 
    (i > 0) && (current > input[i - 1]) ? ++acc : acc
  , 0);
