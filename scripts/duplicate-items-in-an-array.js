const nums = [1, 1, 1, 1, 1];

for (let index = 0; index < nums.length; index++) {
  while (nums[index] === nums[index - 1] || nums[index] === nums[index + 1]) {
    nums.splice(index, 1);
  }
}

console.log(nums);
