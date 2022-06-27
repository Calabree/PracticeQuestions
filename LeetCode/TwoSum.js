var twoSum = (nums, target) => {
  const ans = [];
  for (const [index, element] of nums.entries()) {
    var needed = target - element;
    if (nums.includes(needed) && nums.indexOf(needed) != index) {
      ans.push(index);
      ans.push(nums.indexOf(needed));
      return ans;
    }
  }
};
