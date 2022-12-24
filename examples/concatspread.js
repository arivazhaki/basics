array1=[1,2,3,4];
array2=[5,6,7,8,9,10];
const array3=array1.concat(array2);
console.log(array3);
const finalvalue=array3.concat(array2,array1);
console.log(finalvalue);
arr1=["hai"];
arr2=['hello'];
arr3=['how are u'];
const str=arr1.concat(arr2,arr3);
console.log(str);

const newarray=[1,2,3];
const arr2 = [...newarray];
//arr2.push(4);
console.log(arr2);
const abs={a:1,ele:2};
const student={...abs,number:5};
console.log(student);
