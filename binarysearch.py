
# search for "target" value in array "arr".

def main():
    arr = ['a', 'b', 'c', 'd', 'f', 'g','h','i']
    target = 'd'
    res = doSearch(arr, target)
    print('done', res)

def doSearch(arrIn, targetIn):
    lo = 0
    hi = len(arrIn)-1

    while lo < hi:
        mid = (hi + lo)//2
        guess = arrIn[mid]
        print(mid, guess)
        if guess == targetIn:
            return mid
        elif guess < targetIn:
            lo = mid + 1
        else:
            hi = mid - 1

    return hi



main()