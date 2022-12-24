/*const a=3;
const b=-1;
console.log(a>=3 && b<1);
console.log(a>3 && b>1);
console.log(a>=3 || b>1);
console.log(a>3 || b<=-1);
console.log(a>3 || b>1);*/
const array=[3,4,6,7,8,21,24,15,91];
const result=array.filter(element=>!(element % 3));
console.log(result);
const array1=[34,67,78,12,90,23,56,90,1,2,3];
const result1=array1.filter(ele=>ele>50);
console.log(result1);
