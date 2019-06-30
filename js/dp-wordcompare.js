// given 2 words, find longest shared substring of them
// 


const word1 = 'averylongwordwithonlyalittlematch';
const word2 = 'bbbverylongyyywajioawjfoiaalittlematch';
const table = [];
let ret = 0;
let maxi = 0;
let longstr = '';
for (let i = 0; i < word1.length; i++) {
    table[i] = [];
    for (let j = 0; j < word2.length; j++) {
        if (word1[i] === word2[j]) {
            if (j > 0 && i > 0) {
                table[i][j] = table[i - 1][j - 1] + 1;
            }
            else {
                table[i][j] = 1;
            }
        } else {
            table[i][j] = 0;
        }
        if (table[i][j] > ret) {
            ret = table[i][j];
            maxi = i;
        }
    }
}

if(ret > 0) {
    longstr = word1.substring(maxi - ret + 1, maxi + 1);
}
console.log(table);
console.log(ret);
console.log(longstr)