let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];
const fullName=users.map(ele=>ele.firstName+ele.lastName);
console.log(fullName);

const user=users.map((element,index)=>element[index]);
console.log(user);

