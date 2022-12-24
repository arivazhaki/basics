//const map1=new Map();
//map1.set('a',1);
//console.log(map1.get('a'));
array=[1,2,3,4,5,6];
const initialvalue=0;
const sumValues=array.reduce((previousValue,currentValue)=>
    previousvalue + currentValue,initialValue);
console.log(sumValues);