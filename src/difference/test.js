const areDifferent = (Array1, Array2) => {
  return Array1.filter((x) => !Array2.includes(x));
};
console.log(areDifferent([4, 5, 6, 1], [8, 7, 9, 5]));
