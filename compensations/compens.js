const citizens = require('./citizens');
const locations = require('./locations');
const regions = require('./regions');
const regionalcompensation = require('./regionalcompensation');
const gendercompensation = require('./gendercompensation');
const agecompensation = require('./ageCompensation');


const findRegionType = (citizen, locations) => {
    const regionName =locations.find(({ location }) => location === citizen.location).region;
    const regionType = regions.find(({ region }) => region === regionName).type;
    return { regionName, regionType };

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


const findGenderCompensation = (citizen, genderCompensation) => {
    console.log(citizen);
    const genderComp = genderCompensation.find(({ gender }) =>
        gender === citizen.gender).compPercentage;
    return genderComp;
}


const findAgecompensation = (citizen, agecompensation) => {
    const ageCompensation = agecompensation.find(({ minAge }) =>
        minAge <= citizen.age).compPercentage;
    return ageCompensation;
}


const addFields = (extendedCitizensData, regionalcompensation) => extendedCitizensData.map((citizen) => {

    const regionCompensation = findRegionalcompensation(citizen, regionalcompensation);
    const genderCompPercent = findGenderCompensation(citizen, gendercompensation);
    const genderCompAmount = genderCompPercent * regionCompensation;
    const ageCompPercent = findAgecompensation(citizen, agecompensation);
    const ageCompAmount = ageCompPercent * regionCompensation;
    return ({
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
    const finalCompensationData = addFields(extendedCitizensData, regionalcompensation);
    console.log(finalCompensationData);
}
main();