const citizens = require('./citizens');
const locations=require('./locations');
const regions=require('./regions');
const regionalcompensation=require('./regionalcompensation');
const gendercompensation=require('./gendercompensation');
const agecompensation=require('./ageCompensation');


//console.log(citizens);
const findRegion=(citizen,locations,regions,regionalcompensation)=>{
    const newRegion=
    locations.find((ele)=>ele.location === citizen.location).region;
    const newRegType=regions.find((ele)=>ele.region === newRegion).type;
    const regCompensation=
    regionalcompensation.find((ele)=>ele.regionType === newRegType).baseCompensation;
    return {newRegion,newRegType,regCompensation};
  
}

const addfields=(citizens,locations,regions,regionalcompensation)=>

citizens.map((citizen)=>{
    const citizenRegionType=findRegion(citizen,locations,regions,
        regionalcompensation);

    return({
        ...citizen,
       region:citizenRegionType.newRegion,
       regionType:citizenRegionType.newRegType,
       baseCompensation:citizenRegionType.regCompensation,
       
    })});

const findGenderComp=(citizen,gendercompensation)=>{
    const newfindgen=gendercompensation.find((ele)=>
    ele.gender===citizen.gender).compPercentage;
    //console.log(newfindgen);
    return newfindgen;
    }


const addGender=(fnRegion,gendercompensation)=>
fnRegion.map((citizen)=>{

    const compensation=findGenderComp(citizen,gendercompensation);

    return({
        ...citizen,
        genderCompensionPercent:compensation,
        genderCompensionAmount:compensation*citizen.baseCompensation
    })
});

const findAgecompensation=(citizen,agecompensation)=>{
    const ageCompensation=agecompensation.find((ele)=>
    ele.minAge <= citizen.age).compPercentage;
    console.log(ageCompensation);
    return ageCompensation;
 }

const addAgeCompensation=(findGenderCompensation,agecompensation)=>

findGenderCompensation.map((citizen)=>{

    const ageComp=findAgecompensation(citizen,agecompensation);
    return({
        ...citizen,
        compenstionAgePercent: ageComp,
        compensationAgeAmount:ageComp*citizen.baseCompensation
    })
});
    
const main=()=>{
    const findRegion=addfields(citizens,locations,regions,regionalcompensation);
    const findGenderCompensation=addGender(findRegion,gendercompensation);
    const findAgecompensation=addAgeCompensation(findGenderCompensation,agecompensation);
      
    console.log(findAgecompensation);
}
main();

