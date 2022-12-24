const sum = (...args) =>
{
  //const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum());
