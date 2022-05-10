console.log("primera imprecion -Creacion de un objeto con propiedades")

const Object1={

    name:   "Ruz",
    age:    29,
    stack:  ["js","node","react","vue"],
    Bolog: {
        url: "github.com/carlogilmar/blog",
         posts:5
        }
}
console.log("accendiendo al objeto general")
console.log(Object1)

console.log("accediendo a un objeto especifio")
console.log(Object1.age)
//-----------------------------------




const ajolonauta={
    name:"woopa",
    mission:"Node.js",
    sayhellowtoExplorers:function(){
        console.log("Soy el Ajolonauta,Que onda!!")
    },
    tellmeMore:function(){
        return`Ajolonauta: ${this.name}`// --This es para checar el objeto en el cual se esta y poder acceder a una propiedad 
    }//return es para regresar el valor de

}

console.log("Ajolonauta") // Imprimiendo texto
console.log(ajolonauta)// Iprimiendo objeto
ajolonauta.sayhellowtoExplorers()//Llamando funciones
ajolonauta.tellmeMore()//Llamando Funciones 
