console.log ("practicando objetos")

//Creando un objeto vacio 

const Myfirstobject ={}
console.log("Aqui esta un objeto vacio")
console.log(Myfirstobject)


//creando un objeto con propiedades 
const myObjetc2={
    name:"ruz",
    age:29,
    city:"Morelia,Michoacan"
}
console.log("imprimiendo segundo objeto")
console.log(myObjetc2)

const myObject3={
    name: "Ruz",
    age:29,
    city:"Morelia",
    origin:"Reynosa",

    nicknames:[
        "Ruz",
        "Apache",
        "El Extranjero"

    ],

    Adress:{
        Postalcode:58260,
        street:"Av del Maestro",
        Number:770,
        city:"Morelia"        
    }

}

console.log("Ejemplo de 3er objeto")
console.log(myObject3)
console.log(myObject3.name)
console.log(myObject3["nicknames"])
console.log(myObject3.Adress)

//Ejemplo 4 objetos con metodos 

const pet={
    name:"pelos",
    sayHello:function(){
        //this.name hace referencia ala propiedad name del objeto
        console.log(`${this.name} te  saluda en español`)
    }
}

console.log("impimiendo ejercicio 4")
pet.sayHello()

//ejemplo 5: objeto con metodo que recibe parametros 

const myPet = {
    name:"con",
    sayHellotomypet:function(yourPet){

        console.log(`${this.name} say's hellow to ${yourPet}`)
    }
}

console.log ("ejemplo 5 :objeto con metodo que recibe parametros")
myPet.sayHellotomypet("Pelos")