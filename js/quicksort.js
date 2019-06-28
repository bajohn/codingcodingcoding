const arr = [6, 3, 67, 9, 4, 5, 7, 8];

const qSort = function (arrIn) {
    if (arrIn.length < 2) {
        return arrIn;
    } else {
        const pivot = arrIn.pop();
        const less = arrIn.reduce((accum, el) => { if (el <= pivot) { accum.push(el); } return accum; }, []);
        const more = arrIn.reduce((accum, el) => { if (el > pivot) { accum.push(el); } return accum; }, []);

        return qSort(less).concat(pivot).concat(qSort(more));
    }
}

const sortedArr = qSort([].concat(arr));




const binSearch = function (arrIn, targ) {
    let hi = arrIn.length - 1;
    let lo = 0;
    while (hi >= lo) {
        const guess = Math.floor((hi + lo) / 2);
        if (arrIn[guess] === targ) {
            return guess;
        }
        if (arrIn[guess] < targ) {
            lo = guess + 1;
        }
        else {
            hi = guess - 1;
        }
    }
    return null;
}
console.log(arr, sortedArr);
console.log(binSearch(sortedArr, 67));