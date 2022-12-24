const array=[1,2,3,4,5];
const map1=array.map(x=>x*5);
console.log(map1);
const numbers = [1, 25, 49];
const roots = numbers.map((num) => Math.sqrt(num));
console.log(roots);
const numbers1 = [1, 2, 3, 4];
function mapfn1(num)
{
    let index=0;
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});
}
console.log(mapfn1(2));

