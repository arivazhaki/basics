export const uppercaseString = (string) => {
  return string.toUpperCase();
}

export const lowercaseString = (string) => {
  return string.toLowerCase()
}
import subtract from "./math_functions.js";
// Only change code above this line
subtract(7,4);
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then(result=>{
  console.log(result);
})