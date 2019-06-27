console.log('hello')

const stack = [];

let num = 26;

while(num > 0){
    stack.push(num %2);
    num = Math.floor(num/2);
    console.log(stack);
}
let ret = '';
while(stack.length>0){
   ret += stack.pop();
}

console.log(ret);
let decimal = 0;
let power = ret.length-1;
for(el of ret){
    if(el==='1'){
        decimal += Math.pow(2, power);
    }
    power--;

}
console.log(decimal);