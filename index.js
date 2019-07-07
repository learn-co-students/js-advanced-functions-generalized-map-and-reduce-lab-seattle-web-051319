const map = (arr, func) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newVal = func(arr[i]);
        newArr.push(newVal);
    }
    return newArr;
}

const reduce = (arr, func, start) => {
    let currVal = !!start ? start : arr[0];
    let i = !!start ? 0 : 1;
    for (; i < arr.length; i++) {
        currVal = func(arr[i], currVal);
    } 
    return currVal;
}