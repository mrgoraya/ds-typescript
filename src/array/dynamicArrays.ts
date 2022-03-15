// https://www.youtube.com/watch?v=SycPba7pYR0&list=PLn4fTSbSpY5cL4_0MP83wq5khbmG3IKKd&index=5&ab_channel=JeffZhang
// creating dynamic array in typescript
const nums: number[] = [];

// write/updte - O(1)
nums[0] = 1;
nums[1] = 2;
nums[2] = 3;

// O(1)
nums.push(4);
nums.push(5);

// add element to beginning of the array
// shift all the elements
// O(n)
nums.unshift(0);
nums.unshift(-1)

console.log(nums)

// delete - O(n)
// this operation also shifts the elements
nums.splice(4, 1);

console.log(nums);