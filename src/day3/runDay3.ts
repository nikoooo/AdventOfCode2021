import { day3ExampleInput } from "../inputs/day3ExampleInput";
import { day3Input } from "../inputs/day3Input";
import { doDay3 } from "./functions";

(function () {
  console.log(`Day3 example output: ${doDay3(day3ExampleInput, 5)}`);
  console.log(`Day3 output: ${doDay3(day3Input, day3Input[0].length)}`);
})();