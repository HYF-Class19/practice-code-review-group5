function flatten(arr) {
  let flatArray = [];

  arr.forEach(element => {
    if(Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
    }
    else {
      flatArray.push(element);
    }
  });

  return flatArray;
}

module.exports = flatten;
[[1, 2],[3, 4],[5, 6],[7, 8, 9],[10, 11, 12, 13, 14, 15]]