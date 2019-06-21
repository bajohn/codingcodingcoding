
# Sort an array via selection sort algorithm.
def main():
    arr = [10,1, 20,11,31,5,5, 161,1,7]
    print(doSort(arr))

def doSort(arrIn):
    ret = []
    while len(arrIn) > 0:
        maxIdx = findMaxIdx(arrIn)
        maxEl = arrIn.pop(maxIdx)
        # ret.append(maxEl)
        ret = [maxEl] + ret
    return ret


def findMaxIdx(arrIn):
    curIdx = 0
    retIdx = curIdx
    maxEl = arrIn[curIdx]
    while curIdx < len(arrIn):
        curEl = arrIn[curIdx]
        if curEl > maxEl:
            retIdx = curIdx
            maxEl = curEl
        curIdx += 1
    return retIdx


if __name__ == "__main__":
    main()