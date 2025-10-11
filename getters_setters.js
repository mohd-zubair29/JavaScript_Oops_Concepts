//This Is Used to Set The values And Show The Value As Per Our Logic
//Take An Example For Setting of password

class student{
    constructor(email, password){
        this.email=email;
        this.password=password;
    }
/*
    get password(){
     return `${this.password}zubair`
    }
    set password(value){
      return `${this.password}=password`   
      // Maximum call stack size exceeded
        }                                 at get password 
                                            at get password 

                                           at get password 
                                           at get password 
                                           at get password 
                                           at get password 
                                          at get password 
                                          at get password 
  //Here We have to change the variable name
*/

get password(){
    return `The PassWord is ${this._password}Zubair`.toUpperCase();
}
set password(value){
   this._password=value;
}


}

// const newstu=new student("zubair@ai.in", "1234567");
// console.log(newstu.password);



//Another Example For Getters And Setters

class insta{
    constructor(username, email, password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
//Username For Getters And Setters
 set username(username){
  this._username=username;
 }

 get username(){
    return `${this._username}`.toUpperCase();
 }

 //email For getters And Setters

get email(){
    return `${this._email}`.toUpperCase();
}
set email(val){
    this._email=val;
}


}

const dat= new insta("mohammed._.zubair", "zubair@hotmail.com", "password");
console.log(dat.username);
console.log(dat.email);