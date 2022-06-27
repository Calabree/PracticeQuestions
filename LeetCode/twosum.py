class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ans =[]
        for indx, val in enumerate(nums):
            needed = target - val
            for i in nums:    
                if(i==needed and nums.index(i) != indx):
                    ans.append(indx)
                    ans.append(nums.index(i))
                    return ans