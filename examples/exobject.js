const monday = [
	{
		name: 'Write a tutorial',
		duration: 180,
	},
	{
		name: 'Some web development',
		duration: 120,
	},
];
const tuesday = [
	{
		name: 'Keep writing that tutorial',
		duration: 240,
	},
	{
		name: 'Some more web development',
		duration: 180,
	},
	{
		name: 'A whole lot of nothing',
		duration: 240,
	},
];
const Result=monday.map((mon) =>
({...mon,hours: mon.duration/60}));
console.log(Result);
/*const Result1=tuesday.map((tues) =>
({...tues,hours: tues.duration/60}));
console.log(Result1);
const totalduration=tuesday.map(item=>
		item.duration).reduce((prev,next)=>prev+next);
const re={...tuesday,total:"totalduaration"};
console.log(tuesday);
const total=console.log("totalDuration:" +totalduration);*/
//traveler.map(item => item.Amount).reduce((prev, next) => prev + next);