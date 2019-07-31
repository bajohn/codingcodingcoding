// like an online interview question :)

// Given a target xy coordinate on a mxn grid marked by "9"
// 1's are allowed, 0's are not allowed.
// find shortest path from top left to 9.

const board = [
    [-1, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 1, 9, 0, 1],
    [0, 0, 1, 1, 1, 1]
];
// coordinate annotation
// i,j,shortest path to coordinate

const queue = ['0,0,1'];

visited = {};
let ret = -1;
const doBfs = function () {
    while (queue.length > 0 && ret === -1) {
        console.log(queue);
        const curCoordStr = queue.pop();
        console.log(curCoordStr);
        console.log(board);
        const curCoord = curCoordStr.split(',').map(el => { return Number(el) });
        checkNeighbor(curCoord[0] + 1, curCoord[1], 1 + curCoord[2]);
        checkNeighbor(curCoord[0], curCoord[1] + 1, 1 + curCoord[2]);
        checkNeighbor(curCoord[0] - 1, curCoord[1], 1 + curCoord[2]);
        checkNeighbor(curCoord[0], curCoord[1] - 1, 1 + curCoord[2]);
    }
    return ret;
}





const checkNeighbor = function (i, j, nextDist) {

    if (i < board.length && j < board[0].length && i >= 0 && j >= 0) {
        const nextVal = board[i][j];
        if (nextVal === 9) ret = nextDist;
        else if (nextVal === 1) {
            const nextCoord = `${i},${j},${nextDist}`;
            if (!(nextCoord in visited)) {
                board[i][j] = -nextDist;
                queue.unshift(nextCoord);
            }
        }

    }

}

console.log(doBfs());