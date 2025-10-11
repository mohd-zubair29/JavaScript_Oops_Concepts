class user{
    constructor(username){
        this.username=username;
    }

   static showname(){   //When We Use Static We Can't Extends This Property or can't access the property
        console.log(`Username Is ${this.username}`)
    }
}

class data extends user{
    constructor(username, email, state){
        super(username);
        this.email=email;
        this.state=state;
    }

}

const newUse= new data("zubair", "chai@yahoo.com", "Telangana");
console.log(newUse);

newUse.showname();


