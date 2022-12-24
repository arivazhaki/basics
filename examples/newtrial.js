const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];
/*const netSalary=employees.map((salDetails)=>
    ({...salDetails,
    netEarning:salDetails.salary+salDetails.bonus-salDetails.tax}));*/


const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;        }
const main=()=>
{
    let newArr = employees.map(calcAmt);
    console.log(newArr);
}
main()