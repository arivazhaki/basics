
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
		stops: ['Chennai', 'Viluppuram', 'Trichy']
    },
    {
		start: 'Chennai',
		end: 'Karur',
		stops: ['Chennai', 'Viluppuram', 'Trichy', 'Karur']
     },   
     {
		start: 'Trichy',
		end: 'Tirunelveli',
		stops: ['Trichy', 'Madurai', 'Tirunelveli']
     }
];
const findDistances=(stop,index,stops)=>(distances.find(({start,end})=>start===stop && 
end===stops[index+1]) || 0 ).distance||0;


const getDistances=(stops)=>{
	     const distanceData=stops.map(findDistances);
		console.log(distanceData);
		 return distanceData.reduce((a,b)=>a+b,0);
 }


const main=()=>{
    // const source="Chennai"
    // const destination="trichy";
    const routeDistance=routes.map((route)=>
	({
		start:route.start,
		end:route.end,
		TotalDistance:getDistances(route.stops)
	}));
	console.log(routeDistance);
	
}
main();
