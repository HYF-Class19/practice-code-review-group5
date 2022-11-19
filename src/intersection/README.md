# Intersection

A function takes in two arrays and return a new array with the values (NOT
dublicated) exist inside both of them , and that with the order determined in
the first array.

---

## Strategy

I chose to use built-in array `filter()` and `includes()` methods.

---

## Implementation

- I used `filter()`, `includes()` built-in array to check intersection between
  two arrays and store in new array `filteredArr`.
- Then using `indexOf()` method with the `filter()` with an arrow function for
  removing repeated value.

## Use Cases

```js
const intersection = (array = [], values = []) => {
  let filteredArr = array.filter((value) => values.includes(value));
  filteredArr = filteredArr.filter(
    (element, index) => filteredArr.indexOf(element) === index,
  );
  return filteredArr;
};

const arr1 = [1, 3, 1, 4, 2];
const arr2 = [1, 2, 3];
console.log(intersection([1, 3, 1, 4, 2], [1, 2, 3])); // [1,3,2];
```

## Inspiration

[This article](https://www.techiedelight.com/find-intersection-arrays-javascript/)
gave me the starter code to use `filter` and `include`.

[This article](https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o)
inspire me to remove the dublicated values.
