const arr = [6, 3, 67, 9, 4, 5, 7, 8];

const qSort = function (arrIn) {
    if (arrIn.length < 2) {
        return arrIn;
    } else {
        const pivot = arrIn.shift();
        const less = arrIn.reduce((accum, el) => { if (el <= pivot) { accum.push(el); } return accum; }, []);
        const more = arrIn.reduce((accum, el) => { if (el > pivot) { accum.push(el); } return accum; }, []);

        return qSort(less).concat(pivot).concat(qSort(more));
    }
}

console.log(qSort(arr));

