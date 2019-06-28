/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    //     Strategy: use recursion
    // Algo: buildNode(arrIn)
    // 1. find max val, 
    // 2. use max val to partition array into left, right
    // 3. leftbranch = buildNode(left), rightBranch = buildNode(right)
    // 4. if subarr is length = 0, assign null to branch (do nothing)

};

const buildNode = function (arrIn) {
    const maxIdx = findMaxIdx(arrIn);
    const left = arrIn.slice(0, maxIdx);
    const right = arrIn.slice(maxIdx + 1, arrIn.length);

    const retNode = new TreeNode(maxIdx);
    if (left.length > 0) {
        retNode.left = buildNode(left)
    }
    if (right.length > 0) {
        retNode.right = buildNode(right);
    }
    return retNode;
};


const findMaxIdx = function (arrIn) {
    let maxVal = -Infinity;
    let ret = 0;
    for (let idx in arrIn) {
        if (arrIn[idx] > maxVal) {
            ret = idx;
            maxVal = arrIn[idx];
        }
    }
    return ret;
};
