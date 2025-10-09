//

function User(username){
     this.username=username;
}

function CreateUser(username, gmail, id){
   User.call(this, username) //this jaiso current function context dusre function ku use karne deta   // This Will Help To Call From Other Function
   this.gmail=gmail
   this.id=id

}

const firstUser=new CreateUser("Zubair", "zubair29@gmail.com", "mohammed._.zubair");
console.log(firstUser);