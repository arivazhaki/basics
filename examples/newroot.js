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
    'route':'chennai-trichy',
    'stops':[
        {'start':'Chennai',
        'end':'Viluppuram'},
        {'start':'Viluppuram',
        'end':'Trichy'}
    ],
  },
 { 'route':'chennai-karur',
    'stops':[
        {'start':'Chennai',
        'end':'Viluppuram'},
        {'start':'Viluppuram',
        'end':'Trichy'},
        { 'start':'Trichy',
        'end':'Karur'}
    ],
   
 },
   { 'route':'trichy-tirunelveli',
    'stops':[
        {'start':'Trichy',
        'end':'Madurai'},
        {'start':'Madurai',
        'end':'Tirunelveli'}
    ],
    },  
];

const findDistances=(stop)=>(distances.find(({start,end})=>start===stop.start && 
end===stop.end) || 0 ).distance||0;


const getDistances=(stops)=>{
	     const distanceData=stops.map(findDistances);
         return distanceData.reduce((a,b)=>a+b,0);
 }
const main=()=>{
    // const source="Chennai"
    // const destination="trichy";
    const routeDistance=routes.map((route)=>
	({
		routeDistance :route.route,
		TotalDistance:getDistances(route.stops)
	}));
	console.log(routeDistance);
	
}
main();
