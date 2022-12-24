function getRandomBetween(min,max)
{
    //Math.random() * (max - min) + min;
   //return Math.floor(Math.random()*(max-min+1)+min);
    return Math.ceil(Math.random()*(max-min+1)+min);
}
function getRandomChar()
{
    return String.fromCharCode(getRandomBetween(97,122));
}
//console.log(charrandom());
function getRandomString(length)
{
    let str="";
    for(let i=0;i<length;i++)
    {
        str +=getRandomChar();
    }   
}
function getRandomHexaChar()
{
     
   str +=getRandomString(str(16));
    
}
function getHexaValues(length)
{
    /*let result='';
    for(let i=0;i<length;i++)
    {
        result +=getRandomHexaChar();
    }
    return result;*/
    Array(length).fill(0).map(getRandomHexaChar);
    

}
function getUUID()
{
    const array1=[8,4,4,4,12];
    let uuid=[];
   /* for(let i=0;i<array.length;i++)
    {
      uuid.push(getHexaValues(array[i]));
      console.log(uuid);
    }*/
    const map1= array1.map((ele)=>getHexaValues(ele));
    return uuid.join("-");
}
function main()
{
   console.log(getUUID());
    //console.log(getrandom(5,1));
    //console.log(getRandomString(5));
    console.log(getRandomHexaChar());
    //console.log(getHexaValues(6));
}
main();
