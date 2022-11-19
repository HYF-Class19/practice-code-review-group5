# Deep-Flat

The flatten function takes the given array and removes all the nested arrays
inside of it.

---

## Strategy

I choose to use `.forEach`, `.isArray`,`.concat` and `.push` methods.

---

## Use Cases

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

This function can be used to make more readable code.

---

> Docstring is adapted from
> [lodash's flattenDeep](https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L7330)
