// const studentMarks=[
//     {
//       Tamil:80,
//       English:60,
//       Maths:50 },
//      { 
//       Tamil:65,
//       English:55,
//       Maths:45 },
// ];
// console.log(studentMarks);
// const filMarks=studentMarks.filter((ele)=>ele>50);
// console.log(filMarks);
const details= [{mark:60},{mark:99},{mark:80}];
// a[b] ?
//     {...a,[b]:a[b]+1}:{...a,[b]:1},[]); 
const result=details.reduce((a,b) =>
a.mark>b.mark?a:b);
console.log(result);
const result1=details.reduce((a,b) =>
a.mark<b.mark?a:b);
console.log(result1);
  