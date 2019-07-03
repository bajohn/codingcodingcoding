
// sort a at front, b in middle, c at end

const a = 'a';
const b = 'b';
const c = 'c';

const arr = [a, b, c, a, a, b, c, b, a, b, a, c, c, a, b, c, a, a, b];

let firstA = 0;
let firstB = 1;
let firstC = arr.length - 1;
while(firstB < firstC){
    const cur = arr[firstB];
    if(cur === a) {
        // ignore
        firstA++;
        firstB++;
    }
    if(cur === b) {
        //swap with b
    }
    if(cur === c){
        
    }
}