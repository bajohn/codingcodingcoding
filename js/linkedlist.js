

const llist = function (val) {
    this.val = val;
    this.next = null;
}

const makeList = function () {
    const head = new llist(1);
    let curNode = head;
    for (let i = 2; i <= 10; i++) {
        curNode.next = new llist(i);
        curNode = curNode.next;
    }
    return head;
}

const reverseList = function (head) {
    let lastNode = head;
    let curNode = head.next;
    head.next = null;
    while (curNode !== null) {
        let temp = curNode.next;
        curNode.next = lastNode;
        lastNode = curNode;
        curNode = temp;
    }
    return lastNode;
}

// this doesn't work
const reverseRange = function (head, m, n) {
    // if m === 0, nothing special
    // if m > 0, store last non-reverse element, as this will need to point to 
    // the last element reversed.
    // always store first moved element, as this will point to the element after n, if it exists

    // update these on each iteration
    let lastNode = head;
    let curNode = head.next;
    let iter = 1;

    //special cases
    let firstRev = null;
    let lastRev = null;
    let lastNonRev = null;

    while (curNode !== null) {
        if (iter === m - 1) {
            lastNonRev = lastNode;
        }
        if (iter === m) {
            firstRev = lastNode;
        }
        if (iter === n - 1 && curNode.next === null) {
            firstRev.next = null;
            lastRev = curNode;
        }
        if (iter === n) {
            lastRev = lastNode;
        }
        if (iter === n + 1) {
            firstRev.next = curNode;
            if (lastNonRev !== null) {
                lastNonRev.next = lastRev;
            }
        }
        if (iter >= m && iter <= n) {
            const temp = curNode.next;
            curNode.next = lastNode;
            lastNode = curNode;
            curNode = temp;
        }
        if (iter > n || iter < m) {
            lastNode = curNode;
            curNode = curNode.next;
        }

        iter++;
    }
    if (m === 1) {
        return lastRev;
    } else {
        return head;
    }
}

const listToArr = function (headIn) {
    let curNode = headIn;
    const ret = [];
    while (curNode !== null) {
        ret.push(curNode.val);
        curNode = curNode.next;
    }
    return ret;
}

const head = makeList();
const newHead = reverseList(head);
console.log(listToArr(newHead));

//console.log(listToArr(reverseRange(head, 2, 4)));
//console.log(head);
