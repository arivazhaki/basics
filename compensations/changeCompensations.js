const citizens = require('./citizens');
const locations = require('./locations');
const regions = require('./regions');
const regionalcompensation = require('./regionalcompensation');
const gendercompensation = require('./gendercompensation');
const agecompensation = require('./ageCompensation');


const findRegionType = (citizen, locations) => {
    const regionName =
        locations.find(({location}) => location === citizen.location).region;
    const regionType = regions.find(({region}) => region === regionName).type;
    return {regionName,regionType };

}
const addRegionType = (citizens, locations) =>

    citizens.map((citizen) => {
        const regionType = findRegionType(citizen, locations);

        return ({
            ...citizen,
            ...regionType
          })
    });

const findRegionalcompensation = (citizen, regionalcompensation) => {

    const regionalComp =
        regionalcompensation.find(({ regionType }) => regionType === citizen.regionType).baseCompensation;
    return regionalComp;
}
// const getRegioalCompensation = (extendedCitizen, regionalcompensation) =>

//     extendedCitizen.map((citizen) => {
//         const regionCompensation = findRegionalcompensation(citizen, regionalcompensation);

//         return ({
//             ...citizen,
//             regionalcompensation: regionCompensation

//         })
//     });

const findGenderCompensation = (citizen, genderCompensation) => {
    console.log(citizen);
    const genderComp = genderCompensation.find(({ gender }) =>
        gender === citizen.gender).compPercentage;
    //console.log(newfindgen);
    return genderComp;
}

// const getGenderCompensation = (regionalComp, gendercompensation) =>
//     regionalComp.map((citizen) => {

//         const genderCompPercent = findGenderCompensation(citizen, gendercompensation);

//         return ({
//             ...citizen,
//             genderCompensionPercent: genderCompPercent,
//             genderCompensionAmount: genderCompPercent * citizen.baseCompensation
//         })
//     });

const findAgecompensation = (citizen, agecompensation) => {
    const ageCompensation = agecompensation.find(({ minAge }) =>
        minAge <= citizen.age).compPercentage;
    //console.log(ageCompensation);
    return ageCompensation;
}

// const getAgeCompensation = (genderComp, agecompensation) =>

//     genderComp.map((citizen) => {

//         const ageCompPercent = findAgecompensation(citizen, agecompensation);
//         return ({
//             ...citizen,
//             compenstionAgePercent: ageCompPercent,
//             compensationAgeAmount: ageCompPercent * citizen.baseCompensation
//         })
//     });

const addFields=(extendedCitizensData,regionalcompensation)=>extendedCitizensData.map((citizen)=>{
    
        const regionCompensation = findRegionalcompensation(citizen, regionalcompensation);
        const genderCompPercent = findGenderCompensation(citizen, gendercompensation);
        const genderCompAmount=genderCompPercent*regionCompensation;
        const ageCompPercent = findAgecompensation(citizen, agecompensation);
        const ageCompAmount=ageCompPercent*regionCompensation;
        return({
            ...citizen,
            regionCompensation,
            genderCompPercent,
            genderCompAmount,
            ageCompPercent,
            ageCompAmount
        })
    })
const main = () => {
    const extendedCitizensData = addRegionType(citizens, locations);
    const finalCompensationData=addFields(extendedCitizensData,regionalcompensation);
    //const regionalComp = getRegioalCompensation(extendedCitizen, regionalcompensation);
    //const genderComp = getGenderCompensation(regionalComp, gendercompensation);
    //const ageCompensation = getAgeCompensation(genderComp, agecompensation);
    //console.log(findGenderCompensation);  
    console.log(finalCompensationData);
}
main();