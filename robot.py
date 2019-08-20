import math 
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        return self.fact(m + n - 2)/(self.fact(m-1) * self.fact(n-1))
        
        
    def fact(self, n):
        return math.factorial(n)