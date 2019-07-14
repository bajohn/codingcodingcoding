const toPermute = 'abc';

const permute = function (word) {
    const result = [];
    const iterate = function (wordLoc, prefix) {
        for (let idx = 0; idx < wordLoc.length; idx++) {
            const substr = wordLoc.substring(0, idx) + wordLoc.substring(idx + 1);
            const curWord = prefix + wordLoc[idx];
            console.log(idx, wordLoc, substr);
            result.push(curWord);
            iterate(substr, curWord);
        }
    }
    iterate(word, '');
    return result;
};

console.log(permute(toPermute));

