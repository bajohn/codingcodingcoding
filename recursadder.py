
# add all elements in an array via divide & conquer style recursion


def main():
    arr = [10,30,50,60]
    print(findSum(arr.copy(), 0))
    

def findSum(arr, curSum):
    if len(arr) == 0:
        return curSum
    else:
        valToAdd = arr.pop()
        curSum += valToAdd
        return findSum(arr, curSum)



if __name__ =='__main__':
    main()