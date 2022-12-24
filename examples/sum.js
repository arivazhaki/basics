const array1=[1,2,3,4,5,6,7,8,9,10];
//let sum=0;
let initialValue=0;
/*for(let i=0; i<array1.length; i++)
{
    sum = sum + array1[i];
}*/
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
console.log(sumWithInitial);