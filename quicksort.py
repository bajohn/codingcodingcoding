# basic quicksort algorithm for arbitrary array assuming build-in compare func


def main():
    arr = ['a','l','u', 'b', 'a','c','d']
    print(doQuickSort(arr))

def doQuickSort(arrIn):
    if len(arrIn) < 2:
        return arrIn
    pivot = arrIn[0]
    less = []
    greater = []
    for el in arrIn[1:]:
        if el < pivot:
            less.append(el)
        else:
            greater.append(el)
    # normal order: 
    return doQuickSort(less) +  [pivot] + doQuickSort(greater) 
    # reverse order:
    # return doQuickSort(greater) + [pivot] + doQuickSort(less) 



if __name__ == '__main__':
    main()