function genRandomNum(n) {
    let arr = new Array(n);  //This creates a new array of length n
    for (let i=0; i<n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function sum(arr) {                                   //.reduce() takes an array and reduces it to a single value
    return arr.reduce((sum, curr) => sum + curr, 0);  //Logic for sum
}

export {genRandomNum, sum};