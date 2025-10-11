const heros=["salman", "shahrukh khan", "amair khan", "allu arjun"];


const data={
    name:"zubair",
    place_of_birth:"Hyderabad",
    state:"telangana",
    bike:"Activa",
    current_address:"karimnagar",
    goal:"Collector Sahab"
}

// console.log(data);

// Object.protoype.myname=function(){
//     console.log("Zubair has The Acces of ");
// }

// data.protoype.myname=function(){
//     console.log(`${this.name} Has An Access For All Girls`)
// }

// data.myname();
// // heros.myname()

// console.log(data.length);
// console.log(heros.length) //Length = 4 indexes=3 because indexing is zero based indexing 



//Inheritance

//It Is The Process Of Accessing other's properties.
//we will seee the old accessing and modern syntax of accessing of properties



const student={
   name:"zubair",
   qualification:"Bachelor's of technology",
   branch:"Computer Science And engineering",
   goal:"IAS OFFICER",
   Positions_Dream:"Cabinet Seceratary",
   Department:["Ministry Of Finance", "Ministry Of Defence", 'Ministry Of Banking', "Ministry Of Resources", " Ministry Of Election Commission"] 


}
 const coaching={
    coaching_Institue:"Vision IAS",
    Address:"Hyderabad"
 }
 const modules={
    modules:"GS FOUNDATION",
    __proto__: student    //With the help of this we can access the data from the student object

 }
const type={
  type_Of_coaching:"Offline"
}


// console.log(student);
// console.log(modules);

//Other method of inheritance

const myname= "Mohammed      Zubair";


String.prototype.truelength= function(){  //To declare for sting we have to user Sting for Array We Have To Use Array KeyWord for objevt we have to use Object
    console.log(`${this}`);  //prototype is also compulsory for accessing the property
    console.log(`Length of Variable Is ${this.trim().length}`)

}

myname.truelength()


//Modern syntax for inheritance

// const newavr= Object.setPrototypeOf(student,  modules);
// console.log(newavr);







