const FirstyearDetails = [
  {
    "S.no": 1,
    "Name": "Visheka",
    "year": "I",
    "courses": "BSC",
  },
  {
    "S.no": 2,
    "Name": "Mohan",
    "year": "I",
    "courses": "BCA",

  },
  {
    "S.no": 3,
    "Name": "Arjun",
    "year": "I",
    "courses": "BCOM",
  },
  {
    "S.no": 4,
    "Name": "Raju",
    "year": "I",
    "courses": "BCA",

  },
  {
    "S.no": 5,
    "Name": "Krithisha",
    "year": "I",
    "courses": "BCOM",

  },
  {
    "S.no": 6,
    "Name": "Manisha",
    "year": "I",
    "courses": "BSC",

  },
  {
    "S.no": 7,
    "Name": "Anu",
    "year": "I",
    "courses": "BSC",

  },
  {
    "S.no": 8,
    "Name": "Vishal",
    "year": "I",
    "courses": "BCOM",

  },
  {
    "S.no": 9,
    "Name": "Anush",
    "year": "I",
    "courses": "BCA",

  },
  {
    "S.no": 10,
    "Name": "Anuj",
    "year": "I",
    "courses": "BCOM",

  },
  {
    "S.no": 11,
    "Name": "Yash",
    "year": "I",
    "courses": "BSC",

  },
  {
    "S.no": 12,
    "Name": "Ayisha",
    "year": "I",
    "courses": "BCA",

  }
];
const details = [
  {
    "S.no": 1,
    "Student id": 101,
    "Name": "Visheka",
    "courses": "BSC",
    "Paidmonth": "June"
  },
  {
    "S.no": 2,
    "Student id": 102,
    "Name": "Mohan",
    "courses": "BCA",
    "Paidmonth": "July",
  },
  {
    "S.no": 3,
    "Student id": 103,
    "Name": "Arjun",
    "courses": "BCOM",
    "Paidmonth": "August",
  },
  {
    "S.no": 4,
    "Student id": 104,
    "Name": "Raju",
    "courses": "BCA",
    "Paidmonth": "June",
  },
  {
    "S.no": 5,
    "Student id": 105,
    "Name": "Krithisha",
    "courses": "BCOM",
    "Paidmonth": "June"
  },
  {
    "S.no": 6,
    "Student id": 106,
    "Name": "Manisha",
    "courses": "BSC",
    "Paidmonth": "August"

  },
  {
    "S.no": 7,
    "Student id": 107,
    "Name": "Anu",
    "courses": "BSC",
    "Paidmonth": "August"
  },
  {
    "S.no": 8,
    "Student id": 108,
    "Name": "Vishal",
    "courses": "BCOM",
    "Paidmonth": "July"
  },
  {
    "S.no": 9,
    "Student id": 109,
    "Name": "Anush",
    "courses": "BCA",
    "Paidmonth": "June"
  },
  {
    "S.no": 10,
    "Student id": 110,
    "Name": "Anuj",
    "courses": "BCOM",
    "Paidmonth": "July"
  },
  {
    "S.no": 11,
    "Student id": 111,
    "Name": "Yash",
    "courses": "BSC",
    "Paidmonth": "August"
  },
  {
    "S.no": 12,
    "Student id": 112,
    "Name": "Ayisha",
    "courses": "BCA",
    "Paidmonth": "June"

  }
];
const feesDetails = [
  {
    "courses": "BCA",
    "Fees": 30000
  },
  {
    "courses": "BCOM",
    "Fees": 20000
  },
  {
    "courses": "BSC",
    "Fees": 25000
  }
];
const penaltyCharges = [
  {
    "Paidmonth": "June",
    "penalty amt": 0
  },
  {
    "Paidmonth": "July",
    "penalty amt": 100
  },
  {
    "Paidmonth": "August",
    "penaltyamt": 250
  }
];
//   console.log(penaltyCharges);
//   console.log(feesDetails);
//   console.log(totalFees);
//   console.log(FirstyearDetails);

const getPenalty = (detail, penaltyCharges) => 
       penaltyCharges.find(({ Paidmonth }) =>
    Paidmonth == detail.Paidmonth).penaltyamt || 0;


const getCoursesFee = (detail, feesDetails) =>
        feesDetails.find(({ courses }) => courses === detail.courses).Fees;

const addFees = (details, feesDetails) =>
  details.map((detail) => {
    const courseFee = getCoursesFee(detail, feesDetails);
    const penalty = getPenalty(detail, penaltyCharges);
    const totalFee = penalty + courseFee;

    return ({
      ...detail,
      courseFee,
      penalty,
      totalFee
    })
  });

  const main = () => {
  const studentFees = addFees(details, feesDetails);
  console.log(studentFees);
}
main();