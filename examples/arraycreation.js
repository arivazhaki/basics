const students=[
    { Id :1201,
      firstName:"Harshitha",
      lastName:"mani",
      standard:4
    },
    {  Id :1202,
       firstName:"Harshi",
       lastName:"saravan",
       standard:5
    }
];
const personal=[
    {
        native:"Tanjore",
        bloodGroup:"A+ve"
    },
    {
        native:"Trichy",
        bloodGroup:"B+ve"
    }
];
//const arr=[1,2,3];
//const fullName=students[0].firstName+students[0].lastName;
//students={...students};
const Result=students.map((student)=>
   ({...student,fullName: student.firstName+student.lastName}));
console.log(Result);
const nameGen=personal.map((person)=>
     ({...person,Name:"ARIVU"}));
console.log(nameGen);
