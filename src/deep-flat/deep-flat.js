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

module.exports = flatten;
