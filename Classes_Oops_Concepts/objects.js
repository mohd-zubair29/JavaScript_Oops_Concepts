
function userData (username, age, date_of_birth, place_of_birth, state, country, date ){
    this.username=username;
    this.age=age;
    this.date_of_birth= date_of_birth;
    this.place_of_birth=place_of_birth;
    this.state=state;
    this.country= country;
    this.date= new Date()
    return this
}


const firUser=userData("zubair", 22, 29_01_2003, "hyderabad", "Telangana", "India" );
console.log(firUser);



