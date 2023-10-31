/**
 * Returns the index of the target given number
 * @param numbers[] The array of number given for binary search
 * @param target The target number
 *
 * @returns {number}
 */
export function binarySearch(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) return mid;
    if (target <= numbers[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}
