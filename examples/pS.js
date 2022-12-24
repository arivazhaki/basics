// const addprocessCost=(costPerYear)=>
//         costPerYear.map((cost)=>
//         ({
//             ...cost,
//             totalcost:gettotalCost(cost)
//         }));
//const addProfit=(costPerYear,profitTable)=>
//     profitTable.map((profit)=>{
//         const revenue=getCost(costPerYear);
//         return{
//             ...profit,
//             TotalCost:revenue
//         };
//     });
import csvToJson from 'csvtojson';

const getExpenses = (cost) =>
    Number(cost.ElecticBill) + Number(cost.GasBill) +
    Number(cost.ShopRent) + Number(cost.WaterBill) + Number(cost.WifiBill) +
    Number(cost.Employeesalery) + Number(cost.Incredienst);

const getRevenue = (product) =>
    (Number(product.tea) + Number(product.Coffee) +
        Number(product.biscat) + Number(product.cake) +
        Number(product.juice)) * 12;

const getprofitLevel = (profit) =>
    ((300000 < profit) ? "HighProfit" : "MediumProfit");

const addfields = (costPerYear, cafeProductPrice) =>
    costPerYear.map((cost) => {
        const { Year } = cost;

        const expenses = getExpenses(cost);
        const product = cafeProductPrice.find(({ year }) => year === Year);
        const revenue = getRevenue(product);
        const profit = revenue - expenses;
        const profitLevel = getprofitLevel(profit)

        return {
            Year,
            expenses,
            revenue,
            profit,
            profitLevel
        }
    });
const convertCostPerYear = (costPerYear) =>
    costPerYear.map((cost) => ({
        ...cost,
        electicBill: Number(cost.ElecticBill),
        GasBill: Number(cost.GasBill),
        Employeesalaery: Number(cost.Employeesalery),
        Incredienst: Number(cost.Incredienst),
        WaterBill: Number(cost.WaterBill),
        ShopRent: Number(cost.WaterBill),
        WifiBill: Number(cost.WifiBill)
    }));

const main = async () => {

    const costPerYear = await csvToJson().fromFile('./costPerYear.csv');
    const cafeProductPrice = await csvToJson().fromFile('./cafeProductPrice.csv');
    const profitTable = await csvToJson().fromFile('./profitTable.csv');
    const convertedCostPerYear = convertCostPerYear(costPerYear);

    const profit = addfields(costPerYear, cafeProductPrice);
    console.log(profit);
}
main(); 
