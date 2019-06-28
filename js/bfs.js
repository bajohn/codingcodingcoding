//in a board of O's, find X via bfs


const x = 'X';
const o = 'O';
const board =
    [
        [o, o, o, o, o],
        [o, o, o, o, o],
        [o, o, o, o, o],
        [o, o, o, o, o],
        [o, o, o, x, o],
    ];
const queue = ['0,0'];
const visited = {};
const doBfs = function () {
    while (queue.length > 0) {
        const coord = queue.pop().split(',').map(el => { return Number(el) });
        if (board[coord[0]][coord[1]] === x) {
            return coord;
        } else {
            board[coord[0]][coord[1]] = '#';
            if (coord[0] < board.length - 1) {
                checkNeighbor(coord[0] + 1, coord[1]);
            }
            if (coord[1] < board[0].length - 1) {
                checkNeighbor(coord[0], coord[1] + 1);
            }
        }
    }
    return null;
};

const checkNeighbor = function (i, j) {
    const nextCoord = `${i},${j}`;
    if (!(nextCoord in visited)) {
        visited[nextCoord] = true;
        queue.unshift(nextCoord);
    }

}


console.log('done', doBfs());