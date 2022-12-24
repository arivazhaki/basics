import csvToJson from 'csvtojson';

const getTotalAmount=(extendedFeeDetails,patient)=>{
    
    const filteredPatientDetails=extendedFeeDetails.filter((p)=>p.PatientId===patient.PatientNo);
    const totalAmount=filteredPatientDetails.reduce((a,{Amount})=>a+Amount,0);
   // console.log(totalAmount);
    return {...filteredPatientDetails,
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
    return amountPerPatient;
}
const display=(processedData)=>{

    console.log(processedData);
   
}
const main = async () => {
    const inputData = await getInput();
    const processedData = processInput(inputData);
    display(processedData);
}
main(); 