// map():
console.groupCollapsed("map()")

// Test 1
test("Test 1: map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  const expected = 1
  equal(result[0], expected[0]);
});

// Test 2
test("Test 2: map() should transform each element of a unitary array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  const expected = [2];
  equal(result[0], expected[0]);
});



// Test 3
test("Test 3: map() should transform each element of a non-unitary array using the fn argument", () => {
  const result = map([1, 2], (x) => x + 1);
  const expected = [2, 3];
  equal(result[0], expected[0]);
  equal(result[1], expected[1]);
});

// Test 4:
test("Test 4: map()'s callback function should take an index parameter", () => {
  const actual = map([1, 2, 3], (element, index) => { return element + index; });
  const expected = [1,3,5];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
  equal(actual[2], expected[2]);
});

// Test 5:
test("Test 5: map()'s callback function should also take the array itself as a parameter", () => {
  const actual = map([1,2,3], (element, index, array) => {
    if (array) {
      return element + array.length;
    }
  });
  const expected = [4, 5, 6];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
  equal(actual[2], expected[2]);
});

// Test 6:
test("Test 6: map() can also take thisArg to use in the callback function as this.", () => {
  const foo = {someValue: 1};
  function unboundMap(x) {
    return x + this.someValue;
  }
  const actual = map([1,2], unboundMap, foo);
  const expected = [2,3]
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

console.groupEnd();


// End of map()

/* ------------------------------------------------ */

// filter():

console.groupCollapsed("filter()")

// Test 1
test("Test 1: filter([], () => {}) should return an array", () => {
  const actual = filter([], () => {});
  equal(Array.isArray(actual), true);
})

// Test 2
test("Test 2: filter() should return an error if it doesn't receive exactly two parameters ", () => {
  const actual = filter([]);
  const expected = 'Error: filter() takes exactly two parameters';
  equal(actual, expected);
});

// Test 3
test("Test 3: filter() with fn = () => {true}, should return the array itself", () => {
  const actual = filter([1], () => {return true});
  const result = [1];
  equal(actual[0], result[0])
})

// Test 4
test("Test 4: filter() should return an error if its first parameter isn't an array", () => {
  const actual = filter('hello', () => {});
  const expected = 'Error: the first parameter passed to filter() must be an array';
  equal(actual, expected);
});

// Test 5
test("Test 5: filter() should return an array with just [1] if [1,2] entered and fn = (x) => {x<2}", () => {
  const actual = filter([1,2], (x) => x < 2);
  const expected = [1];
  equal(actual[0],expected[0]);
});

// Test 6
test("Test 6: filter() should return [1, 2] if [1,2,3] entered and fn = (x) => {x<3}", () => {
  const actual = filter([1,2,3], (x) => x < 3);
  const expected = [1,2];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
});

// Test 7
test("Test 7: filter() should return [1,3] if [1,2,3] entered and fn = (x) => x % 2 === 1", () => {
  const actual = filter([1,2,3], (x) => x % 2 === 1);
  const expected = [1,3];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
})

// Test 8
test("Test 8: filter() should return the original array if the callback function returns a truthy value", () => {
  const actual = filter([1, 2, 3, 4], (x) => { return 1; } );
  const expected = [1, 2, 3, 4];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
  equal(actual[2],expected[2]);
  equal(actual[3],expected[3]);
});

// Test 9:
test("Test 9: filter()'s callback function should take an index parameter", () => {
  const actual = filter([1, 2, 3], (element, index) => { return element > index; });
  const expected = [1,2,3];
  equal(actual[0],expected[0]);
  equal(actual[1],expected[1]);
  equal(actual[2],expected[2]);
});

// Test 10:
test("Test 10: filter()'s callback function should also take the array itself as a parameter", () => {
  const actual = filter([1,2,3], (element, index, array) => {
    if (array) {
      return element === array.length;
    }
  });
  const expected = [3];
  equal(actual[0], expected[0]);
});

// Test 11:
test("Test 11: filter() can take thisArg to use as this. in the callback", () => {
  const foo = {someValue: 1};
  function unboundFilter(x) {
    return x === this.someValue;
  }
  const actual = filter([1,2], unboundFilter, foo);
  const expected = [1];
  equal(actual[0], expected[0]);
  equal(actual.length, expected.length);
});

console.groupEnd();
// End of filter

/* ------------------------------------------------ */

// every:
console.groupCollapsed("every()");

// Test 1:
test("Test 1: every() should return a boolean", () => {
  const actual = every([], () => {});
  equal(typeof actual, 'boolean');
});

// Test 2:
test("Test 2: every() should return an error if it doesn't receive exactly two parameters", () => {
  const actual = every([]);
  const expected = 'Error: every() takes exactly two parameters';
  equal(actual, expected);
});

// Test 3:
test("Test 3: every() should return an error if its first parameter isn't an array", () => {
  const actual = every('hello', () => {});
  const expected = 'Error: the first parameter passed to every() must be an array';
  equal(actual, expected);
});

// Test 4:
test("Test 4: every() should return false if the callback function always returns false", () => {
  const actual = every([1], () => { return false; } );
  equal(actual, false);
});

//Test 5:
test("Test 5: every() should return true if the return value of the function applied to the only element in the array is true", () => {
  const actual = every([1], (x) => { return x === 1; });
  const expected = true;
  equal(actual, expected);
});

// Test 6:
test("Test 6: every() should return false if the return value of the function applied to the first element is true, but applied to the second element is false", () => {
  const actual = every([1, 2], (x) => { return x === 1; });
  const expected = false;
  equal(actual, expected);
});

// Test 7:
test("Test 7: every() should return false if the return value of the function applied to the first and second elements are true, but applied to the third element is false", () => {
  const actual = every([1, 2, 3], (x) => { return x < 3; });
  const expected = false;
  equal(actual, expected);
});

// Test 8:
test("Test 8: every() should return true if function(all elements) = true, and false if function(any element) = false", () => {
  const actual = every([4, 1, 2, 3, 5], (x) => { return x < 4; });
  const actual2 = every([4, 1, 2, 3, 5], (x) => { return x < 6; });
  const expected = false;
  const expected2 = true;
  equal(actual, expected);
  equal(actual2, expected2);
});

// Test 9:
test("Test 9: every() should return true for an empty array", () => {
  const actual = every([], () => {return false});
  const expected = true;
  equal(actual, expected);
});

// Test 10:
test("Test 10: every()'s callback function should take an index parameter", () => {
  const actual = every([1, 2, 3], (element, index) => { return element > index; });
  const expected = true;
  equal(actual, expected);
});

// Test 11:
test("Test 11: every()'s callback function should also take the array itself as a parameter", () => {
  const actual = every([1,2,3], (element, index, array) => {
    if (array) {
      return element === array.length;
    }
  });
  const expected = false;
  equal(actual, expected);
});

// Test 12:
test("Test 12: every() does not execute the callback function for empty elements", () => {
  const actual = every([1,,2], (x) => x < 3);
  const expected = true;
  equal(actual, expected)
});

// Test 13:
test("Test 13: every() should take thisArg in the callback function", () => {
  const foo = {someValue: 3};
  function unboundEvery(x) {
    return x < this.someValue;
  }
  const actual = every([1,2], unboundEvery, foo);
  const expected = true;
  equal(actual, expected)
});

console.groupEnd();
// End of every

/* ------------------------------------------------ */

// some():
console.groupCollapsed("some()");

// Test 1:
test("Test 1: some() should return a boolean value", () => {
  const actual = some([], () => {});
  equal(typeof actual, 'boolean');
});

// Test 2:
test("Test 2: some() should return true if the return value of the callback function on the only element in the array is true", () => {
  const actual = some([1], (x) => { return x === 1; });
  const expected = true;
  equal(actual, expected);
});

// Test 3:
test("Test 3: some() should return true if the return value of the callback function is false for the first element but true for the second element", () => {
  const actual = some([1, 2], (x) => {return x === 2});
  const expected = true;
  equal(actual, expected);
});

// Test 4:
test("Test 4: some() should return false if the return value of the callback function is false for all elements", () => {
  const actual = some([1, 2, 3, 4], (x) => {return x > 4});
  const expected = false;
  equal(actual, expected);
});

// Test 5:
test("Test 5: some() should return false for an empty array", () => {
  const actual = some([], () => {});
  const expected = false;
  equal(actual, expected);
});

// Test 6:
// We need to learn more about this, bind etc. to work this one out :)
test("Test 6: some() should take a third parameter: a value to use as this when executing the callback function", () => {
  const foo = {someValue: 1};
  function unboundSome(x) {
    return x === this.someValue;
  }
  const actual = some([1, 2, 3], unboundSome, foo);
  const expected = true;
  equal(actual, expected);
});

// Test 7:
test("Test 7: some()'s callback function should take an index parameter", () => {
  const actual = some([1, 2, 3], (element, index) => { return element > index; });
  const expected = true;
  equal(actual, expected);
});

// Test 8:
test("Test 8: some()'s callback function should also take the array itself as a parameter", () => {
  const actual = some([1,2,3], (element, index, array) => {
    if (array) {
      return element === array.length;
    }
  });
  const expected = true;
  equal(actual, expected);
});

console.groupEnd();
// End of some()

/* ------------------------------------------------ */

// find()
console.groupCollapsed("find()");

// Test 1:
test("Test 1: find() should return the first element of an array if the callback function is always true", () => {
  const actual = find([1], () => {return true});
  const expected = 1;
  equal(actual, expected);
});

// Test 2:
test("Test 2: find() should return undefined if the callback function is always false", () => {
  const actual = find([1], () => {return false;});
  const expected = undefined;
  equal(actual, expected);
});

// Test 3:
test("Test 3: find() should return the first element if the callback function is x === 1, with array of [1]", () => {
  const actual = find([1], (x) => {return x === 1});
  const expected = 1;
  equal(actual, expected);
});

// Test 4:
test("Test 4: find() should return the second element if the callback function is x === 2, with array of [1, 2]", () => {
  const actual = find([1, 2], (x) => {return x === 2});
  const expected = 2;
  equal(actual, expected);
});

// Test 5:
test("Test 5: find() should return undefined for a empty array", () => {
  const actual = find([], ()=>{});
  const expected = undefined;
  equal(actual, expected);
});

// Test 6:
test("Test 6: find()'s callback function should take an index parameter", () => {
  const actual = find([1, 2, 3], (element, index) => { return element > index; });
  const expected = 1;
  equal(actual, expected);
});

// Test 7:
test("Test 7: find()'s callback function should also take the array itself as a parameter", () => {
  const actual = find([1,2,3], (element, index, array) => {
    if (array) {
      return element === array.length;
    }
  });
  const expected = 3;
  equal(actual, expected);
});

// Test 8:
test("Test 8: find() can take thisArg to use in the callback function as this.", () => {
  const foo = {someValue: 1};
  function unboundFind(x) {
    return x > this.someValue;
  }
  const actual = find([1, 2], unboundFind, foo);
  const expected = 2;
  equal(actual, expected);
});

console.groupEnd();
// End of find()

/* ------------------------------------------------ */
// reduce()
console.groupCollapsed("reduce()");

// Test 1:
test("Test 1: reduce() should produce an error if no callback function is provided", () => {
  const actual = reduce([]);
  const expected = 'Error: no callback function provided';
  equal(actual, expected);
});

// Test 2:
test("Test 2: reduce() should produce an error if the array is empty and no initialValue is provided", () => {
  const actual = reduce([], () => {});
  const expected = 'Error: array contains no elements, and initialValue is not provided';
  equal(actual, expected);
});

// Test 3:
test("Test 3: reduce() should return the first element of a unitary array with no initalValue provided", () => {
  const actual = reduce([1], () => {});
  const expected = 1;
  equal(actual, expected);
});

// Test 4:
test("Test 4: reduce() should return the value returned by the callback function, applied to the first element in a non-unitary array, if no initalValue provided", () => {
  const actual = reduce([1, 2], (x) => { return x * 3; });
  const expected = 3;
  equal(actual, expected);
});

// Test 5:
test("Test 5: reduce() should return the value calculated by the callback function as applied to first and second element, if the array is of length 3, and no initialValue is provided", () => {
  const actual = reduce([1, 2, 3], (x) => { return x * 3; });
  const expected = 9;
  equal(actual, expected);
});

// Test 6:
test("Test 6: reduce() should return the accumulated value calculated by the callback function as applied to first and second element, if the array is of length 3, and no initialValue is provided", () => {
  const actual = reduce([1, 2, 3], (x, y) => { return x + y; });
  const expected = 6;
  equal(actual, expected);
});

// Test 7:
test("Test 7: reduce() should return the the accumulated value calculated by the callback function as applied to all elements of the array, as initialValue is given", () => {
  const actual = reduce([1], (x, y) => {return y - x}, 2);
  const expected = -1;
  equal(actual, expected);
});

// Test 8:
test("Test 8: reduce() should return the the accumulated value calculated by the callback function as applied to all elements of the array, with falsy initialValue given", () => {
  const actual = reduce([2], (x, y) => {return y**x}, 0);
  const expected = 1;
  equal(actual, expected);
});

// Test 9:
test("Test 9: reduce()'s callback function should take an index parameter", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index) => { return accumulator + currentElement + index; }, 4);
  const expected = 8;
  equal(actual, expected);
});

// Test 9a:
test("Test 9a: reduce()'s callback function should take an index parameter, with no initialValue", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index) => {
    return accumulator + currentElement + index;
  });
  const expected = 4;
  equal(actual, expected);
});

// Test 10:
test("Test 10: reduce()'s callback function should also take the array itself as a parameter", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index, array) => {
    if (array) {
      return accumulator + currentElement + index + array.length;
    }
  }, 4);
  const expected = 12;
  equal(actual, expected);
});

// Test 10a:
test("Test 10a: reduce()'s callback function should also take the array itself as a parameter, without an initialValue", () => {
  const actual = reduce([1, 2], (accumulator, currentElement, index, array) => {
    if (array) {
      return accumulator + currentElement + index + array.length;
    }
  });
  const expected = 6;
  equal(actual, expected);
});

// Test 11:
test("Test 11: reduce does not execute the callback function for empty array elements", () => {
  const actual = reduce([1,,2],(x, y) => {return y - x}, 2);
  const expected = 3;
  equal(actual, expected);
});

console.groupEnd();
// End of reduce()


/* ------------------------------------------------ */

// flat()
console.groupCollapsed("flat()");

// Test 1:
test("Test 1: flat() should return an array", () => {
  const actual = flat([]);
  equal(Array.isArray(actual), true)
});

// Test 2:
test("Test 2: flat() should flatten the array [[1]] to [1]", () => {
  const actual = flat([[1]]);
  const expected = [1];
  equal(actual[0], expected[0]);
});

// Test 3:
test("Test 3: flat() should flatten the array [[1, 2]] to [1,2]", () => {
  const actual = flat([[1, 2]]);
  const expected = [1, 2]
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

// Test 4:
test("Test 4: flat() should return [1,2] for input of [[1],[2]]", () => {
  const actual = flat([[1],[2]]);
  const expected = [1,2];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

// Test 5:
test("Test 5: flat() should return [1,2] for input of [1,2]", () => {
  const actual = flat([1,2]);
  const expected = [1,2];
  equal(actual[0], expected[0]);
  equal(actual[1], expected[1]);
});

// Test 6:
test("Test 6: flat() should return [1] for input of [[[1]]] and depth 2", () => {
  const actual = flat([[[1]]], 2);
  const expected = [1];
  equal(actual[0], expected[0]);
});

// Test 7:
test("Test 7: flat() should return [1] for input of [[[[[[[[8]]]]]]]] and depth Infinity", () => {
  const actual = flat([[[[[[[[1]]]]]]]], Infinity);
  const expected = [1];
  equal(actual[0], expected[0]);
}); // IT works doesn't need changing in the index.js!

// Test 8:
test("Test 8: flat() with depth 0 should return the original array", () => {
  const actual = flat([1,[2]], 0);
  const expected = [1,[2]];
  equal(actual[1][0],expected[1][0]);
})

// Test 9:
test("Test 9: flat() with depth less than 0 should act like depth = 0", () => {
  const actual = flat([1,[2]], -5);
  const expected = [1,[2]];
  equal(actual[1][0],expected[1][0]);
})

// Test 10:
test("Test 10: flat() with values undefined at current depth should remove them", () => {
  const actual = flat([1,,2]);
  const expected = [1,2];
  equal(actual.length, expected.length)
})
console.groupEnd();
// End of flat()