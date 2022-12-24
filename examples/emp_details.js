const employee = [
    {
        "employeeid": 1,
        "name": "raju",
        "age": 34,
        "hiredate": "9/14/2018",
        "basic": 18000,
        "allowance": 15000,
        /*"monthlysalary": 33000,
        "Annualsalary": 396000,
        "bonus": 5,
        "bonusAmount": 16508*/
    },
    {
        "employeeid": 2,
        "name": "vinu",
        "age": 29,
        "hiredate": "3/12/2018",
        "basic": 20000,
        "allowance": 8000,
        /*"monthlysalary": 28000,
        "Annualsalary": 336000,
        "bonus": 5,
        "bonusAmount": 1400*/
    },
    {
        "employeeid": 3,
        "name": "neena",
        "age": 30,
        "hiredate": "8/8/2000",
        "basic": 30000,
        "allowance": 9000,
        /*"monthlysalary": 39000,
        "Annualsalary": 468000,
        "bonus": 10,
        "bonusAmount": 3900*/
    },
    {
        "employeeid": 4,
        "name": "subha",
        "age": 25,
        "hiredate": "1/9/2017",
        "basic": 25000,
        "allowance": 9000
        /*"monthlysalary": 34000,
        "Annualsalary": 408000,
        "bonus": 5,
        "bonusAmount": 1700*/
    },
    {
        "employeeid": 5,
        "name": "susma",
        "age": 32,
        "hiredate": "8/26/2021",
        "basic": 40000,
        "allowance": 7000
        /*"monthlysalary": 47000,
        "Annualsalary": 564000,
        "bonus": 15,
        "bonusAmount": 70508*/
    },
    {
        "employeeid": 6,
        "name": "rani",
        "age": 27,
        "hiredate": "12/13/2021",
        "basic": 33000,
        "allowance": 5600,
        //   "monthlysalary": 38600,
        //   "Annualsalary": 463200,
        //   "bonus": 10,
        //   "bonusAmount": 3860
    },
    {
        "employeeid": 7,
        "name": "vani",
        "age": 24,
        "hiredate": "9/8/2018",
        "basic": 35000,
        "allowance": 4200,
        //   "monthlysalary": 39200,
        //   "Annualsalary": 470400,
        //   "bonus": 10,
        //   "bonusAmount": 3920
    },
    {
        "employeeid": 8,
        "name": "prem",
        "age": 29,
        "hiredate": "8/9/2018",
        "basic": 30000,
        "allowance": 2800,
        //   "monthlysalary": 32800,
        //   "Annualsalary": 393600,
        //   "bonus": 5,
        //   "bonusAmount": 1640
    },
    {
        "employeeid": 9,
        "name": "bala",
        "age": 30,
        "hiredate": "10/29/2021",
        "basic": 43000,
        "allowance": 7400,
        //   "monthlysalary": 50400,
        //   "Annualsalary": 604800,
        //   "bonus": 15,
        //   "bonusAmount": 7560
    },
    {
        "employeeid": 10,
        "name": "suresh",
        "age": 32,
        "hiredate": "9/14/2018",
        "basic": 38523,
        "allowance": 5000

        //   "monthlysalary": 43523,
        //   "Annualsalary": 522276,
        //   "bonus": 10,
        //   "bonusAmount": 4352
    },
    {
        "employeeid": 11,
        "name": "tina",
        "age": 33,
        "hiredate": "7/26/2021",
        "basic": 40119,
        "allowance": 6400,
        //   "monthlysalary": 4659,
        //   "Annualsalary": 558228,
        //   "bonus": 15,
        //   "bonusAmount": 6978
    },
    {
        "employeeid": 12,
        "name": "anitha",
        "age": 31,
        "hiredate": "11/1/2000",
        "basic": 41714,
        "allowance": 8000,
        //   "monthlysalary": 49714,
        //   "Annualsalary": 596568,
        //   "bonus": 15,
        //   "bonusAmount": 7457
    },
    {
        "employeeid": 13,
        "name": "radha",
        "age": 27,
        "hiredate": "12/8/2010",
        "basic": 43309,
        "allowance": 5000,
        //   "monthlysalary": 48309,
        //   "Annualsalary": 579708,
        //   "bonus": 15,
        //   "bonusAmount": 7246
    },
    {
        "employeeid": 14,
        "name": "gowtham",
        "age": 29,
        "hiredate": "4/9/2018",
        "basic": 36000,
        "allowance": 6000
        //   "monthlysalary": 42000,
        //   "Annualsalary": 504000,
        //   "bonus": 10,
        //   "bonusAmount": 4200
    }
];

const bonus = [
    {
        salary: 45000,
        bonus: 15
    },
    {
        salary: 35000,
        bonus: 10
    },
    {
        salary: 25000,
        bonus: 5
    }
];


const getbonusPercentage = (totalSal) => {
    const percentage = bonus.find(({ salary }) => salary <= totalSal).bonus;
    return percentage;
}

const getMonthlySal = (emp) => {

    const monthlysalary = emp.basic + emp.allowance;
    //const annualSalary = monthlysalary * 12;
    return monthlysalary;
}

const addMonthlySal = (employee) =>
    employee.map((emp) => {
        const monthlySal = getMonthlySal(emp);
        const bonuPercent = getbonusPercentage(monthlySal);
        const bonuscal = bonuPercent / 100;

        return ({
            ...emp,
            monthlySalaryDetails: monthlySal,
            annualSalary: monthlySal * 12,
            bonusPercentage: bonuPercent,
            bonusAmount: Math.round(bonuscal * monthlySal)
        })
    });

const main = () => {
    const employeeSalary = addMonthlySal(employee);
    console.log(employeeSalary);

}
main();

//console.log(bonus);