//Let Use the Getter And Setter For Objects

const stude={
    _email:"zubair@gmail.com",
    _password:"password12345",


//Getter and setter for email
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
     this._email=value
    },

    //Getter and setter for password

    get password(){  //Getter is used to get the value from the setter
     return this._password.toUpperCase()
    },

   set password(value){  //Setter is used to set the value in memory as per our wish 
   this._password=value;
   }



}

const newstud=Object.create(stude)
console.log(newstud.email);
console.log(newstud.password);