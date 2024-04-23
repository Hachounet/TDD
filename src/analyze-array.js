module.exports = analyzeArray;

function analyzeArray(array) {
  let obj = {};

  obj.min = Infinity;
  obj.max = -Infinity;
  obj.length = array.length;
  obj.average = array.reduce((acc, current) => acc + current, 0) / array.length;

  array.forEach((element) => {
    if (element < obj.min) {
      obj.min = element;
    }
    if (element > obj.max) {
      obj.max = element;
    }
  });
  console.log(obj);
  return obj;
}

analyzeArray([0, 12, 52, 25, 8, 7, 3, 2, 5]);
