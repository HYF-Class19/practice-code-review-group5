function flattenArray(arr) {
  let flatArray = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flattenArray(element));
    } else {
      flatArray.push(element);
    }
  });

  return flatArray;
}

module.exports = flattenArray;
