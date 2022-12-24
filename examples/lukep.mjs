const family=[
    {
        person:"Darth Vader",
        relation:"father"

    },
    {
        person:"Leia",
        relation:"sister"
    },
    {
        person:"Han",
        relation:"brother in law"
    }
];
//const result=family.find((fam)=>fam.person==="Darth Vader").relation;
//onsole.log("Hi Luke,i am your "+result);
const newresult=()=>
        {        
        // const rel1=family.find((famy)=>
        // famy.person==="Han").relation;
        return family.person==="Han"? "brother inlaw"
         :family.person==="Darth Vader"?"father"
         :"sister";
        }
 console.log("hello luke, I am ur "+newresult(family));

 
  // { name: 'cherries', quantity: 5 }
//const Result1=family.find((fam)=>fam.person==="Leia").relation;
//console.log("Hi Luke,i am your "+result1);
