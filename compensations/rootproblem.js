const distances = [
	{
		start: 'Chennai',
		end: 'Viluppuram',
		distance: 166,
	},
	{
		start: 'Viluppuram',
		end: 'Trichy',
		distance: 165,
	},
	{
		start: 'Trichy',
		end: 'Madurai',
		distance: 138,
	},
	{
		start: 'Madurai',
		end: 'Tirunelveli',
		distance: 171,
	},
	{
		start: 'Tirunelveli',
		end: 'Kanyakumari',
		distance: 85,
	},
	{
		start: 'Trichy',
		end: 'Karur',
		distance: 83,
	},
];
const routes = [
	{
		start: 'Chennai',
		end: 'Trichy',
		stops: ['Chennai', 'Viluppuram', 'Trichy'],
		legs: [
			{
				from: "Chennai",
				to: "Viluppuram",
			},
			{
				from: "Viluppuram",
				to: 'Trichy'
			}
		]
	},

	{
		start: 'Chennai',
		end: 'Karur',
		stops: ['Chennai', 'Viluppuram', 'Trichy', 'Karur'],
		legs: [
			{
				from: "Chennai",
				to: "Viluppuram",
			},
			{
				from: "Viluppuram'",
				to: 'Trichy',
			},

			{
				from: 'Trichy',
				to: 'Karur'
			}
		]
	},

	{
		start: 'Trichy',
		end: 'Tirunelveli',
		stops: ['Trichy', 'Madurai', 'Tirunelveli'],
		legs: [
			{
				from: "Trichy",
				to: "Madurai",
			},
			{
				from: "Madurai",
				to: 'Tirunelveli'
			}
		]

	},
];

const getDistance=(ele)=>{
	const result=ele.map((route)=>(distances.find((distance)=>
	distance.start===route.from &&
	distance.end===route.to)));
	console.log(result);
	return result;
}


const getDistances=(distances,routes)=>
{	
	
	const route=routes.map((ele)=>getDistance(ele.legs));

	
	
	

}
const main=()=>
	{
		const Distance=getDistances(distances,routes);
		//console.log(Distance);
	}
main();

























// const findstopName = (route, distances) => {
// 	const stop = routes.map((ele) => ele.stops);
// 	//console.log(stop);
// 	const findDistances = stop.map((ele, index, Array) => {
// 		distances.find((el => el.start === ele) &&
// 			el.end === array[index + 1])).distance;
// });

// console.log(findDistances)
// }
// //const findDistances=distances.find((element)=>
// // element.start===stop).distance;
// // console.log(findDistances);
// // return findDistances


// const addstopName = (routes) =>

// 	routes.map((route) => {
// 		const finddis = findstopName(route, distances);
// 		return
// 		({
// 			...route,
// 			stoppingDistance: finddis.findDistances
// 		})
// 	});


// const main = () => {
// 	const stopName = addstopName(routes);
// 	//console.log.apply(stopName);
// }
// main()
