//Inheritance is the mehod of using properties of other classes 


class student{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`Name of student is ${this.username}`)
    }
}

 class details extends student{
        constructor(username, coaching, email, address){
            super(username);
            this.coaching=coaching;
            this.email=email;
            this.address=address;

        }
    }

    // const studet= new details ("zubair", "VISION IAS", "zubziar29@gmail.com", "Karimnagar");
    // console.log(studet);
    // console.log(studet.logme());



    //Customer Data

    class customer{
        constructor(customername){
            this.customername=customername;
        }

        showCusNam(){
            console.log(`Customer  Name Is ${this.customername}`);
        }
    }
 
    class data extends customer{
        constructor(customername,email, sim, phone, supports, state){
         super(customername);  //Pass Hojata Yaha se Waha Per
        
         this.sim=sim;
         this.phone=phone;
         this.supports=supports;
        }
    }

    const newUse=new data ("junaid", "junaidahmad@gmail.com", "Jio", "5G", "Unlimited" , "Uttar Pradesh");
    console.log(newUse);
    newUse.showCusNam();