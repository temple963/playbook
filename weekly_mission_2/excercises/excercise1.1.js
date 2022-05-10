const Guaposvalhalla={
Integrants:["Mario","Jael","Ruz"],
author:"Ruz",
RacesValhalla:4,
Ages:[32,34,29],
Spartans:4,

TotalRaces:function(){
    return this.RacesValhalla+this.Spartans 
},

Generalinfo:function(){
    return `This repository was created by ${this.author}`
}

}
console.log("Mi primer objeto")
console.log(Guaposvalhalla)
Guaposvalhalla.TotalRaces()
Guaposvalhalla.Generalinfo()
console.log(Guaposvalhalla.TotalRaces())