// const chai={
//     name:"zubair",
//     chaiFav:"Adrak Wale Chai",
//     price:200
// }

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name", )


//Functions Practices


const data= new Promise(function(resolve, reject){
    console.log("This Is Your Data Saved in Data Base");
})
.then(
    console.log("Your Data Saved")
).catch("Error")

console.log(data);