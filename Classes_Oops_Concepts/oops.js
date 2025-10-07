/*

const user={
    username:"mohammed._.zubair",
    Instagram:"Yes",
    github:"mohd-zubair29",
    gmail:"zubzubair29@gmail.com",
    laptopmail:"zubairpc2901@gmail.com",
     
    whatsapp: function(){
        console.log(`username: ${this.username}`)  //This Keyword Is Used For Local Context 
        console.log(7329983629)
    }
}

console.log(user, user.whatsapp())

console.log(this); //This Is Global Context This will Only Show the current context that is windows




 function user(username, isSigned, isLoggedIn, accountStatus){
    this.username=username;
   this.isSigned=isSigned;
    this.isLoggedIn=isLoggedIn;
    this.accountStatus=accountStatus

    return this
}

const userOne=user("zubair", "Yes", true, 'Active');  //Aisa Carre tou original value aate phir agar dusre fuction define karre tou yeh wala overwrite kardeta

console.log(userOne);

const userTwo= user("Simran", "Yes", true, "Active")
console.log(userTwo);   //This Will Overwrite The Above One's 


console.log(user("Affan", "Yes", true, "active"));

console.log(new user("Anas Fahad", "YES", true, "Not Active"));  //new keyword is used to create a copy of The object.

*/
//Example for overwrite of this 

// new keyword use karre tou naya copy banjata 
// return this karre pura object return karta


//Constructor makes the objects as abstract, encapsulat

function AnoUser(user, college, dist, state, country){
    this.user=user;
    this.college=college;
    this.dist=dist;
    this.state=state;
    this.country=country;

    return this
}

const  newUser= AnoUser("Zubair", "NGEC", "Karimnagar", "Telangana", "India");
console.log(newUser);

const newUser2=new AnoUser("Zayed", "JITS", "karimnagar", "Telangana", "India");
console.log(newUser2.constructor); //This Will Create An Instances And Copy Of Objects


