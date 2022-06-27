class Solution:
    def reverse(self, x: int) -> int:
        absv = abs(x)
        i = list(str(abs(x))[::-1])
        ans = int(''.join(i))
        if(ans>2147483647):
            return 0
        if(x<0):
            return -ans
        return ans
                
