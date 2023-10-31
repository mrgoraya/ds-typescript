import { binarySearch } from "./binarySearch";

console.log(
  binarySearch(
    Array.from({ length: 100 }, (_, i) => i + 1),
    51
  )
);
