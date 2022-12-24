const citizens = require('./citizens');
const locations=require('./locations');
const regions=require('./regions');
const regionalcompensation=require('./regionalcompensation');
const gendercompensation=require('./gendercompensation');
const agecompensation=require('./ageCompensation');


const getRegion=(citizen)=>{
    console.log(locations);
    const reg=citizens.map((el)=>
    ele.locations.find((ele)=>
       ele.location===citizen.location).region,[]);
    return reg;
}
// const  displayregion=(citizen)=>{
//    newRegion={};
//    newRegion=locations.find((ele)=>x                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ,const getRegion=(citizen)=>{
    const region=locations.find((element) => 
    element.location===citizen.location).region;
    const regionType=regions.find((ele) =>
    ele.region===region).type;
    return {region,regionType}

}
        
// const getregioncompensation=(region.type) =>{
        
//         return regionalcompensation.find((regType)=>
//                         regType.regionType === regionType).
//                         baseCompensation
//                 }            

const addregion=(citizens,locations,regions) =>
        citizens.map((citizen)=>{
        const {region}=getRegion(citizen);
        const{regionType}=getRegion(citizen);
        return {region}
        });
    
const main=()=>
{
    //console.log(citizens);
    console.log(addregion(citizens,locations,regions)); 

    //console.log()
 
}
main()
//     ele.location===locations[location].region 
//             //locations.region: null
//         //  locations.find((ele)=>
//         //   ele.location==citizen.location?
//         //   locations.region: null)
//     const getReg= citizens.forEach(newRegion);
//     console.log(getReg);
     
//     //newRegionType={};
// // newRegionType=citizens.map((getRe)=>
// //         ({...getRe,
// //         regionType:
// //         regions.find((e)=>e.region===newRegion).type
// //     }));
//   // console.log(newRegion);
  
//   return newRegion;
// }
const main=()=>
{
    const Region=getRegion(citizens);
    console.log(Region);
    //const addRegion=citizens.map(displayregion);
    //console.log(addRegion);
    // const addreg=citizens.map((findreg)=>
    //     ({...findreg,
    //         Region:displayregion(citizens)}));
    //console.log(addreg);
}
main()