const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
//const half = ({ max, min }) => (max + min) / 2.0;
const half1 =(a) => (a.max+a.min)/2.0;
//return half;
// Only change code above this line
console.log(half1(stats));
//stats={max,min}