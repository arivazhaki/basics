import csvToJson from 'csvtojson';

const addDateDetails=(patientBill)=>

patientBill.map((patient)=>{

const joinDate=new Date(patient.DateOfJoining);
const dischargeDate=new Date(patient.DateOfDischarge);
const noOfDays=dischargeDate.getDate()-joinDate.getDate();

      return{
          ...patient,
       noOfDays
       };
      
   });

const getTotalAmount=(extendedFeeDetails,patient)=>{
    
  const filteredPatientDetails=extendedFeeDetails.filter((p)=>p.PatientId===patient.PatientNo);
  const totalAmount=filteredPatientDetails.reduce((a,{Amount})=>a+Amount,0);
 
  return { PatientId:patient.PatientNo,
    TotalAmount:totalAmount};
}
const getDoctorFees = (ward, wardcharges) => {

  const doctorCharges = wardcharges.find(({WardType}) => WardType === ward).DoctorFees;
  return doctorCharges;
}
const getWardFees = (ward, wardcharges) => {
  const wardFee = wardcharges.find(({WardType}) => WardType === ward).Charges;
  return wardFee;
}

const addFeeDetails = (patientDetails, wardcharges) =>

    patientDetails.map((patient) => {

        const doctorFeesperDay = getDoctorFees(patient.WardType, wardcharges);
        const totaldoctorFess = patient.Days * doctorFeesperDay;
        const wardFeePerDay = getWardFees(patient.WardType, wardcharges);
        const totalwardFee = wardFeePerDay * patient.Days;
        const Amount = totaldoctorFess + totalwardFee;
      
        return {
            ...patient,
            DoctorFee: doctorFeesperDay,
            DoctorTotalFee: totaldoctorFess,
            wardFees: wardFeePerDay,
            TotalWardFee: totalwardFee,
            Amount: Amount,
            //amountPerPatient:getAmount(patient,patientDetails)
        };

    });
const getInput = async () => {
  const patientBill = await csvToJson().fromFile('./patientBill.csv');
  const patientDetails = await csvToJson().fromFile('./patientDetails.csv');
  const wardcharges = await csvToJson().fromFile('./wardcharges.csv');
  const maintenance = await csvToJson().fromFile('./hospitalmaintenance.csv');

  return {patientBill,patientDetails,wardcharges,maintenance};
}

const processInput=({patientBill,patientDetails,wardcharges})=>{
  
  const extendedFeeDetails = addFeeDetails(patientDetails, wardcharges);
  const amountPerPatient=patientBill.map((patient)=>getTotalAmount(extendedFeeDetails,patient));
  const datefunction= addDateDetails(patientBill);
  return {extendedFeeDetails,amountPerPatient,datefunction};
}
const display=({extendedFeeDetails,amountPerPatient,datefunction})=>{

  console.log(extendedFeeDetails);
  console.table(amountPerPatient);
  console.table(datefunction);
}
const main = async () => {
  const inputData = await getInput();
  const processedData = processInput(inputData);
  display(processedData);
}
main(); 

// const getDateDetails=(patients)=>{
//       const joinDate=patients.map((patient)=>new Date(patient.DateOfJoining));
//       const dischargeDate=patients.map((patient)=>new Date(patient.DateOfDischarge));
//       const days=joinDate.map((joing)=>joing.getDate());
//       const day=dischargeDate.map((discharge)=>discharge.getDate());
     
//       //const dateDifference=
//       console.log(days);
//       console.log(day);
//       //console.log(dateDifference);
      
//       return{joinDate,dischargeDate};
//   }
  
//   const addDateDetails=(patientBill)=>
  
//        patientBill.map((patients)=>{
//            const datefunction=getDateDetails(patients);
//            return{
//               ...patients,
//            days:datefunction
//            };
          
//        });
//   const datefunction= addDateDetails(patientBill);
//    console.log(datefunction);
