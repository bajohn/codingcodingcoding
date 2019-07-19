


//List all factors of a given number:
const factors = function (n) {
    const ret = [];
    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                if (ret.indexOf(i) === -1) ret.push(i);
                n = n / i;
                break;
            }
        }
    }
    return ret;
}

console.log(factors(1305813058));