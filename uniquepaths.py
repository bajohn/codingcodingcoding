class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid):
        
        pathCount = 0
        xMax = len(obstacleGrid[0])
        yMax = len(obstacleGrid)
        totalLen = xMax + yMax - 2 
        
        def recurs(lastX, lastY):
            if lastX + lastY == totalLen:
                nonlocal pathCount
                pathCount += 1
            else:
                if lastX < xMax - 1:
                    newX = lastX + 1
                    newY = lastY
                    if obstacleGrid[newX][newY] == 0:
                        recurs(newX, newY)
                if lastY < yMax - 1:
                    newX = lastX
                    newY = lastY + 1
                    if obstacleGrid[newX][newY] == 0:
                        recurs(newX, newY)


        recurs(0,0)
        return pathCount
        

        

soln = Solution()
grid = [[0,0,0],[0,1,0],[0,0,0]]
out = soln.uniquePathsWithObstacles(grid)
print(out)