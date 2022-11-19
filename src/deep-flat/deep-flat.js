function flatten(array) {
  let flatArray = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    } else {
      flatArray.push(element);
    }
  });

  return flatArray;
}

module.exports = flatten;
