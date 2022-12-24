const states = [
	{
		rank: 1,
		state: 'UttarPradesh',
		census: 19981234,
		estimate: 23.32,
	},
	{
		rank: 2,
		state: 'Maharashtra',
		census: 11237433,
		estimate: 12.54,
	},
	{
		rank: 3,
		state: 'Bihar',
		census: 10409945,
		estimate: 12.49,
	},
	{
		rank: 4,
		state: 'WestBengal',
		census: 91276115,
		estimate: 9.86,
	},
	{
		rank: 5,
		state: 'MadhyaPradesh',
		census: 72626809,
		estimate: 8.55,
	},
	{
		rank: 6,
		state: 'TamilNadu',
		census: 72147030,
		estimate: 7.66,
	},
	{
		rank: 7,
		state: 'Rajasthan',
		census: 68548437,
		estimate: 8,
	},
	{
		rank: 8,
		state: 'Karnataka',
		census: 61095297,
		estimate: 6.72,
	},
	{
		rank: 9,
		state: 'Gujarat',
		census: 60439692,
		estimate: 7,
	},
	{
		rank: 10,
		state: 'AndhraPradesh',
		census: 49386799,
		estimate: 5.3,
	},
	{
		rank: 11,
		state: 'Odisha',
		census: 41974218,
		estimate: 4.6,
	},
];
//console.log(states);
const getTotalPopulation = (states) => {
	//const tempPopu= states.map({state,estimate}=>({state,estimate}));
	const total = states.reduce((accumulator, { estimate }) =>
		(accumulator + estimate), 0);

	return total.toFixed(2);
}
const getMaxPopulation = (states) => {
	const MaxPopulation = states.reduce((acc, { estimate }) =>
	(acc > estimate
		? acc
		: estimate
	), []);

	return MaxPopulation;
}
const getMinValue = (states) => {
	const MinPopulation = states.reduce((acc, { estimate }) =>
	(acc.estimate < estimate
		? acc
		: estimate
	), []);

	return MinPopulation;
}
const display = (totalPopulation, maxPopulation, minPopulation) => {
	console.log("TotalPopulation: " + totalPopulation +
		"\n Max Population: " + maxPopulation +
		"\n Min Population: " + minPopulation);
}
const main = () => {
	const totalPopulation = getTotalPopulation(states);
	const maxPopulation = getMaxPopulation(states);
	const minPopulation = getMinPopulation(states);
	display(totalPopulation, maxPopulation, minPopulation);

}
main();