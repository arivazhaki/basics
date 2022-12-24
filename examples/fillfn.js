const array=[1,2,3,4,5,];
console.log(array.fill(4,1,2));
const array1=[1,2,3,4,5,6,7,8];
console.log(array1.fill(6));
console.log(array1.fill(5,3));
//console.log(array1.fill());
const found=array.find(value=>value>1);
console.log(found);
const SQRfn=array.map(ele=>ele*ele);
console.log(SQRfn);
const filterfn=array.filter(value1=>value1>2);
console.log(filterfn);
console.log(array.join('+'));
initialValue=0;
const sum=array.reduce((previousValue,currentValue)=>
    previousValue + currentValue,initialValue);
console.log("Total=="+sum);
const result=array.filter(word =>word > 3);
console.log(result);
const age = 20;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);



