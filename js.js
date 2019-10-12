let a1 = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
let a2 = [-1, -8, -2];
let a3 = [1, 7, 3];
let a4 = [1, undefined, 3, 5, -3];
let a5 = [1, NaN, 3, 5, -3];

const arrCheck = (arr) =>  arr instanceof Array && arr.length;

// can be used one function for three kind of types

const loopByTypes = (arr, type = 'sum') => {
    let max = -Infinity;
    let min = Infinity;
    let sum = 0;
    let isTypeSum = type === 'sum';
    if (arrCheck(arr) !== false) {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]) === false) {
                switch (type) {
                    case 'max':
                        if (arr[i] > max) { max = arr[i] }
                        break;
                    case 'min':
                        if (arr[i] < min) { min = arr[i] }
                        break;
                    case 'sum':
                        sum += arr[i];
                }
            }
        }
        return  (max !== -Infinity ? max : min !== Infinity ? min : isTypeSum ? sum : 'wrong type in property');
    } else {
        return 'invalid array';
    }
};

// or simple functions

const max = (arr) => {
     let max = -Infinity;
      if (arrCheck(arr) !== false) {
          for (let i = 0; i < arr.length; i++) {
              if (isNaN(arr[i]) === false) {
                  if (arr[i] > max) { max = arr[i] }
              }
          }
          return  max;
      } else {
          return 'invalid';
      }
};

const min = (arr) => {
    let min = Infinity;
    if(arrCheck(arr) !== false) {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]) === false) {
                if(arr[i] < min) {min = arr[i]}
            }
        }
        return  min;
    } else {
        return 'invalid';
    }
};

const sum = (arr) => {
    let sum = 0;
    if (arrCheck(arr) !== false) {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i]) === false) {
                sum += arr[i];
            }
        }
        return  sum;
    } else {
        return 'invalid';
    }
};
