// map():

// Test 1
/* function map(array) {
  return array;
} */

// Test 2
/* function map(array, fn) {
  array[0] = fn(array[0])
  return array;
} */

// Test 3
/* function map(array, fn) {
  array[0] = fn(array[0])
  array[1] = fn(array[1])
  return array;
} */

// Refactor after test 3
/* function map(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i],)
  }
  return array;
} */

// Test 4
/* function map(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i], i)
  }
  return array;
} */

// Test 5
function map(array, fn) {
  for (let i = 0; i < array.length; i++) {
    array[i] = fn(array[i], i, array)
  }
  return array;
}

// End of map()

/* ------------------------------------------------ */

// filter():

// Tests 1-8
/* function filter(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return 'Error: filter() takes exactly two parameters'
  };
  if (Array.isArray(arr) !== true) {
    return 'Error: the first parameter passed to filter() must be an array'
  }
  filteredArr = []
  // if (fn() == true) {
  //   return arr;
  // }
  for (let i = 0; i < arr.length; i++) {
    // JS's built-in .filter isn't strict? :)
    if (fn(arr[i]) == true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
} */

// Test 9
/* function filter(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return 'Error: filter() takes exactly two parameters'
  };
  if (Array.isArray(arr) !== true) {
    return 'Error: the first parameter passed to filter() must be an array'
  }
  filteredArr = []
  // if (fn() == true) {
  //   return arr;
  // }
  for (let i = 0; i < arr.length; i++) {
    // JS's built-in .filter isn't strict? :)
    if (fn(arr[i], i) == true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
} */

// Test 10
function filter(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return 'Error: filter() takes exactly two parameters'
  };
  if (Array.isArray(arr) !== true) {
    return 'Error: the first parameter passed to filter() must be an array'
  }
  filteredArr = []
  for (let i = 0; i < arr.length; i++) {
    // JS's built-in .filter isn't strict? :)
    if (fn(arr[i], i, arr) == true) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

// End of filter()

/* ------------------------------------------------ */

// every():

// Test 1:
/* function every() {
  return true
} */

// Test 2:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  return true;
} */

// Test 3:
// function every(arr, fn) {
//   if (arr === undefined || fn === undefined) {
//     return "Error: every() takes exactly two parameters";
//   }
//   if (Array.isArray(arr) === false) {
//     return "Error: the first parameter passed to every() must be an array";
//   }
//   return true;
// }

// Test 4:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 5:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 6:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[1]) === false && arr[1] !== undefined) {
    return false;
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 7:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  if (fn(arr[2]) === false && arr[2] !== undefined) {
    return false;
  }
  if (fn(arr[1]) === false && arr[1] !== undefined) {
    return false;
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Refactor after test 7:
// function every(arr, fn) {
//   if (arr === undefined || fn === undefined) {
//     return "Error: every() takes exactly two parameters";
//   }
//   if (Array.isArray(arr) === false) {
//     return "Error: the first parameter passed to every() must be an array";
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i]) === false & arr[i] !== undefined) {
//       return false;
//     }
//   }
//   if (fn(arr[0]) === true) {
//     return true;
//   }
//   if (fn() === false) {
//     return false;
//   }
//   return true;
// }

// Test 8:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false & arr[i] !== undefined) {
      return false;
    }
  }
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn() === false) {
    return false;
  }
  return true;
} */

// Test 9:
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === false) {
      return false;
    }
  }
  return true;
} */

// Test 10
/* function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i) === false) {
      return false;
    }
  }
  return true;
} */

// Test 11
function every(arr, fn) {
  if (arr === undefined || fn === undefined) {
    return "Error: every() takes exactly two parameters";
  }
  if (Array.isArray(arr) === false) {
    return "Error: the first parameter passed to every() must be an array";
  }
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr) === false) {
      return false;
    }
  }
  return true;
}

// End of every()

/* ------------------------------------------------ */

// some():

// Test 1:
/* function some() {
  return false;
} */

// Test 2:
/* function some(arr, fn) {
  if (fn(arr[0]) === true) {
    return true;
  }
  return false;
} */

// Test 3:
/* function some(arr, fn) {
  if (fn(arr[0]) === true) {
    return true;
  }
  if (fn(arr[1]) === true) {
    return true;
  }
  return false;
} */

// Refactor after test 3:
/* function some(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return true;
    }
  }
  return false;
} */

// Test 6:
/* function some(arr, fn, thisArg) {
  
  for (let i = 0; i < arr.length; i++) {
    if (fn.bind(thisArg)(arr[i]) === true) {
      return true;
    }
  }
  return false;
} */

// Test 7:
/* function some(arr, fn, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (fn.bind(thisArg)(arr[i], i) === true) {
      return true;
    }
  }
  return false;
} */

// Test 8:
/**
 * Callback for some array method
 * 
 * @callback someCallback
 * @type {function}
 * @param {*} [element] - the current element
 * @param {int} [index] - the current index
 * @param {array} [array] - the current  array
 */
/**
  * some takes an array and function as arguments
  * @function some
  * @param {array} arr - An array to look at
  * @param {someCallback} fn - A callback function to use on the array
  * @param {*} [thisArg] - An optional argument to be used as this, can't be used if fn is an arrow function.
  * @returns {boolean} boolean
*/
function some(arr, fn, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    if (fn.bind(thisArg)(arr[i], i, arr) === true) {
      return true;
    }
  }
  return false;
}

// End of some()

/* ------------------------------------------------ */

// find()

// Test 1:
/* function find(arr) {
  return arr[0];
} */

// Test 2:
/* function find(arr, fn) {
  if (fn() === true) {
    return arr[0];
  } 
} */

// Test 3:
/* function find(arr, fn) {
  if (fn(arr[0]) === true) {
    return arr[0];
  } 
} */

// Test 4:
/* function find(arr, fn) {
  if (fn(arr[0]) === true) {
    return arr[0];
  }
  if (fn(arr[1]) === true) {
    return arr[1];
  }
} */

// Refactor after test 4:
/* function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      return arr[i];
    }
  }
} */

// Test 5 No changes necessary

// Test 6
/* function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i) === true) {
      return arr[i];
    }
  }
} */

// Test 7
function find(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr) === true) {
      return arr[i];
    }
  }
}

// End of find()

/* ------------------------------------------------ */

// reduce()

// Test 1:
/* function reduce(arr) {
  return 'Error: no callback function provided';
}; */

// Test 2:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  return 'Error: array contains no elements, and initialValue is not provided';
}; */


// Test 3:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    return arr[0];
  }
  return 'Error: array contains no elements, and initialValue is not provided';
};
 */

// Test 4:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    return fn(arr[0]) || arr[0];
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 5 solution a:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length < 3){
      return fn(arr[0]) || arr[0];
    }
    return fn(fn(arr[0]));
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 5 solution b:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length === 1){
      return arr[0];
    }
    if (arr.length === 2) {
      return fn(arr[0]);
    }
    return fn(fn(arr[0]));
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 5 solution c:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {
    if (arr.length === 1){
      return arr[0];
    }
    if (arr.length === 2) {
      return fn(arr[0]);
    }
    if (arr.length === 3) {
      return fn(fn(arr[0]));
    }
  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 5 solution c refactor:
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let thingToReturn = arr[0]; // = 'arr[0]';

    for (let i = 1; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn);
      //thingToReturn = 'fn(' + thingToReturn + ')';
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 6 solution
/* function reduce(arr, fn) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let thingToReturn = arr[0];

    for (let i = 1; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 7 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = initialValue || arr[0];

    let startValue;

    if (initialValue) {
      startValue = 0;
    } else {
      startValue = 1;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 8 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i]);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 9 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i], i);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Test 10 solution
/* function reduce(arr, fn, initialValue) {
  if(!fn) {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    //console.log(initialValue);

    let thingToReturn = arr[0];

    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      thingToReturn = initialValue;
    }

    for (let i = startValue; i < arr.length; i++) {
      thingToReturn = fn(thingToReturn, arr[i], i, arr);
    }

    return thingToReturn;

  }
  return 'Error: array contains no elements, and initialValue is not provided';
}; */

// Cleaning up for complete
function reduce(arr, fn, initialValue) {
  if(typeof fn !== 'function') {return 'Error: no callback function provided';};
  if (arr.length > 0) {

    let previousValue = arr[0];
    let startValue = 1;

    if (initialValue !== undefined) {
      startValue = 0;
      previousValue = initialValue;
    }
    for (let i = startValue; i < arr.length; i++) {
      let currentValue = arr[i];
      let currentIndex = i
      let array = arr
      previousValue = fn(previousValue, currentValue, currentIndex, array);
    }

    return previousValue;
  }
  return 'Error: array contains no elements, and initialValue is not provided';
};
// End of reduce()

/* ------------------------------------------------ */

// flat()

// Test 1
/* function flat(arr) {
  return arr
}; */

// Test 2
/* function flat(arr) {
  let flattened = []
  if (Array.isArray(arr[0]) === true) {
    flattened.push(arr[0][0]);
  }
  return flattened
}; */

// Test 3
/* function flat(arr) {
  let flattened = []
  if (Array.isArray(arr[0]) === true) {
    flattened.push(arr[0][0]);
    flattened.push(arr[0][1]);
  }
  return flattened
}; */

// Refactor after Test 3
/* function flat(arr) {
  let flattened = []
  if (Array.isArray(arr[0]) === true) {
    for (let i=0; i < arr[0].length; i++) {
      flattened.push(arr[0][i])
    }
  }
  return flattened
}; */

// Test 4
/* function flat(arr) {
  let flattened = []
  if (Array.isArray(arr[0]) === true) {
    for (let i=0; i < arr[0].length; i++) {
      flattened.push(arr[0][i])
    }
  }
  if (Array.isArray(arr[1]) === true) {
    for (let i=0; i < arr[1].length; i++) {
      flattened.push(arr[1][i])
    }
  }
  return flattened
}; */

// Refactor after Test 4
/* function flat(arr) {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let j=0; j < arr[i].length; j++) {
        flattened.push(arr[i][j])
      }
    }
  }
  return flattened
}; */

// Test 5
/* function flat(arr) {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let j=0; j < arr[i].length; j++) {
        flattened.push(arr[i][j])
      }
    } else {
      flattened.push(arr[i])
    }
  }
  return flattened
}; */

// Refactor after Test 5
/* function flat(arr) {
  let flattened = []
  for (let i = 0; i < arr.length; i++) {
    flattened = flattened.concat(arr[i])
  }
  return flattened
}; */

// Test 6
/* function flat(arr, depth = 1) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (depth !== 1 && Array.isArray(arr[i])) {
      flattened = flattened.concat(flat(arr[i], depth - 1));
    } else {
      flattened = flattened.concat(arr[i]);
    }
  }
  return flattened
}; */

// Test 7 No Change

// Test 8
/* function flat(arr, depth = 1) {
  let flattened = [];
  if( depth === 0 ) {
    return arr
  } 
  for (let i = 0; i < arr.length; i++) {
    if (depth !== 1 && Array.isArray(arr[i])) {
      flattened = flattened.concat(flat(arr[i], depth - 1));
    } else {
      flattened = flattened.concat(arr[i]);
    }
  }
  return flattened
}; */

// Test 9
/* function flat(arr, depth = 1) {
  let flattened = [];
  if( depth <= 0 ) {
    return arr
  } 
  for (let i = 0; i < arr.length; i++) {
    if (depth !== 1 && Array.isArray(arr[i])) {
      flattened = flattened.concat(flat(arr[i], depth - 1));
    } else {
      flattened = flattened.concat(arr[i]);
    }
  }
  return flattened
}; */

// Test 10
function flat(arr, depth = 1) {
  let flattened = [];
  if( depth <= 0 ) {
    return arr
  } 
  for (const item of arr) {
    if (depth !== 1 && Array.isArray(item)) {
      flattened = flattened.concat(flat(item, depth - 1));
    } else {
      if (item === undefined) {
        continue
      }
      flattened = flattened.concat(item);
    }
  }
  return flattened
};
// End of flat()