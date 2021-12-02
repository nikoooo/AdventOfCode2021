import { calculateMovementXYMultiplied } from "./functions1";
import { day2Part2 } from "./functions2";
import { day2Input } from "./input";
import { day2nputExample } from "./inputExample";

(function main() {
  console.log(`Day 2 part 1, example data calculated: ${calculateMovementXYMultiplied(day2nputExample)}`);
  console.log(`Day 2 part 1, data calculated: ${calculateMovementXYMultiplied(day2Input)}`);

  console.log(`Day 2 part 2, example data calculated: ${day2Part2(day2nputExample)}`);
  console.log(`Day 2 part 2, data calculated: ${day2Part2(day2Input)}`);
})();