# Deep-Flat

Write a function that flattens nested arrays into a single array with no nesting

---

## Docstring

Here's a starter docstring for your solutions. Feel free to rewrite it if that
helps you understand:

```js
const data = [1, 2, , 4, 5, , 8];

function flatten(arr) {
  let flatArray = [];

  // do some stuff
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  });

  return flatArray;
}
const newArray = flatten(data);

console.log(newArray);
```

> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)
