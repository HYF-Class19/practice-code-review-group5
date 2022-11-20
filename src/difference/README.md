# Difference

A function that takes in two arrays and returns
an array by removing values that match any value in a second array.

---

## Strategy

I chose to use built-in array `filter()` and `includes()` methods.

---

## Implementation

- I used `filter()` to create a new array from two the parameters and used `includes()`
  to check for co-existence, then I reversed by using `!`.

## Use Cases

```js
const difference = (array1, array2) => {
return array1.filter(x => !array2.includes (x));
};

const areDifferent = ( Array1, Array2) =>
{return Array1.filter(x => !Array2.includes(x));}
console.log (areDifferent ( [4,5,6,1],[8,7,9,5])); // [4,6,1];
```

## Inspiration

<https://www.w3schools.com>
