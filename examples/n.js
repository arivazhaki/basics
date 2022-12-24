const animals =
["dog","cat","wolf","lion","dog","cat","wolf","lion","dog","tiger"];
//const Count=0;
const countedAnimals =animals.reduce((a,b) => 
    a[b] ?
    {...a,[b]:a[b]+1}:{...a,[b]:1},[]); 
    console.log(countedAnimals);


//{ dog: 3, cat: 2, wolf: 2, lion: 2, tiger: 1 }

let foods = [
    {name: 'steak', calories: 800, carbs: 10, fat: 30},
  {name: 'fruit', calories: 200, carbs: 20, fat: 0},
  {name: 'salad', calories: 100, carbs: 0, fat: 5},
  {name: 'chips', calories: 300, carbs: 10, fat: 10},
  {name: 'ice cream', calories: 700, carbs: 20, fat: 20},
  ]; 
  const countCalories=foods.reduce((sum,item)=>sum+item.calories,0);
  console.log(countCalories);
const total=()=>foods.reduce((basket,item)=>{
  let calories=item.calories;
  let carbs=item.carbs;
  let fat=item.fat;
  basket['calories'] +=calories;
  basket['carbs'] +=carbs;
  basket['fat'] +=fat;
  return basket;
});
console.table(total());

let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];
const fullName=users.map((username)=>
      username.firstName.concat(username.lastName));
console.log(fullName);



   
