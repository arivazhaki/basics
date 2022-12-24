/*var num=[];
var i;
for(i=0;i<=5;i++)
{
   num.push(i);
}
console.log(num);
console.log(i);*/
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
//console.log(printNumTwo());
let printNumTwo1;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo1 = function() {
      return i;
    };
  }
}
console.log(printNumTwo1());
console.log(i);