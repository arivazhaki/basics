const arr=["you","will"];
var str=["you"];
for(let i=0;i<arr.length; i++)
{
    if(str === arr[i])
    {
      str = "string is present";
      break;
    }
    else{
         str="Not found";
        }
}
console.log(str);
