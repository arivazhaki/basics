const citizens = require('./citizens');
const locations=require('./locations');
const regions=require('./regions');
const regionalcompensation=require('./regionalcompensation');
const gendercompensation=require('./gendercompensation');
const agecompensation=require('./ageCompensation');


//console.log(citizens);
//const addRegionType=(citizen,regionalcompensation)=>{

const findRegion=(citizen,locations)=>{
    const newRegion=
    locations.find((ele)=>ele.location === citizen.location).region;
    const newRegType=regions.find((ele)=>ele.region === newRegion).type;
    return {newRegion,newRegType};
  
}

const addfields=(citizens,locations)=>{

citizens.map((citizen)=>{
    const citizenRegionType=findRegion(citizen,locations);

    return({
        ...citizen,
       region:citizenRegionType.newRegion,
       regionType:citizenRegionType.newRegType,
       baseCompensation:findRegionCompensation(citizen,regionalcompensation)
       
    })})
};
    const findRegionCompensation=(findRegion,regionalcompensation)=>{
    
        const regCompensation=
        regionalcompensation.find((ele)=>ele.regionType === regionType).baseCompensation;
        return regCompensation;
    }
    
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
    const findRegion=addfields(citizens,locations);
    const findRegionType=addRegionType(findRegion,regionalcompensation);
    const findGenderCompensation=addGender(findRegion,gendercompensation);
    const findAgecompensation=addAgeCompensation(findGenderCompensation,agecompensation);
      
    console.log(findAgecompensation);
}
main()
