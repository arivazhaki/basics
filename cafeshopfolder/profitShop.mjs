import csvToJson from 'csvtojson';

const getExpenses = (cost) =>
    cost.ElecticBill + cost.GasBill +
    cost.ShopRent + cost.WaterBill + cost.WifiBill +
    cost.Employeesalery + cost.Incredienst;

const getRevenue = (product) =>
    (Number(product.tea) + Number(product.Coffee) +
        Number(product.biscat) + Number(product.cake) +
        Number(product.juice)) * 12;

const getprofitLevel = (profit) =>
    ((300000 < profit) ? "HighProfit" : "MediumProfit");

const addfields = (convertedCostPerYear, cafeProductPrice) =>
    convertedCostPerYear.map((cost) => {
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
        ElecticBill: Number(cost.ElecticBill),
        GasBill: Number(cost.GasBill),
        Employeesalery: Number(cost.Employeesalery),
        Incredienst: Number(cost.Incredienst),
        WaterBill: Number(cost.WaterBill),
        ShopRent: Number(cost.WaterBill),
        WifiBill: Number(cost.WifiBill)
    }));

const getInput = async () => {

    const costPerYear = await csvToJson().fromFile('./costPerYear.csv');
    const cafeProductPrice = await csvToJson().fromFile('./cafeProductPrice.csv');
    const profitTable = await csvToJson().fromFile('./profitTable.csv');
    return { costPerYear, cafeProductPrice, profitTable };
}

const processInput = ({ costPerYear, cafeProductPrice }) => {

    const convertedCostPerYear = convertCostPerYear(costPerYear);
    const profit = addfields(convertedCostPerYear, cafeProductPrice);
    return { convertedCostPerYear, profit };
}

const display = ({profit}) => {
    console.log(profit);
}

const main = async () => {

    const inputData = await getInput();
    const processedData = processInput(inputData);
    display(processedData);

}
main(); 
