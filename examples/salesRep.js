const salesData=[
    {
        salesRep :'Vikas',
        month : 'Jan',
        city:'Madurai',
        sales:50000
    },
    {
        salesRep:"Vikas",
        month:'Jan',
        city:'Madurai',
        sales:30000

    },
    {
        salesRep:'Vikas',
        month:'Feb',
        city:'Madurai',
        sales:60000

    },
    {
        salesRep:'Vikas',
        month:'Feb',
        city:'Madurai',
        sales:10000

    },
    {
        salesRep:'Sanjay',
        month:'Jan',
        city:'Madurai',
        sales:25000
    },
    {
        salesRep :'Sanjay',
        month : 'Jan',
        city:'Madurai',
        sales:30000
    },
    {
        salesRep:'Sanjay',
        month:'Feb',
        city:'Madurai',
        sales:40000

    },
    {
        salesRep:'Sanjay',
        month:'Feb',
        city:'Madurai',
        sales:25000

    },
    {
        salesRep :'Prakash',
        month : 'Jan',
        city:'Madurai',
        sales:75000
    },
    {
        salesRep:'Prakash',
        month:'Jan',
        city:'Madurai',
        sales:90000

    },
    {
        salesRep:'Prakash',
        month:'Feb',
        city:'Madurai',
        sales:10000

    },
    {
        salesRep:'Prakash',
        month:'Feb',
        city:'karur',
        sales:80000

    },

];

const incentives=[
    {
        salesAmount :200000, 
        incentives :'Tech goodies'
    },
    {
    salesAmount:100000 ,
    incentives:'Gym Membership',
    },
    {
    salesAmount:50000,
    incentives:'Spotify,Netflix Membership'
    }
];
const getIncentives=(personWiseSales)=>{
    const incentivesDetails=incentives.find(({salesAmount})=>
            salesAmount<=personWiseSales&& personWiseSales>100000).incentives;
    return incentivesDetails;
}

const getSale=(person,salesMonths)=>{
     
    const salesDetails=salesMonths.map((salesMonth)=>
    {
        const monthlySales=salesData.filter(({salesRep,month})=>
            salesRep===person && month===salesMonth);
        const monthWiseSales=monthlySales.reduce((a,b)=>a+b.sales,0);
       return ({
                name:person,
                month:salesMonth,
                monthlySales:monthWiseSales
               });
    })
    console.log(salesDetails);
    const personWiseSales=salesDetails.reduce((a,b)=>a+b.monthlySales,0);

   return ({
            name:person,
            personWiseSales:personWiseSales,
            Incentives:getIncentives(personWiseSales)
       });          
 }

const main=()=>{

    const salePersons=[...new Set(salesData.map(({salesRep})=>salesRep))];    
    const salesMonths=[...new Set(salesData.map(({month})=>month))];
        
    const totalSales=salePersons.map((person)=>
    ({
        ...getSale(person,salesMonths)
    }))
    
    console.log(totalSales);
}
main();
