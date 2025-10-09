//Creating of an Classes

class user{
   constructor(username, email, address, place_of_birth){   //Same to Same As An Parameters in functions
    this.username=username;    //Defining The variables here
    this.email=email;
    this.address= address;
    this.place_of_birth=place_of_birth;
   }
   changeUsername(){
    return `${this.username.toUpperCase()}`   //Using Methods in classes
   }

}

/*
=> const firUse=new user("Zubair", "zubair29@gmail.com", "Karimnagar","Hyderabad");  //New We have To Write Compulsory From Here To get The Object Properties

console.log(firUse);
console.log(firUse.changeUsername()); //Dusre Function Ke Liye Alag Se Function Ku Call Karna Hai

=>  const secUse= new user("sanketh" , "sanketh@gmail.com", "san Francisco", "India");
console.log(secUse);
*/




class coaching{
    constructor(coachingname, type, fees, place, rating){
        this.coaching=coachingname;
        this.type=type;
        this.fees=fees;
        this.place=place;
        this.rating=rating;
    }
    changeCoachingName(){
        return `${this.coaching.toUpperCase()}`
    }


}

//Behind The Scene For This Classes As like A Functions
/*
function coaching(coachingname, type, fees, place, rating){
this.coaching=coachingname;
        this.type=type;
        this.fees=fees;
        this.place=place;
        this.rating=rating;
}
coaching.prototype.changename= function (){
     return `${this.coaching.toUpperCase()}`
}
*/



const secUse=new coaching("Vision IAS", "Offline", 150000, "Karol Bagh", "Best In India");
console.log(secUse);
console.log(secUse.changeCoachingName());  //This Is Used to Convert The lower case to upper case in classes


const thiUse= new coaching("Drishti IAS", "Offline", 125000, "Old Rajendar Nagar", "Best In Delhi");
console.log(thiUse);

// console.log(coaching.changename());



