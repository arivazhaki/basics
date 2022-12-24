const accounts = [
    {
      name: 'Babu',
      accountNo: 2,
    },
    {
      name: 'Chandra',
      accountNo: 3,
    },
    {
      name: 'Arun',
      accountNo: 1,
    },
  ];
  const balances = {
    //accountNo: balance
    '1': 5000,
    '2': 2000,
    '3': 0,
  };
const transactions = [
    {
      accountNo: 1,
      type: 'withdrawal',
      amount: 1000,
    },
    {
      accountNo: 1,
      type: 'deposit',
      amount: 500,
    },
    {
  accountNo: 1,
  type: 'withdrawal',
  amount: 1000,
},
{
  accountNo: 2,
  type: 'deposit',
  amount: 300,
},
{
  accountNo: 2,
  type: 'withdrawal',
  amount: 200,
},
{
  accountNo:2,
  type: 'deposit',
  amount: 200,
},
];
//console.log(accounts);
//console.log(balances);
const getBalance=(details) =>({
    name:details.name,
    accountNo:details.accountNo,
    balance:balances[details.accountNo]
  });
  const displayBalance=()=>{
  const displayAccounts=accounts.map(getBalance);
  console.log(displayAccounts);
  }
const afetrTransaction=(transaction)=>
    (transaction.type==="withdrawal"
    ?balances[transaction.accountNo]-=transaction.amount
    :balances[transaction.accountNo]+=transaction.amount);
const finalTransaction=()=>
{
  const result=transactions.map(afetrTransaction);
  return result;
}
   
const main=()=>
{
  console.log("Balance Before Transaction: ");
  displayBalance();
  finalTransaction();
  console.log("Balance After Transaction: ");
  displayBalance();
}
main()